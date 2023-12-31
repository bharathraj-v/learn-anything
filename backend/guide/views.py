from django.shortcuts import render
from django.http import HttpResponse
import openai
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

import requests

import os
from dotenv import load_dotenv

from langchain.chat_models import ChatOpenAI
from langchain.llms import OpenAI
from langchain.prompts import (
    ChatPromptTemplate,
    MessagesPlaceholder,
    SystemMessagePromptTemplate,
    HumanMessagePromptTemplate,
)
from langchain.chains import LLMChain, ConversationChain
from langchain.memory import ConversationBufferMemory, ConversationSummaryMemory, ChatMessageHistory
from langchain.schema import SystemMessage
from langchain.memory import ConversationBufferMemory

import os
from dotenv import load_dotenv


class Guide(APIView):

    prompt = ChatPromptTemplate.from_messages([
        SystemMessage(content="""
            You are the Topic Guide for LearnAnything platform, an AI chat platform through which students can learn anything, interacting with learners. Your goal is to obtain the user's name, age, goals & educational background and you obtain that through questions.
            After obtaining the basic details, you ask what the user is looking to learn in the platform. You enquire them about what teaching approach they prefer, how indepth they want to learn, and
            then ask them about their strong and weak subjects. Based on this information, you curate upto 10 topics each with subtopics that the user needs to learn through LearnAnything.
            You reply to "Hi" or any such greeting with "Hi, I'm the Topic Guide for LearnAnything. I'm here to help you learn anything you want. What's your name?"
            The last message is the one with the topic list, formatted in the following way:
            1. Topic 1
                - Subtopic 1
                - Subtopic 2
            2. Topic 2...
            You end the message with "\n ENDING CONVERSATION" at the end of the message always.
            """),  # The persistent system prompt
        MessagesPlaceholder(
            variable_name="chat_history"),  # Where the memory will be stored.
        HumanMessagePromptTemplate.from_template(
            "{human_input}"),  # Where the human input will injected
    ])

    # memory = ConversationSummaryMemory(llm=OpenAI(
    #     openai_api_key=OPENAI_API_KEY, model='gpt-3.5-turbo-instruct'), memory_key="chat_history", return_messages=True
    #     )

    memory = ConversationBufferMemory(memory_key="chat_history", return_messages=True)

    def post(self, request):
        message = request.data['message']
        openai_key = request.data['key']
        
        llm = ChatOpenAI(openai_api_key=openai_key, model='gpt-3.5-turbo')
        chat_llm_chain = LLMChain(
            llm=llm,
            prompt=self.prompt,
            verbose=True,
            memory=self.memory,
        )

        topics_dict = {}
        response =  chat_llm_chain.predict(human_input=message)
        if "ENDING CONVERSATION" in response.split("\n")[-1]:
            topic_message = chat_llm_chain.memory.chat_memory.messages[-1].content
            topic_message = topic_message.split("\n")
            topic_message = [x for x in topic_message if x != ""]
            topic_message = [x for x in topic_message if '-' in x or any(char.isdigit() for char in x)]
            topics_indexes = [i for i, x in enumerate(topic_message) if x[0].isdigit()]
            topics = [topic_message[i] for i in topics_indexes]
            for i in range(len(topics_indexes)-1):
                topics_dict[topics[i][2:]] = []
                for j in range(topics_indexes[i]+1, topics_indexes[i+1]):
                    topics_dict[topics[i][2:]].append(topic_message[j].strip("- "))
            print(topics_dict)
            self.memory.clear()
            return Response({"message": "CONVERSATION ENDED", "topics": topics_dict}, status=status.HTTP_200_OK)

        else:
            return Response({"message": response}, status=status.HTTP_200_OK)   


        

        return Response(message, status=status.HTTP_200_OK) if message else Response(status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        return Response("Post the user request", status=status.HTTP_200_OK)
