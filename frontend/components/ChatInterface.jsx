import { useState, useEffect } from "react"
import axios from 'axios';


const ChatInterface = () => {

    const [history, setHistory] = useState([        
    ]) 

    const [message, setMessage] = useState("")
    const [response, setResponse] = useState("")

    useEffect(() => {
        // change scroll position to bottom
        const chat = document.getElementById("chat");
        chat.scrollTop = chat.scrollHeight;
    }, [history])

    const sendMessage = async (message) => {
        const post = {"message": message}
        try {
            const res = await axios.post('http://localhost:8000/guide/', post)
            console.log(res.data.message)
            setResponse(res.data.message)
            setHistory([...history, { "id": history.length, "sender": "human", "message": message }, { "id": history.length, "sender": "bot", "message": res.data.message }])
            console.log(res.data.topics)

        } catch (err) {
            console.log(err)

        }
    }
        


    return (
        <div id = "chat" className="absolute mt-[3%] ml-[17%] h-[94%] overflow-scroll w-[83%]">
            <div className="fixed w-full  h-24 bottom-0">
            <div className="flex flex-row w-[83%] items-center h-full px-[16%] ">
                <div className="flex rounded-lg border-2 shadow-md border-[#919191] font-Inter border-opacity-50 w-[90%] h-12 px-4 justify-between bg-white items-center">
                    <textarea
                        placeholder="Send a message"
                        onInput={(e) => {
                            // on enter, send message
                            if (e.nativeEvent.inputType == "insertLineBreak" && message != "") {
                                sendMessage(message)
                                setMessage("")
                            } else {
                                setMessage(e.target.value)
                            }
                        }}
                        value={message}

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
                history.map((message) => {
                    if (message.sender == "bot") {
                        return (
                            <div id={message.id} className="flex py-2 flex-row justify-start  w-full">
                                <div className = "absolute h-12 w-12 bg-[#2890A7] rounded-full"> </div>
                                <div className="flex px-5 py-3  leading-normal text-[#303030] ml-16 font-Inter bg-white rounded-lg" >
                                    {message.message}
                                </div>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div id={message.id} className="flex py-2 justify-end flex-row  w-full">
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


