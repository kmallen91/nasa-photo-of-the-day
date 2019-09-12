import React from 'react';
// import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <a href="https://www.nasa.gov/index.html"><img className="footer-img" src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" /></a>
        <nav>
          
            <a href="https://apod.nasa.gov/apod/astropix.html">NASA APOD</a>    
            <a href="https://apod.nasa.gov/apod/archivepix.html">APOD Archives</a>    
            <a href="https://apod.nasa.gov/apod/lib/about_apod.html">About APOD</a>         
            
          
        </nav>
        
           
      </div>
    );
  }
}