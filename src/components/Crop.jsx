// src/components/MySplideComponent.jsx
import React, { useEffect, useRef } from 'react';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';

const MySplideComponent = () => {
  const splideRef = useRef(null);

  useEffect(() => {
    if (splideRef.current) {
      const splide = new Splide(splideRef.current, {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 3,
        autoScroll: {
          speed: 1,
        },
        extensions: { AutoScroll },
      });

      splide.mount();
    }
  }, []);

  return (
    <div className="splide" ref={splideRef}>
      <div className="splide__track">
        <ul className="splide__list">
          <li className="splide__slide">Slide 1</li>
          <li className="splide__slide">Slide 2</li>
          <li className="splide__slide">Slide 3</li>
          <li className="splide__slide">Slide 4</li>
          <li className="splide__slide">Slide 5</li>
        </ul>
      </div>
    </div>
  );
};

export default MySplideComponent;
