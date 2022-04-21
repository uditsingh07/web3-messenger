import React from 'react'
import { useMoralis, useMoralisQuery } from 'react-moralis'
import { useRef } from 'react';
import SendMessage from './SendMessage';
import Message from './Message';

const MINS_DURATION = 15; //Show messages only for last 15 minutes

function Messages() {
    const {user} = useMoralis();
    const endOfMessagesRef = useRef(null);
    const {data, loading, error} = useMoralisQuery(
       'Messages',
        (query) => query.ascending('createdAt').greaterThan(
            "createdAt", new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
        [],
        {
            live: true,
        }
    );
        
  return (
    <div className="pb-56">
        <div className="space-y-10 p-4">
            {data.map(message => (
                <Message key = {message.id} message={message} />
            ))} 
        </div>
        <div className="flex justify-center">
            <SendMessage endOfMessagesRef={endOfMessagesRef}/>
        </div>
        <div ref={endOfMessagesRef} className="text-center text-gray-400 mt-5">
            <p className="text-sm absolute bottom-5 right-10">You are up to date {user.getUsername()}! </p>
        </div>
    </div>
  )
}

export default Messages