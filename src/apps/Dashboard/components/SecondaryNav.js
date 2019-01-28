import React, { Component } from 'react';

class SecondaryNav extends Component {
  render() {
    return (
      <div className="container scroll" id="categories">
        <li className="nav-item"><button type="button" className="btn-link" id="all">All</button></li>
        <li className="nav-item"><button type="button" className="btn-link" id="Design">Design</button></li>
        <li className="nav-item"><button type="button" className="btn-link" id="Photoshop">Photoshop</button></li>
        <li className="nav-item"><button type="button" className="btn-link" id="Development">Development</button></li>
        <li className="nav-item"><button type="button" className="btn-link" id="Coding">Coding</button></li>
        <li className="nav-item"><button type="button" className="btn-link" id="Adventure">Adventure</button></li>
        <li className="nav-item"><button type="button" className="btn-link" id="Entrepreneurship">Entrepreneurship</button></li>
        <li className="nav-item"><button type="button" className="btn-link" id="Photography">Photography</button></li>
        <li className="nav-item"><button type="button" className="btn-link" id="Art">Art</button></li>
        <li className="nav-item"><button type="button" className="btn-link" id="Sports">Sports</button></li>
        <li className="nav-item"><button type="button" className="btn-link" id="Music">Music</button></li>
        <li className="nav-item"><button type="button" className="btn-link" id="Branding">Branding</button></li>
        <li className="nav-item"><button type="button" className="btn-link" id="Illustration">Illustration</button></li>
        <li className="nav-item"><button type="button" className="btn-link" id="Web">Web</button></li>
        <li className="nav-item"><button type="button" className="btn-link" id="UX">UX</button></li>
        <li className="nav-item"><button type="button" className="btn-link" id="Print">Print</button></li>
      </div>
    );
  }
}

export default SecondaryNav;
