
import "./chatPage.css"
import NewPrompt from "../../components/newPrompt/NewPrompt";
import { useState, useEffect } from "react";

function ChatPage(){
    const [img, setImg] = useState({
        isLoading: false,
        error: "",
        dbData: {},
        aiData: {}
    });

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
                                      <div className="message">test message</div> 
                   <div className="message user">testing 123</div>
                    <div className="message">test message</div> 
                   <div className="message user">testing 123</div>
                                      <div className="message">test message</div> 
                   <div className="message user">testing 123</div>
                    <div className="message">test message</div> 
                   <div className="message user">testing 123</div>
                                      <div className="message">test message</div> 
                   <div className="message user">testing 123</div>
                    <div className="message">test message</div> 
                   <div className="message user">testing 123</div>
                   
                   {img.isLoading && (
                     <div className="message user">Uploading image...</div>
                   )}
                   
                   {img.dbData?.url && (
                     <div className="message user">
                       <img src={img.dbData.url} alt="Uploaded" style={{maxWidth: "200px", maxHeight: "200px", borderRadius: "10px"}} />
                     </div>
                   )}
                   
                   <NewPrompt img={img} setImg={setImg}/>
                   
                </div>
            </div>
        </div>
    )
}

export default ChatPage