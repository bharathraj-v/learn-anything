import { useState, useEffect } from "react"



const ChatInterface = (history) => {

    const [messages, setMessages] = useState([
            {
                id: 1,
                sender: "user",
                message: "Hi",
            },
            {
                id: 2,
                sender: "bot",
                message: "Hi, I'm the Topic Guide for LearnAnything. I'm here to help you learn anything you want. What's your name?",
            },
            {
                id: 3,
                sender: "user",
                message: "I'm Bharath Raj",
            },
            {
                id: 4,
                sender: "bot",
                message: 'Hi Bharath Raj! Nice to meet you. How old are you?',
            },
            {
                id: 5,
                sender: "user",
                message: "I'm 20 years old",
            },
            {
                id: 6,
                sender: "bot",
                message: "Hi Bharath Raj! Nice to meet you. As a Topic Guide for LearnAnything, I'm here to help you learn anything you want. What are your goals and what is your educational background?",
            },
            {
                id: 7,
                sender: "user",
                message: "I wanna be a deep learning engineer. I'm currently an undergraduate student",
            },
            {
                id: 8,
                sender: "bot",
                message: "That's great, Bharath Raj! As an undergraduate student in computer science, learning deep learning theory will be an excellent addition to your skill set. It's an exciting field with a lot of potential for growth. To make sure I provide you with the most relevant topics and subtopics, could you please let me know how in-depth you would like to learn about deep learning theory? Are you looking for a high-level overview or do you want to dive into the technical details?",
            },        
                
    ]) 

    useEffect(() => {
        // change scroll position to bottom
        const chat = document.getElementById("chat");
        chat.scrollTop = chat.scrollHeight;
    }, [messages])

    return (
        <div id = "chat" className="absolute mt-[3%] ml-[17%] h-[94%] overflow-scroll w-[83%]">
            <div className="fixed w-full  h-24 bottom-0">
            <div className="flex flex-row w-[83%] items-center h-full px-[16%] ">
                <div className="flex rounded-lg border-2 shadow-md border-[#919191] font-Inter border-opacity-50 w-[90%] h-12 px-4 justify-between bg-white items-center">
                    <textarea
                        placeholder="Send a message"
                        className="flex w-full h-11 justify-center items-center py-2 px-2  text-light  text-[#303030] rounded-md resize-none  outline-none" />
                    <span className="flex text-[#303030] ">
                        <svg
                            width={20}
                            height={20}
                            viewBox="0 0 13 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="5.41667"
                                cy="5.41664"
                                r="4.66667"
                                stroke="#ACACAC"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8.625 8.8921L11.5417 11.8088"
                                stroke="#ACACAC"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </div>
         

            </div>
        </div>
        <div className="flex ml-[15%] pb-24 pt-8 flex-col  w-[70%]   overflow-scroll">

            {/* <div id="bot" className="flex py-6 flex-row  w-full">
                <div className = "flex h-10 w-10 bg-[#2890A7] rounded-full"> </div>
                <div className="flex px-5 py-3 text-justify leading-normal text-[#303030] ml-6 font-Inter w-[80%] bg-white rounded-lg" >
                
                </div>
            </div>

            <div id="human" className="flex py-6 justify-end flex-row  w-full">
                <div className="flex px-5 py-3 text-justify leading-normal text-[#303030] mr-6 font-Inter  bg-[#D9D9D9] rounded-lg" >
                        </div>
                <div className = "flex h-10 w-10 bg-gray-500 rounded-full"> </div>

            </div>
            <div id="bot" className="flex py-6 flex-row  w-full">
                <div className = "flex h-10 w-10 bg-[#2890A7] rounded-full"> </div>
                <div className="flex px-5 py-3 text-justify leading-normal text-[#303030] ml-6 font-Inter w-[80%] bg-white rounded-lg" >
                </div>
            </div> */}
            {
                messages.map((message) => {
                    if (message.sender == "bot") {
                        return (
                            <div id="bot" className="flex py-4 flex-row justify-start  w-full">
                                <div className = "absolute h-12 w-12 bg-[#2890A7] rounded-full"> </div>
                                <div className="flex px-5 py-3  leading-normal text-[#303030] ml-16 font-Inter bg-white rounded-lg" >
                                    {message.message}
                                </div>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div id="human" className="flex py-4 justify-end flex-row  w-full">
                                <div className="flex px-5 py-3  leading-normal text-[#303030] mr-16 font-Inter  bg-[#D9D9D9] rounded-lg" >
                                    {message.message}
                                </div>
                                <div className = "absolute h-12 w-12 bg-gray-500 rounded-full"> </div>

                            </div>
                        )
                    }
                }
                )
            }
    
        
        </div>
        
        </div>
    )
}

export default ChatInterface


