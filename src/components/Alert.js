import React from 'react'

function Alert(props) {
    //to make s-->S(success-->Success)...i.e.to convert it into capital
    const capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
        //slice -->it will return all other characters other than the first one
    }
  return (
   
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
         <strong>{capitalize(props.alert.type)}</strong> :{props.alert.msg}
</div>
    
  )
}

export default Alert

