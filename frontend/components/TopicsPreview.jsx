import { useState } from "react"

const TopicsPreview = ({setTopics, topics, setTopicsPreview, setShowSidebar}) => {
  
    return (
        <div className="flex w-screen h-screen bg-opacity-50 justify-center py-16  overflow-clip bg-black ">
                        <div className="flex resize-none flex-col rounded-xl border-1 border-[#8d8d8d] h-full w-max bg-white   self-center">
            <h1 className="flex resize-none justify-left px-14 text-[#414141] text-xl font-Inter text-center mt-8 ">
                I've curated these topics for you!
            </h1>
            <div className="flex flex-col justify-left  h-[100%] mt-4">
            <div className="flex flex-col  h-[78%] overflow-scroll">
            {Object.keys(topics).map((key) => {
                return (
                    <div className="flex flex-col justify-center w-full px-16 mt-2">
                    <p className="font-Inter font-bold text-[#6D6D6D]">
                         {key}
                    </p>
                    {topics[key].map((topic) => {
                        return (
                            <p className="font-Inter text-md text-[#434343] px-16 mt-2">
                            {topic}
                            </p>
                        )
                    })}
                    </div>
                )
            })}
            </div>
            <div>
            <div className="flex flex-row justify-between space-x-4 w-full px-12 py-6 mb-10">
                <button 
                onClick={() => {
                    setTopicsPreview(false);
                    setShowSidebar(true);
                }
                }
                className="flex flex-row justify-center items-center bg-[#2890A7] hover:bg-[#256977] rounded-lg w-[50%] h-10 text-white font-Inter font-bold text-lg">
                    Accept
                </button>
                <button 
                onClick={() => {
                    setTopics([])
                    // clear topics from local storage
                    localStorage.removeItem('topics')
                    setTopicsPreview(false)}}
                className="flex flex-row justify-center items-center bg-[#8d8d8d] hover:bg-[#2e2e2e] rounded-lg w-[50%] h-10 text-white font-Inter font-bold text-lg">
                    Redo
                </button>
            </div>
            </div>
            </div>
            </div>

        </div>
    )
}

export default TopicsPreview