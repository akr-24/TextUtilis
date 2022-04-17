//the name of the component has to be always begin with a capital letter
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar- ${props.mode} bg- ${props.mode}`}>
      {/* writing within curly braces implies we are using javascript */}
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link> 
    {/*being javascript it is written inside curly braces */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* (Link --->to) is being used for routing instead of a-->href in order to avoid reloading*/}
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
        
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Type to Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode==='black'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox"  id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
</div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes={title:PropTypes.string.isRequired,aboutText:PropTypes.string.isRequired};
Navbar.defaultProps={
 title:'Set title here',
 aboutText:'About'

}