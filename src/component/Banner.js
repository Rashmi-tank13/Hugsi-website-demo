import React from 'react';
import "../../src/styles.css"

const Banner = () => {
  return (
    <>
    <div className='banner'>
      <div className='banner-main'>
      <div >Husqvarna Urban Green Space Index</div>
      <h1>Quantifying the  greenness of global cities</h1>
      <h6>By applying computer vision and deep learning techniques on  satellite images,
       HUGSI measures and analyzes urban green space in select cities across the globe.</h6>
      
      <div className='banner-button'>
       <p>How green is your city?</p>
        <button className='button'>To the ranking</button>
        <button className='button-second'>How it works</button>
      </div>

      <div className='info'>
        <h2>255</h2>
        <h2 className='info-h2'>60</h2>
        <h2 className='info-h2'>7</h2>
      </div>
      <div className='info-details'>
        <div>cities</div>
        <div className='info-details-countries'>countries</div>
        <div className='info-details-regions'>regions</div>
      </div>
      </div>
      </div> 
   </>
  )
}

export default Banner
