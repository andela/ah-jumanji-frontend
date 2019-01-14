import React, { Component } from 'react';

class MainPreloader extends Component {

  render() {
    const letters = ["A", "u", "t", "h", "o", "r", "'", "s", " ", "H", "a", "v", "e", "n"];
    const items = letters.map((letter) => (
      <span
        key={letter}
        data-text-preloader={letter}
        className="letters-loading">
        {letter}
      </span>
    )
    );

    return (
      <div id="preloader">
        <div id="section-preloader" className="section-preloader">
          <div className="animation-preloader">
            <div className="txt-loading">
              { items }
            </div>
          </div>
          <div className="loader-section" />
        </div>
      </div>
    );
  }
}

export default MainPreloader;
