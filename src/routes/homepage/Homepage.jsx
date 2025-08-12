import { Link } from "react-router-dom"
import "./homepage.css"
import { TypeAnimation } from "react-type-animation";

function Homepage() {

const {typingStatus,setTypingStatus}

  return (
    <div className="homepage">
      <img src="/orbital.png" alt="Orbital graphic" className="orbital" />
      <div className="left">
        <h1>CASCA AI</h1>
        <h2>Go berserk with your productivity!</h2>
        <h3>
          Your command center for creativity, ready to charge through deadlines and overcome any obstacle.
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
<div className="imgContainer">
    <div className="bgContainer">
        <div className="bg">
          
        </div>
    </div>
     <img src="/bot.png" className="bot" alt="" /> 
     <div className="chat">
           <img src="/bot.png" alt="" />
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'User: Name three popular react hooks',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Casca: useEffect , useState and useReduce!',
        1000,
        'User: How do i look at errors in browser console?',
        1000,
        'Casca: Hit right click and select inspect!',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
      cursor={true}
      omitDeletionAnimation={true}
    />
     
     </div>
</div>
      </div>
    </div>
  );
}

export default Homepage