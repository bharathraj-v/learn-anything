import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import ChatInterface from '../components/ChatInterface'
import OnboardingModal from '../components/OnboardingModal'

import { useState, useEffect } from 'react'
import TopicsPreview from '../components/TopicsPreview'

export default function Home() {
  const [showOnboarding, setShowOnboarding] = useState(0)
  const [topicsPreview, setTopicsPreview] = useState(0)

  const [topics, setTopics] = useState([])

  const [keyPresentInLocalStorage, setKeyPresentInLocalStorage] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const key = localStorage.getItem('openaikey')
      if (key) {
        setKeyPresentInLocalStorage(1)
      } else {
        setShowOnboarding(1)
      }
    }
  }
  , [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const topics = localStorage.getItem('topics')
      if (topics) {
        setTopics(JSON.parse(topics))
      } 
    }
  }
  , [topicsPreview])

  const [showSidebar, setShowSidebar] = useState(0)

  return (
    <div className='flex bg-[#EDEDED] w-screen h-screen overflow-hidden'>
            <Topbar />

   
      <div className='flex'>
x
      <Sidebar topics={topics} setTopics={setTopics} showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <ChatInterface topics={topics} showSidebar={showSidebar} setShowSidebar={setShowSidebar} setTopics={setTopics}  setTopicsPreview={setTopicsPreview}/>
      </div>{ showOnboarding &&
       <div className='absolute z-100 h-screen w-screen'>
       <OnboardingModal keyPresentInLocalStorage={keyPresentInLocalStorage} setKeyPresentInLocalStorage={setKeyPresentInLocalStorage} showOnboarding={showOnboarding} setShowOnboarding={setShowOnboarding}/>
       </div>
      }
      { topicsPreview &&
       <div className='absolute z-100 h-screen w-screen'>
       <TopicsPreview topics={topics} setTopics={setTopics} setTopicsPreview={setTopicsPreview} setShowSidebar={setShowSidebar} />
       </div>
      }
      
     
 
    </div>
  )
}
