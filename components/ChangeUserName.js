import React from 'react'
import { useMoralis } from 'react-moralis'

function changeUserName() {

    const {setUserData, isUserUpdating, userError, user, logout} = useMoralis();

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
        <div className="text-sm absolute top-10 right-5">
            <button className="hover:text-pink-700" onClick={logout}>Logout</button>
        </div>
    </div>
  )
}

export default changeUserName