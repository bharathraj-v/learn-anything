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
  const [showOnboarding, setShowOnboarding] = useState(1)
  const [topicsPreview, setTopicsPreview] = useState(0)

  return (
    <div className='flex bg-[#EDEDED] w-screen h-screen overflow-hidden'>
   
      <div className='flex'>
      <Sidebar />
      <Topbar />
      <ChatInterface />
      </div>{ showOnboarding &&
       <div className='absolute z-100 h-screen w-screen'>
       <OnboardingModal showOnboarding={showOnboarding} setShowOnboarding={setShowOnboarding}/>
       </div>
      }
      { topicsPreview &&
       <div className='absolute z-100 h-screen w-screen'>
       <TopicsPreview />
       </div>
      }
      
     
 
    </div>
  )
}
