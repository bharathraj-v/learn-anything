import React, { useEffect } from "react";
import { useState } from "react";

const Sidebar = ({ topics, setTopics, showSidebar, setShowSidebar }) => {

    const [sidebarTopics, setSidebarTopics] = useState([])
    useEffect(() => {
        // change the topics format from {"topic": ["subtopic1", "subtopic2"]} to [{"name": "topic", "subtopics": ["subtopic1", "subtopic2"], "clicked": false}]
        const newTopics = []
        Object.keys(topics).map((key) => {
            newTopics.push({ "name": key, "subtopics": topics[key], "clicked": false })
        })
        setSidebarTopics(newTopics)
    }
        , [topics])

    const [expandedTopic, setExpandedTopic] = useState(null)

    if (showSidebar) {
        return (

            <div className="absolute flex-col w-[17%] justify-between overflow-scroll bg-[#f5f5f5] h-screen border-r-2 border-opacity-60 border-[#C1C0C0] ">
                <div className="flex flex-col  h-full w-full">
                    <h1 className="flex justify-center text-3xl font-Rubik text-center mt-8 mr-1">
                        <span className="text-[#2890A7]">Learn</span><span className="text-[#6F6F6F]">anything</span>
                    </h1>

                    {/* <div className="flex justify-center mt-6 w-full h-14" >
                    <button className="flex justify-between h-full mr-1 w-[80%] hover:bg-[#1c6c7e] rounded-md items-center text-white font-Inter text-base font-semibold bg-[#2890A7] px-6">
                        Start a new topic
                        <svg
                            width={32}
                            height={32}
                            viewBox="0 0 26 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                x="0.903687"
                                y="0.625244"
                                width="24.1792"
                                height="22.0841"
                                rx={5}
                                fill="white"
                            />
                            <path
                                d="M9 11L17 11"
                                stroke="#2890A7"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M13 7L13 15"
                                stroke="#2890A7"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                    </button>
                </div> */}
                    <div className="flex justify-center mt-6 w-full h-12" >
                        <button className="flex justify-between h-12 mr-1 w-[76%] hover:bg-[#1c6c7e] rounded-md items-center text-white font-Inter text-lg font-semibold bg-[#1897B3] px-6">
                            Topic Guide
                            <svg
                                width={32}
                                height={32}
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

                        </button>
                    </div>

                    {/* <h2 className="flex h-8 justify-start text-lg px-9 font-semibold font-Inter text-center mt-6 mr-1">
                    <span className="h-8 text-[#6F6F6F]"> Your Topics</span>
                </h2> */}

                    <div className="flex h-12 text-md justify-center items-center  px-7 font-semibold font-Inter text-center mt-6 mr-1">
                        <textarea
                            placeholder="Search topic"
                            className="flex w-full h-11 justify-center items-center py-2 px-4 border-1 text-light border-[#19191] text-[#6F6F6F] rounded-md resize-none bg-white outline-none" />
                        <span className="absolute text-[#6F6F6F] ml-48">
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
                    <div className="flex flex-col  mt-3 px-7 space-y-2">
                        {
                            // map through the topics array and display the topics
                            sidebarTopics.map((topic) => (
                                <div key={topic.id}>
                                    <button key={topic.id}
                                        onClick={//
                                            () => {
                                                topic.clicked = !topic.clicked;
                                                // reorder the array to have the clicked topic at the top
                                                const index = sidebarTopics.indexOf(topic);
                                                sidebarTopics.splice(index, 1);
                                                sidebarTopics.unshift(topic);
                                                setSidebarTopics([...sidebarTopics]);
                                            }
                                        }
                                        className={`flex h-11 justify-between  mr-1 w-full  rounded-md items-center  font-Inter text-md font-semibold ${topic.clicked ? 'bg-[#1897B3] text-white' : 'bg-[#E6E6E6] text-[#6C6C6C]'} px-6`}>
                                        { // first 50 characters of the topic name followed by ... 
                                            topic.name.length > 25 ? topic.name.substring(0, 25) + '...' : topic.name
                                        }
                                        <svg
                                            className="rotate-180"
                                            width={11.2}
                                            height={8}
                                            viewBox="0 0 7 5"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6.87506 4.06166L3.88895 0.198431C3.84082 0.136194 3.78111 0.0862365 3.71393 0.0519853C3.64674 0.0177341 3.57367 0 3.49972 0C3.42577 0 3.3527 0.0177341 3.28551 0.0519853C3.21833 0.0862365 3.15862 0.136194 3.11049 0.198431L0.124375 4.06166C-0.160607 4.43041 0.0756675 5 0.513608 5L6.48668 5C6.92462 5 7.1609 4.43041 6.87506 4.06166Z"
                                                fill={`${topic.clicked ? '#FFFFFF' : '#12748A'}`}
                                            />
                                            <path
                                                d="M6.87506 4.06166L3.88895 0.198431C3.84082 0.136194 3.78111 0.0862365 3.71393 0.0519853C3.64674 0.0177341 3.57367 0 3.49972 0C3.42577 0 3.3527 0.0177341 3.28551 0.0519853C3.21833 0.0862365 3.15862 0.136194 3.11049 0.198431L0.124375 4.06166C-0.160607 4.43041 0.0756675 5 0.513608 5L6.48668 5C6.92462 5 7.1609 4.43041 6.87506 4.06166Z"
                                                fill={`${topic.clicked ? '#FFFFFF' : '#6C6C6C'}`}
                                            />
                                        </svg>
                                    </button>
                                    {
                                        topic.clicked && topic.subtopics.map((subtopic) => (
                                            <div className="flex flex-row w-full">
                                                <svg className="w-[20%] p-3" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.5">
                                                        <path d="M1.875 4.225C1.875 3.31491 1.875 2.85987 2.07936 2.51227C2.25913 2.2065 2.54596 1.95791 2.89877 1.80211C3.29985 1.625 3.8249 1.625 4.875 1.625H10.125C11.1751 1.625 11.7001 1.625 12.1012 1.80211C12.454 1.95791 12.7409 2.2065 12.9206 2.51227C13.125 2.85987 13.125 3.31491 13.125 4.225V7.15C13.125 8.06009 13.125 8.51513 12.9206 8.86273C12.7409 9.1685 12.454 9.41709 12.1012 9.57289C11.7001 9.75 11.1751 9.75 10.125 9.75H6.05234C5.66231 9.75 5.46729 9.75 5.28076 9.78318C5.11527 9.81261 4.95512 9.8613 4.80468 9.92791C4.63511 10.003 4.48282 10.1086 4.17826 10.3197L2.68735 11.3534C2.42729 11.5337 2.29727 11.6239 2.18784 11.624C2.09267 11.6241 2.00264 11.5866 1.94327 11.5221C1.875 11.448 1.875 11.3037 1.875 11.0151V4.225Z" fill="#C4C4C4" stroke="#C4C4C4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </g>
                                                </svg>
                                                <button key={subtopic.id} className="flex  h-11 justify-between  mt-2 mr-1 w-[80%]  rounded-md items-center text-[#6C6C6C] font-Inter text-md font-semibold bg-[#E6E6E6] px-6">
                                                    <p className="truncate">{subtopic}</p>

                                                </button>

                                            </div>

                                        ))

                                    }

                                </div>




                            ))

                        }
                        {
                        // a button to expand the sidebar
                        <div className="flex">
                            <button className="fixed bottom-0 rotate-180 ml-[12%] mt-4 mb-2 w-max h-12 " onClick={() => setShowSidebar(!showSidebar)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={32}
                                    height={32}
                                    viewBox="0 0 24 24"
                                    fill="#f5f5f5"
                                    stroke="gray"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                                    <path d="M9 3v18" />
                                    <path d="m14 9 3 3-3 3" />
                                </svg>

                            </button>
                        </div>

                    }
                    </div>




                </div>
            </div>
        )
    } else {
        return (
            // a smaller version of the sidebar that shows La instead of Learnanything and square buttons for topics
            <div className="absolute flex-col w-[4%] justify-between overflow-scroll bg-[#f5f5f5]  h-screen border-r-2 border-opacity-60 border-[#C1C0C0] ">
                <div className="flex flex-col px-4  h-full w-full">
                    <h1 className="flex justify-left text-3xl text-[#2890A7] font-Rubik text-center mt-8 mr-1">
                        L<span className="text-[#6F6F6F]">a</span>
                    </h1>

                    <div className="h-full flex bg-[#e7e7e7] rounded-md my-4 w-full">
                    </div>

                    {
                        // a button to expand the sidebar
                        <div className="flex bg-b justify-center w-full bottom-0">
                            <button className=" flex bottom-0 justify-center w-full h-12 " onClick={() => setShowSidebar(!showSidebar)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={32}
                                    height={32}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#2890A7"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                                    <path d="M9 3v18" />
                                    <path d="m14 9 3 3-3 3" />
                                </svg>

                            </button>
                        </div>

                    }

                </div>


            </div>
        )
    }
}

export default Sidebar;