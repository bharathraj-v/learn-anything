import React from "react";

const Topbar = () => {
    return (
        <div className="absolute justify-between items-center w-full h-16 bg-[#f5f5f5] border-b-2 border-opacity-60 border-[#C1C0C0] ">
            <div className="flex w-full h-16 justify-between">
            <div className="flex items-center ml-8">
                <h1 className="text-3xl font-Rubik text-center"></h1>
            </div>
            <div className="flex items-center space-x-6 mr-8">
            <p className="text-gray-500 font-Inter font-medium hover:cursor-pointer hover:underline">Bharath Raj</p>
                <button className="bg-gray-500 text-white rounded-full px-4 py-2 h-10 w-10 font-Rubik text-lg"></button>
            </div>
            </div>

        </div>
    )
}

export default Topbar;