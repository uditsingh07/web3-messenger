import Image from "next/image";
import { useMoralis } from "react-moralis";
import background from "./1pX9.gif"
import myAvatar from "./myAvatar.jpg"


export default function Login() {
  const {authenticate} = useMoralis();
  return (
    <div className="bg-black relative">
       <h1>I am app</h1> 
       <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
           <Image
           className="object-cover rounded-full"
           src={myAvatar}
           height={200} width={200}
           />
           <button 
           onClick={authenticate}
           className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse">Login to the Metaverse</button>
       </div>
       <div className="w-full h-screen">
           <Image
           src={background}
           layout="fill"
           objectFit="cover"
           />
       </div>
    </div>
  )
}
