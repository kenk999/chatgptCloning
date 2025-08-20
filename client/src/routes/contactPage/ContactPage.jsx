import "./contactPage.css";

const ContactPage = () => {
  return (
    <div className="contactPage">
      <div className="contactContainer">
        <div className="header">
          <div className="avatar">
            <span>MH</span>
          </div>
          <h1>Get In Touch</h1>
          <p>Feel free to reach out for any project inquiries or collaborations</p>
        </div>

        <div className="contactInfo">
          <div className="infoCard">
            <div className="icon">👨‍💻</div>
            <h3>Developer</h3>
            <p>Mohammad Hifzaan</p>
          </div>

          <div className="infoCard">
            <div className="icon">📧</div>
            <h3>Email</h3>
            <p>mohammadhifzan24@gmail.com</p>
            <a 
              href="mailto:mohammadhifzan24@gmail.com"
              className="contactButton"
            >
              Send Email
            </a>
          </div>

          <div className="infoCard">
            <div className="icon">💼</div>
            <h3>Availability</h3>
            <p>Open to work & freelance</p>
            <div className="status">
              <div className="statusIndicator"></div>
              <span>Available for hire</span>
            </div>
          </div>

          <div className="infoCard">
            <div className="icon">⚡</div>
            <h3>Tech Stack</h3>
            <p>AI Clone built with modern technologies</p>
            <div className="techList">
              <span className="tech">React.js</span>
              <span className="tech">Node.js/Express</span>
              <span className="tech">MongoDB</span>
              <span className="tech">Gemini API</span>
              <span className="tech">Clerk Auth</span>
              <span className="tech">ImageKit.io</span>
            </div>
          </div>
        </div>

        <div className="footer">
          <p>Let's build something amazing together!</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
