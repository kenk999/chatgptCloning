
import "./chatPage.css"
import NewPrompt from "../../components/newPrompt/NewPrompt";
function ChatPage(){
    

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
                   <NewPrompt/>
                   
                </div>
            </div>
        </div>
    )
}

export default ChatPage