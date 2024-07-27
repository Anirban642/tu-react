import React from 'react'
  
function About(props) {
    // const [myStyle,setMystyle]=useState({
    //     color :'black',
    //     backgroundColor :'white',
    // })
    // const [btnText, setBtnText] = useState("Enable Dark Mode")

    let myStyle = {
      color : props.mode==='dark'?'white':'#042743',
      backgroundColor :props.mode==='dark'?'rgb(36,74,104)':'white',
      // border : '1px solid',
      // borderColor : 'dark'?'white':'#042743',
    }

    // const toggleStyle = () => {
    //     if (myStyle.color=== 'black') {
    //         setMystyle({
    //             color :'white',
    //             backgroundColor :'black',  
    //             border : '1px solid white',
    //         })
    //         setBtnText("Enable Light Mode");
    //     }
    //     else{
    //         setMystyle({
    //             color :'black',
    //             backgroundColor :'white',  
    //         })  
    //         setBtnText("Enable Dark Mode");
    //     }
    // }
  return (
    <>
    <div className='container' style={{color : props.mode==='dark'?'white':'#042743'}}>
    <h1 className='my-3'>About Us</h1>
    <p><b>TextUtils</b> is an utility in which you can manipulate your text as you want.Here you can count the words ,the characters. You can also convert tour text from uppercase to lowercase and vice versa.You can also hear the text you entered.</p>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        It is a <i>Simple Text Analyzer</i> , which manipulates your text, but in a tender way
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free To Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      It is completely <i>free to use</i>. No credit cards required. Use as much as you want !!
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      It is compatible with all of your <i>favourite</i> browsers.
      </div>
    </div>
  </div>
</div>
{/* <div className='container my-3'>
    <button type="button" onClick={toggleStyle} className="btn btn-primary ">{btnText}</button>
</div> */}
    </div>
    </>
  )
}

export default About
