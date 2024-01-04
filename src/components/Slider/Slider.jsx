import React, { useRef } from 'react';
import styles from './styles.module.css';

const Slider = ({ children, step = 150 }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= step;
  };

  const scrollRight = () => {
    sliderRef.current.scrollLeft += step;
  };

  return (
    <header className={styles.slider}>
      <button onClick={scrollLeft} className={styles.arrow}>
        {'<'}
      </button>
      {React.cloneElement(children, { ref: sliderRef })}
      <button onClick={scrollRight} className={styles.arrow}>
        {'>'}
      </button>
    </header>
  );
};

export default Slider;
