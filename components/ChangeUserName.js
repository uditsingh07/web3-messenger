import React from 'react'
import { useMoralis } from 'react-moralis'

function changeUserName() {

    const {setUserData, isUserUpdating, userError, user} = useMoralis();

    const setUsername = () => {
        const username = prompt(`Enter your new username (current: ${user.getUsername()})`);

        if(!username) return;

         setUserData({
             username: username,
         })
    };
  return (
    <div>
        <div className="text-sm absolute top-5 right-5">
            <button disabled={isUserUpdating}
            onClick={setUsername}
            className="hover:text-pink-700">Change UserName</button>
        </div>
    </div>
  )
}

export default changeUserName