import Upload from "../../upload/Upload";
import "./newPrompt.css"
import { useEffect,useRef, useState } from "react";
import model from "../../layouts/lib/gemini";
function NewPrompt({ img, setImg }) {
const  [question,setQuestion]= useState("")


    const endRef=useRef(null);
    
    useEffect(function (){
        endRef.current.scrollIntoView({"behavior":"smooth"});
    },[]);
    
    useEffect(function(){
        console.log("Image state changed:", img);
    }, [img]);

    async function add(){
     
      try {
        const prompt="write a story about an AI and magic"
        console.log('Sending prompt:', prompt);
        const result=await model.generateContent(prompt)
        console.log('Result received:', result);
        const response=await result.response
        console.log('Response:', response);
        const text = response.text()
        console.log('Generated text:', text)
      } catch (error) {
        console.error('Error in add function:', error);
      }
    }

  return (
    <>
    
      <div className="endChat"  ref={endRef}></div>
      
      <div className="newPrompt">
        <form action="" className="newForm">
          <Upload setImg={setImg}/>
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