from langchain.chat_models import ChatOpenAI

import os
from dotenv import load_dotenv
load_dotenv()

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

llm = ChatOpenAI(model="gpt-3.5-turbo",  openai_api_key=OPENAI_API_KEY)
print(llm.predict("hi!"))

# import gradio as gr

# def echo(message, history):
#     return message


# demo = gr.ChatInterface(fn=echo, examples=["hello", "hola", "merhaba"], title="Interface", theme=gr.themes.Soft())

# demo.launch()