import React, { useState, useEffect } from 'react';
// import CrossfadeImage from 'react-crossfade-image';
import { galleryList } from './galleryList';
import './style.css';
import CrossFadeImages from './CrossFadeImages';

const SlidingBackground = () => {
  const [curImg, setCurImg] = useState(0);

  const imgList = galleryList();

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      if (curImg < 163) {
        setCurImg(img => img + 1);
      } else {
        setCurImg(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [curImg]);

  return (
    <div className="sliding-background-container">
      <CrossFadeImages
        src={imgList[curImg].url}
        duration={1000}
        timingFunction={'ease-out'}
      />
    </div>
  );
};

export default SlidingBackground;
