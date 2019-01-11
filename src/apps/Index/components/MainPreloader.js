/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-for */
import React, {Component} from 'react';

class MainPreloader extends Component {
  render() {
    return (
      <div id="preloader">
        <div id="section-preloader" className="section-preloader">
          <div className="animation-preloader">
            <div className="txt-loading">
              <span data-text-preloader="A" className="letters-loading">A</span>
              <span data-text-preloader="u" className="letters-loading">u</span>
              <span data-text-preloader="t" className="letters-loading">t</span>
              <span data-text-preloader="h" className="letters-loading">h</span>
              <span data-text-preloader="o" className="letters-loading">o</span>
              <span data-text-preloader="r" className="letters-loading">r</span>
              <span data-text-preloader="s" className="letters-loading">s</span>
              <span data-text-preloader=" " className="letters-loading" />
              <span data-text-preloader="H" className="letters-loading">H</span>
              <span data-text-preloader="a" className="letters-loading">a</span>
              <span data-text-preloader="v" className="letters-loading">v</span>
              <span data-text-preloader="e" className="letters-loading">e</span>
              <span data-text-preloader="n" className="letters-loading">n</span>
            </div>
          </div>
          <div className="loader-section" />
        </div>
      </div>
    );
  }
}

export default MainPreloader;


