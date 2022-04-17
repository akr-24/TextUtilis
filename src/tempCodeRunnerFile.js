import './App.css';
// import { useState } from 'react';

import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');//whether dark mode is enabled 
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
    setAlert(null)},3000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='grey';
    showAlert("Dark mode has been enabled","success");
    //documet.title-->sets the title to be displayed on web
    document.title='TextUtilis - Dark Mode';

  }

   else{
   setMode('light');
   document.body.style.backgroundColor='white';
   showAlert("Light mode has been enabled","success");
   document.title='TextUtilis - Light Mode';
   }

}
  return (
    <>

{/* <Navbar title="TextUtilis" aboutText="About"/> */}
<Router>
<Navbar title="TextUtilis" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">
<Switch>
          <Route exact path="/about">
            {/* it is always a good idea to use exact bz otherwise react do partial matching */}
            <About />
          </Route>
         <Route exact path="/">
       <TextForm heading="Enter the text to analyze below:" mode={mode} showAlert={showAlert}/> 
       </Route>
       </Switch>

  
{/* <About/> */}

</div>
</Router>

    </>
  );
}

export default App;
