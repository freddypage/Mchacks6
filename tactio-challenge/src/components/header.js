import React, { Component } from 'react';
import './header.css';



class Header extends Component {
  render() {
    return (
    	<div>
      <header className="Header">
      	<BackButton 
              title={"Home"}
              school={"UBC"}
              href={"home"}
            />

      	<div className="float-div2"><img src={mainLogo} className="imgS"/><h2 className="float-text">EAT SMART</h2></div>

      </header>
      </div>

    );
  }
}

export default Header;