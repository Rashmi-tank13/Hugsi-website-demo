import * as React from 'react';

const Articles=()=> {

    const img1=require('../images/article1.png');
    const img2=require('../images/article2.png');

  return (
      <>

      <div>
      <h2 className='article-h2'>Latest Articles</h2>
      </div>

<div className="w3-row-padding w3-margin-top article-main">
    <div className="w3-third">
      <div className="w3-card article-main-div">
        <img src={img1} className='article-img' alt='article-1'/>
        <div className="w3-container article-h5-div">
          <h5 className='article-h5'>The Green KPI's HUGSI</h5>
        </div>
      </div>
    </div>
  
    <div className="w3-third">
      <div className="w3-card article-main-div">
        <img src={img2} className='article-img' alt='article-2'/>
        <div className="w3-container article-h5-div"  > 
          <h5 className='article-h5'>Is the world getting greener?</h5>
        </div>
      </div>
    </div>
  
    <div className="w3-third">
      <div className="w3-card article-main-div">
        <img src={img1} className='article-img' alt='article-3'/>
        <div className="w3-container article-h5-div">
          <h5 className='article-h5'>The Green KPI's HUGSI</h5>
        </div>
      </div>
    </div>
  </div>
  <button className='articles-button'>See all articles</button>
      </>
    
  );
}

export default Articles
