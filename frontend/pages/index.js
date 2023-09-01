import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import ChatInterface from '../components/ChatInterface'

export default function Home() {
  return (
    <div className='flex bg-[#EDEDED] w-screen h-screen overflow-hidden'>
      <Sidebar />
      <Topbar />
      <ChatInterface />
    </div>
  )
}
