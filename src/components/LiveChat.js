import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generate,generateComments } from '../utils/constants';

const LiveChat = () => {
 const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();
    const chatMessage = useSelector(store=> store.chat.messages)
useEffect(()=>{
  const i =  setInterval(() => {
      
    dispatch(addMessage({
        name : generate(),
        message : generateComments(20),
    }))

           
    }, 2000);

    return ()=> clearInterval(i);
},[])

  return (
    <div className='no-scrollbar w-full justify-center items-center relative  top-0 right-0 bg-black text-white'>
    <h1 className='mt-4 text-xl mb-4 text-white'>Live Comments : </h1>
    <div className='w-auto overflow-y-scroll no-scrollbar justify-center h-[500px] ml-2 p-2 border border-white bg-black rounded-lg flex flex-col-reverse'>
       
    {chatMessage.map((chats,index) => (
      <ChatMessage key={index} name={chats.name} message={chats.message} />
    ))
       
       }
    </div>
    <form className=' p-2 ml-2 border mb-4 border-white bg-black rounded-lg flex items-center justify-between'
    onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({
            name : "User",
            message : liveMessage,
        }))
        setLiveMessage("");
    }}
    >
        <input className='w-96 p-2 text-lg border-none focus:border-none bg-black placeholder:text-white' placeholder='type comment' type="text" value={liveMessage} onChange={(e)=>( setLiveMessage(e.target.value))} />
        <button className='px-2 mx-2 bg-green-100 rounded-xl items-center self-center'><img className='h-8 self-center rounded-xl' src="https://cdn-icons-png.flaticon.com/512/3106/3106794.png" alt="send" /></button>
    </form>
    </div>
  )
}

export default LiveChat