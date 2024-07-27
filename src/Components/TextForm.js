import React,{useState} from 'react'

function TextForm(props) {

  const handleUpclick = () => {
    // console.log("Uppercase was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  }
  const handleLoClick = () => {
    // console.log("Uppercase was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  }
  const handleClearClick = () => {
    // console.log("Uppercase was clicked"+text);
    let newText='';
    setText(newText);
    props.showAlert("Text Cleared","success");
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking your Text","success")
  }
  // const handleCopy = () => {
  //   var text = document.getElementById("mybox");
  //   text?.select();
  //   navigator.clipboard.writeText(text);
  // }
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  }
  const [text,setText] = useState();

  return (
    <>
      <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"><h1 className='mb-4'>{props.heading}</h1></label>
          <textarea className="form-control mx-2" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#13466e',color:props.mode==='light'?'black':'white'}} rows="8"></textarea>
        </div>
        <button disabled={text?.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpclick} >Convert to Uppercase</button>
        <button disabled={text?.length===0} type="button" className="btn btn-success mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text?.length===0} type="button" className="btn btn-info mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text?.length===0} type="button" className="btn btn-danger mx-1 my-1" onClick={speak}>Speak</button>
        {/* <button type="button" className="btn btn-secondary mx-2" onClick={handleCopy}>Copy Text</button> */}
      </div>
      <div className='container my-3' style={{color:props.mode==='light'?'black':'white'}}>
       <h1>Your Summary</h1>
        <p>{text?.split(" ").filter((element)=>{return element.length!==0}).length} Words and { text?.length} Characters</p>
        <p>{0.008 * text?.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p> 
        <h2>Preview</h2>
        <p>{text?.length>0?text:"Nothing to Preview"}</p>
      </div>
      </>  
  )
}

export default TextForm
