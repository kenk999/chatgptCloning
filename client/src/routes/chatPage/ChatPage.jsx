
import "./chatPage.css"
import NewPrompt from "../../components/newPrompt/NewPrompt";
import { useState, useEffect } from "react";
import { IKImage } from "imagekitio-react";

function ChatPage(){
    // Mock data for now - in real app this would come from API
    const data = {
        _id: "mock-chat-id",
        history: []
    };

    return(
        <div className="chatPage">
            <div className="wrapper">
        <div className="chat">
          <div className="message">test message</div> 
          <div className="message user">testing 123</div>
          <div className="message">test message</div> 
          <div className="message user">testing 123</div>
          <div className="message">test message</div> 
          <div className="message user">testing 123</div>
          <div className="message">test message</div> 
          <div className="message user">testing 123</div>
          
          <NewPrompt data={data}/>
          
                </div>
            </div>
        </div>
    )
}

export default ChatPage