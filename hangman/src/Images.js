import React from 'react';
import img0 from './0.jpg';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import img6 from './6.jpg';
import './Images.css';

const images = [img0, img1, img2, img3, img4, img5, img6];

const Images = (props) => {
  const imgIdx = props.nWrong;
  const imgAlt = `${props.nWrong}/${props.maxWrong}`;
  return (
    <div className="Images">
      <img src={images[imgIdx]} alt={imgAlt} />
    </div>
  );
};

export default Images;
