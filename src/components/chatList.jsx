import { Link } from "react-router-dom"
import "./chatList.css"

function ChatList(){
    return(
        <div className="chatList">
            <span className="title">DASHBOARD</span>
            <Link to="/dashboard">Create A New Chat</Link>
            <Link to="/">Explore Casca AI</Link>
            <Link to="/">Contact</Link>
            <hr/>
            <div className="list">
                <Link to="/">Contact</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Contact</Link>
            </div>
            <hr/>
            <div className="upgrade">
                <img src="/logo.png" alt=""/>
                <div className="texts">
                    <span>Upgrade to Casca AI Pro</span>
                    <span>Get unlimited access to all features</span>
                </div>
            </div>
        </div>
    )
}