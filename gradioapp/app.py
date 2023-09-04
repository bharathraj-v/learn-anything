from langchain.llms import OpenAI
from langchain.chat_models import ChatOpenAI


llm = OpenAI(openai_api_key="...")

llm = OpenAI()
chat_model = ChatOpenAI()

llm.predict("hi!")

# import gradio as gr

# def echo(message, history):
#     return message


# demo = gr.ChatInterface(fn=echo, examples=["hello", "hola", "merhaba"], title="Interface", theme=gr.themes.Soft())

# demo.launch()