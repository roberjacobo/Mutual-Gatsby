import React from "react"

import "../styles/components/carousel.css"

import funerales15 from "../images/funerales(15).jpeg"
import funerales16 from "../images/funerales(18).jpeg"
import funerales17 from "../images/funerales(1).jpeg"
/* import funerales18 from "../images/funerales(19).jpeg"
import funerales19 from "../images/funerales(2).jpeg" */

const Carousel = () => {
  return (
    <div className="galery">
      <h3>Galería</h3>
      <div className="carousel-margin">
        <div className="slider-wrapper">
          <div className="slider">
            <input
              type="radio"
              name="slider"
              className="trigger"
              id="one"
              checked="checked"
            />

            <div className="slide">
              <figure className="slide-figure">
                <img className="slide-img" src={funerales15} alt="..." />
              </figure>
              {/* <!-- .slide-figure --> */}
            </div>
            {/* <!-- .slide --> */}

            <input type="radio" name="slider" className="trigger" id="two" />

            <div className="slide">
              <figure className="slide-figure">
                <img className="slide-img" src={funerales17} alt="..." />
              </figure>
              {/* <!-- .slide-figure --> */}
            </div>
            {/* <!-- .slide --> */}

            <input type="radio" name="slider" className="trigger" id="three" />

            <div class="slide">
              <figure className="slide-figure">
                <img className="slide-img" src={funerales16} alt="..." />
                <figcaption className="slide-caption">
                  <p>3</p>
                </figcaption>
              </figure>
              {/* <!-- .slide-figure --> */}
            </div>
            {/* <!-- .slide --> */}
          </div>
          {/* <!-- .slider --> */}

          {/* <ul className="slider-nav">
            <li className="slider-nav__item">
              <label className="slider-nav__label" for="one">
                
              </label>
            </li>
            <li className="slider-nav__item">
              <label className="slider-nav__label" for="two">
                
              </label>
            </li>
            <li className="slider-nav__item">
              <label className="slider-nav__label" for="three">
                
              </label>
            </li>
          </ul> */}
          {/* <!-- .slider-nav --> */}
        </div>
        {/* <!-- .slider-wrapper --> */}
      </div>
    </div>
  )
}

export default Carousel
