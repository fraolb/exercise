import React, { useState } from 'react'

const Message = () => {
    const [message, setMessage]=useState(["a","b","c"])

  return (
    <div>
          {message.length>0 ? <h1>you have {message.length} unread mesage{message.length>1 ?"s":""}</h1> :<h1>you are all cought up!</h1>}
    </div>
  )
}

export default Message