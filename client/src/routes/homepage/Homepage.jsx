import { Link } from "react-router-dom";
import "./homepage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

function Homepage() {
  const [typingStatus, setTypingStatus] = useState("User1");

  return (
    <div className="homepage">
      <img src="/orbital.png" alt="Orbital graphic" className="orbital" />
      <div className="left">
        <h1>CASCA AI</h1>
        <h2>Go berserk with your productivity!</h2>
        <h3>
          Your command center for creativity, ready to charge through deadlines
          and overcome any obstacle.
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" className="bot" alt="" />
          <div className="chat">
            <img
              src={
                typingStatus === "User1"
                  ? "/human1.jpeg"
                  : typingStatus === "User2"
                  ? "/human2.jpeg"
                  : "/bot.png"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                "Yash: Name three popular react hooks",
                2000,
                () => {
                  setTypingStatus("Casca");
                },
                "Casca: useEffect , useState and useReduce! want further details?",
                1000,
                () => {
                  setTypingStatus("User2");
                },
                "Reshma: How do i look at errors in browser console?",
                2000,
                () => {
                  setTypingStatus("Casca");
                },
                "Casca: Hit right click and select inspect!",
                2000,
                () => {
                  setTypingStatus("User1");
                },
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "16px", display: "inline-block" }}
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
<Link to="/">Terms of Service</Link>
<span>|</span>
<Link to="/">Privacy Policy</Link>
        </div>
      </div>
      
      
    </div>
  );
}

export default Homepage;