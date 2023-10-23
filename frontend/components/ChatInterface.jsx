import { useState, useEffect } from "react"
import axios from 'axios';


const ChatInterface = ({topics, setTopics, setTopicsPreview, showSidebar}) => {

    const [openaikey, setOpenaikey] = useState("")

    const [history, setHistory] = useState([        
    ]) 

    const [message, setMessage] = useState("")
    const [response, setResponse] = useState("")

    useEffect(() => {
        // change scroll position to bottom
        const chat = document.getElementById("chat");
        chat.scrollTop = chat.scrollHeight;
    }, [history])

    useEffect(() => {
        const key = localStorage.getItem("openaikey")
        setOpenaikey(key)
    }, [])


    const [typing, setTyping] = useState(false)

    const sendMessage = async (message) => {
        setTyping(true)
        const post = {"message": message, "key": openaikey}
        setHistory([...history, { "id": history.length, "sender": "human", "message": message }])
        try {
            const res = await axios.post('http://localhost:8000/guide/', post)
            console.log(res.data.message)
            if (res.data.message !== "CONVERSATION ENDED") {
            setResponse(res.data.message)
            setHistory([...history, { "id": history.length, "sender": "human", "message": message }, { "id": history.length, "sender": "bot", "message": res.data.message }])
            setTyping(false)
            localStorage.setItem("history", JSON.stringify([...history, { "id": history.length, "sender": "human", "message": message }, { "id": history.length, "sender": "bot", "message": res.data.message }]))
            console.log(res.data.topics)
            } else {
                setTopics(res.data.topics)
                setTyping(false)
                localStorage.setItem("topics", JSON.stringify(res.data.topics))
                setTopicsPreview(true)
            }

        } catch (err) {
            console.log(err)

        }
    }

        


    return (
        <div id = "chat" className={showSidebar ?"absolute mt-[3%] ml-[17%] h-[94%] overflow-scroll w-[83%]" : "absolute mt-[3.3%] ml-[4%] h-[93.4%] overflow-scroll w-[96%]"}>
            <div className="fixed w-[100%]  h-24 bottom-0">
            <div className={ showSidebar? "flex flex-row w-[83%]  justify-center items-center h-full px-[16%]" : "flex flex-row  justify-center items-center h-full px-[16%] "}>
                <div className="flex rounded-lg border-2 shadow-md border-[#919191] font-Inter border-opacity-50 w-[90%] h-12 px-4 justify-between bg-white items-center">
                    <textarea
                        placeholder={!typing ? "Send a message": "Please wait for a response..."}
                        onInput={(e) => {
                            // on enter, send message
                            if (e.nativeEvent.inputType == "insertLineBreak" && message != "" && !typing) {
                                sendMessage(message)
                                setMessage("")
                            } else {
                                setMessage(e.target.value)
                            }
                        }}
                        value={message}

                        className="flex w-full h-11 justify-center items-center py-2 px-2  text-light  text-[#303030] rounded-md resize-none  outline-none" />
                    <span className=" text-[#303030] ">
                    <svg 
                                width={38}
                                height={42}
                                viewBox="0 0 26 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect x="0.484192" width="24.1792" height="22.0841" rx={5} fill="white" />
                                <path
                                    d="M6.63748 9.225C6.63748 8.31491 6.63748 7.85987 6.85152 7.51227C7.0398 7.2065 7.34023 6.95791 7.70974 6.80211C8.12983 6.625 8.67975 6.625 9.77959 6.625H15.2783C16.3781 6.625 16.928 6.625 17.3481 6.80211C17.7176 6.95791 18.0181 7.2065 18.2063 7.51227C18.4204 7.85987 18.4204 8.31491 18.4204 9.225V12.15C18.4204 13.0601 18.4204 13.5151 18.2063 13.8627C18.0181 14.1685 17.7176 14.4171 17.3481 14.5729C16.928 14.75 16.3781 14.75 15.2783 14.75H11.0127C10.6042 14.75 10.3999 14.75 10.2046 14.7832C10.0312 14.8126 9.86351 14.8613 9.70593 14.9279C9.52833 15.003 9.36883 15.1086 9.04984 15.3197L7.48831 16.3534C7.21594 16.5337 7.07975 16.6239 6.96514 16.624C6.86546 16.6241 6.77117 16.5866 6.70898 16.5221C6.63748 16.448 6.63748 16.3037 6.63748 16.0151V9.225Z"
                                    fill="#2890A7"
                                    stroke="#2890A7"
                                    strokeLinecap="round"
                                    full strokeLinejoin="round"
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


