import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex sm:flex-col md:flex-row w-auto relative py-2 items-center no-scrollbar scrollbar-hide '>
        <img className="h-8 " alt="user" src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"/>
        <span className='pr-1 sm:text-sm md:text-lg'>{name} : </span>
        <span className='px-1 sm:text-sm md:text-lg  line-clamp-1 '>{message}</span>
    </div>
  )
}

export default ChatMessage