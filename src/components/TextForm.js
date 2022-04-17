import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{//this is an arrow function
        // console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();    
        setText(newText);
        props.showAlert("converted to uppercase","success");
    }
    const handleLoClick=()=>{//this is an arrow function
        let newText=text.toLowerCase();    
        setText(newText);
        props.showAlert("converted to lowercase","success");
    }
    const handleclearClick=()=>{//this is an arrow function
        let newText='';    
        setText(newText);
        props.showAlert("Text is cleared","success");
    }
    
    const handleCopy=()=>{
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("copied to clipboard!","success");
      
   }
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed","success");


    }
    const handleOnchange=(event)=>{//this is an arrow function
        // console.log("on change");
        setText(event.target.value);
    }
    const [text,setText]=useState('Enter text here');
    // text="new text";-->wrong way to change the state
    // setText("new text")-->Correct way to change the state
  return (
      <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
  <h1>{props.heading}</h1>   
<div className="mb-3">
  
  <textarea className="form-control" style={{color:props.mode==='dark'?'white':'black'  ,backgroundColor:props.mode==='dark'?'grey':'white'}} value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleclearClick}>Clear Text</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

{/* jaise hee main uss button pe click karoon ek function run ho aur mein uss function kaa naam rakhnaa chahtaa hoon handleUpClick */}
 </div>  
   <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
       <h1>Your text summary</h1>
       {/* The filter() method creates a new array filled with elements that pass a test provided by a function. */}
       {/* here we have used an arrow function which will parse elements only when they have length!=0 */}
       <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
       <p>{0.008*text.split(" ").length}Minutes Read </p>
       <h2>Preview</h2>
       <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
   </div>
   
   
   
    
 </> )
}
