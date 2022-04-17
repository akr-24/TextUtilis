import React,{useState} from 'react'
export default function About(props) {

  // let myStyle={//it is an object
  // const [myStyle,setMyStyle]=useState({ //useState comprises of default set-up of setMyStyle
  //   color:'black',
  //   backgroundColor:'white'
    // while in css we write it as background-color but here we will use camelCase
  // })
  const myStyle={
       color:props.mode==='dark'?'white':'#042743',
       backgroundColor:props.mode==='dark'?'#042743':'white'
  }
  const[btntext,setBtntext]=useState("Enable Dark Mode")

  // const toggleStyle=()=>{
  //   if(myStyle.color==='black'){
  //     setMyStyle({
         
  //       color:'white',
  //       backgroundColor:'black',
  //        border:'1px solid white'

  //     })

  //     setBtntext("Enable Light Mode")
  //   }
  //   else{
  //     setMyStyle({
         
  //       color:'black',
  //       backgroundColor:'white',
       

  //     })
  //     setBtntext("Enable Dark Mode")
  //   }


  // }




  return (
    <div className="container" style={myStyle}> 
    {/* using style attribute with the object named myStyle we have added CSS to this */}
       <h1 className="my-4">About us</h1>
       <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze Your text</strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
             Textutilis gives you a way to analyze your text quickly and efficiently.Be it word count, character count or 
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Free to use</strong>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                TextUtilis is a free character counter tool that provides instant character count & word count statistics for a given text.
                TextUtilis reports the number of words and characters.Thus it is suitable for writing text with word/ character limit.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Browser Compatible</strong> 
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It 
                suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
              </div>
            </div>
          </div>
        </div>
        <div className="container my-3">
        {/* <button onClick={toggleStyle} type="button" className="btn btn-warning">{btntext}</button> */}
        </div>
    </div>
  )
}

