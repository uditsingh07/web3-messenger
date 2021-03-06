import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from 'react-moralis';
import styles from '../styles/Home.module.css'
import HeaderSection from '../components/HeaderSection';
import Messages from '../components/Messages';

export default function Home() {
  const {isAuthenticated, logout} = useMoralis();

  if(!isAuthenticated) return <Login />
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden">
      <Head>
        <title>Web3-Messenger</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      
        <div className="max-w-screen-2xl mx-auto pl-36 pr-36">
        
          <HeaderSection/>
          <Messages />
        
          </div> 
    </div>
  )
}
