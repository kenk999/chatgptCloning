import { Link, useLocation } from "react-router-dom";
import "./chatList.css";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";

const ChatList = () => {
  const { getToken } = useAuth();
  const location = useLocation();
  
  // Extract current chat ID from URL
  const currentChatId = location.pathname.split('/').pop();

  const { isPending, error, data } = useQuery({
    queryKey: ["userChats"],
    queryFn: async () => {
      try {
        const token = await getToken();
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        console.log('User chats loaded:', result);
        return result;
      } catch (err) {
        console.error('Error loading chats:', err);
        throw err;
      }
    },
  });



  return (
    <div className="chatList">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard?showHint=true">Create a new Chat</Link>
      <Link to="/">Explore Casca AI</Link>
      <Link to="/contact">Contact</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        {isPending
          ? "Loading..."
          : error
          ? "Something went wrong!"
          : data?.map((chat) => (
              <Link 
                to={`/dashboard/chats/${chat._id}`} 
                key={chat._id}
                className={currentChatId === chat._id ? 'active' : ''}
              >
                {chat.title}
              </Link>
            ))}
      </div>
      <hr />
      <Link to="/coming-soon" className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
          <span>Upgrade to Casca AI Pro</span>
          <span>Get unlimited access to all features</span>
        </div>
      </Link>
    </div>
  );
};

export default ChatList;