import "./newPrompt.css"
import { useEffect,useRef } from "react";

function NewPrompt() {
    const endRef=useRef(null);
    useEffect(function (){
endRef.current.scrollIntoView({"behavior":"smooth"});
},[])
  return (
    <>
      <div className="endChat"  ref={endRef}></div>
      <div className="newPrompt">
        <form action="" className="newForm">
          <label htmlFor="file">
            <img src="/attachment.png" alt="Attach file" />
          </label>
          <input id="file" type="file" multiple={false} hidden />
          <input type="text" placeholder="Ask anything..." />
          <button>
            <img src="/arrow.png" alt="Send" />
          </button>
        </form>
      </div>
     
    </>
  );
}

export default NewPrompt