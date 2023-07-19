import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = () => {
   const chatMessages = [

   ];

   return (
      <div className="chat-log">
         {chatMessages.map((message) => (
         <ChatEntry
            key={message.id}
            sender={message.sender}
            body={message.body}
            timeStamp={message.timeStamp}
         />
         ))}
      </div>
   );
};

export default ChatLog;
