import React from 'react';
import ImageScrollingAnimation from '../../components/ImageScrollingAnimation';

const Animation = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'black' }}>
      <div style={{ height: '2000px', width: '100%' }}></div>
      <ImageScrollingAnimation />
      <div style={{ height: '2000px', width: '100%' }}></div>
    </div>
  );
};

export default Animation;
