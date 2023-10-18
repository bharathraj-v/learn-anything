const OnboardingModal = ({showOnboarding, setShowOnboarding}) => {
    return (
        <div className="flex w-screen h-screen bg-opacity-50 overflow-clip bg-black ">
            <div className="flex resize-none flex-col  rounded-xl border-1 border-[#8d8d8d] mx-[33%] bg-white   justify-top self-center">
            <h1 className="flex resize-none justify-left px-14 text-3xl font-Rubik text-center mt-8 ">
                    <span className="text-[#2890A7]">Learn</span><span className="text-[#6F6F6F]">anything Onboarding</span>
            </h1>
            <div className="font-Inter font-bold text-[#6D6D6D] px-16 mt-6">
                Cookie Consent
            </div>
            <p className="font-Inter  text-md text-[#434343] px-16 mt-4">
            Welcome to Learnanything! We use cookies to enable your learning experience by saving your chat messages, learning progress, user details, and securely storing your OpenAI API Key. We do not store any of your data anywhere other than your browser cookies.
            </p>
            <div className="font-Inter font-bold text-[#6D6D6D] px-16 mt-6">
            OpenAI Usage
            </div>
            <p className="font-Inter  text-md text-[#434343] px-16 mt-4">
            Please be aware that our platform utilizes OpenAI credits through your API Key. We primarily use the GPT-3.5-turbo and GPT-3.5-turbo-instruct models for an enhanced learning experience. On average, clearing a topic may incur a charge of up to $0.02. For a complete subject, this could amount to a charge of up to $0.10 per 6-10 topics.
            </p>
            <p className="font-Inter  text-md text-[#434343] px-16 mt-4">
            You have options: "Accept" for an uninterrupted, efficient, and personalized learning experience, or "Decline" to close the platform.
            </p>
            <div className="flex flex-row justify-between w-full px-16 mt-4">
                <div className="flex flex-row">
                    <input type="checkbox" id="cookieterms" name="cookieterms" value="cookies" className="h-5 w-5 mt-1"/>
                    <label for="cookieterms" className="font-Inter font-bold text-[#6D6D6D] px-2 mt-1">I accept the cookie usage terms and allow to save cookies</label>
                </div>
            </div>
            <div className="flex flex-row justify-between w-full px-16 mt-2">
                <div className="flex flex-row">
                    <input type="checkbox" id="openaiterms" name="openaiterms" value="openai" className="h-5 w-5 mt-1"/>
                    <label for="openaiterms" className="font-Inter font-bold text-[#6D6D6D] px-2 mt-1">I consent to the usage of OpenAI API through this platform
                    </label>
                </div>
            </div>
            <div className="flex flex-col justify-between w-full px-16 mt-6">
                <p className="font-Inter font-bold text-[#6D6D6D]">
                     OpenAI API Key
                </p>
                <input type="text" id="openaikey" name="openaikey" placeholder="xx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" className="h-10 p-4 w-full mt-2 font-Inter border-2 border-[#8d8d8d] rounded-lg"/>
            </div>
            <div className="flex flex-row justify-between space-x-4 w-full px-14 mt-6 mb-10">
                <button 
                onClick={() => setShowOnboarding(false)}
                className="flex flex-row justify-center items-center bg-[#2890A7] hover:bg-[#256977] rounded-lg w-[50%] h-10 text-white font-Inter font-bold text-lg">
                    Accept
                </button>
                <button 
                onClick={() => setShowOnboarding(false)}
                className="flex flex-row justify-center items-center bg-[#8d8d8d] hover:bg-[#2e2e2e] rounded-lg w-[50%] h-10 text-white font-Inter font-bold text-lg">
                    Decline
                </button>
            </div>



            </div>

        </div>
    )

}

export default OnboardingModal