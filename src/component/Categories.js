import * as React from 'react';

const Categories = () => {

    const percentage = require('../images/percentage.png');
    const smile = require('../images/smile.png');
    const distribution = require('../images/distribution.png');
    const user = require('../images/user.png');
    const tree = require('../images/tree.png');
    const grass = require('../images/grass.png');


    return (
        <>

            <div className="w3-container" >
                <h2 className='category-h4'>Categories</h2>
            </div>

            <div className="w3-row">
                <div className="w3-col m4  w3-center" style={{ display: 'flex' }}>
                    <div className='category-img-div'>
                        <img src={percentage} className='categories-img'></img>
                    </div>
                    <div className='category-content'>
                        <div  style={{ display: 'flex', alignItems: 'center' }}>
                            <span className='category-span'>Highest percentage of urban green space</span>
                            <div className='category-icon'>
                                <i class="fas fa-question" style={{ color: "rgb(255, 255, 255)", fontWeight: "bold", fontSize: "0.5rem" }}></i>
                            </div>
                        </div>
                        <h5 className='categories-title'>Utrechtse Heuvelrug Municipality</h5>
                    </div>
                </div>
                <div className="w3-col m4  w3-center" style={{ display: 'flex' }}>
                <div className='category-img-div'>
                        <img src={smile} className='categories-img'></img>
                    </div>
                    <div className='category-content'>
                        <div  style={{ display: 'flex', alignItems: 'center' }}>
                            <span className='category-span'>Best health of urban vegetation</span>
                            <div className='category-icon'>
                                <i class="fas fa-question" style={{ color: "rgb(255, 255, 255)", fontWeight: "bold", fontSize: "0.5rem" }}></i>
                            </div>
                        </div>
                        <h5 className='categories-title'>Oudewater Municipality</h5>
                    </div>
                </div>
                <div className="w3-col m4  w3-center" style={{ display: 'flex' }}>
                <div className='category-img-div'>
                        <img src={distribution} className='categories-img'></img>
                    </div>
                    <div className='category-content'>
                        <div  style={{ display: 'flex', alignItems: 'center' }}>
                            <span className='category-span'>Best distribution of urban green space</span>
                            <div className='category-icon'>
                                <i class="fas fa-question" style={{ color: "rgb(255, 255, 255)", fontWeight: "bold", fontSize: "0.5rem" }}></i>
                            </div>
                        </div>
                        <h5 className='categories-title'>Lopik Municipality</h5>
                    </div>
                </div>
            </div>
            <div className="w3-row category-second-list">
                <div className="w3-col m4  w3-center" style={{ display: 'flex' }}>
                    <div className='category-img-div'>
                        <img src={user} className='categories-img'></img>
                    </div>
                    <div className='category-content'>
                        <div  style={{ display: 'flex', alignItems: 'center' }}>
                            <span className='category-span'>Most urban green space per capital</span>
                            <div className='category-icon'>
                                <i class="fas fa-question" style={{ color: "rgb(255, 255, 255)", fontWeight: "bold", fontSize: "0.5rem" }}></i>
                            </div>
                        </div>
                        <h5 className='categories-title'>Lopik Municipality</h5>
                    </div>
                </div>
                <div className="w3-col m4  w3-center" style={{ display: 'flex' }}>
                <div className='category-img-div'>
                        <img src={tree} className='categories-img'></img>
                    </div>
                    <div className='category-content'>
                        <div  style={{ display: 'flex', alignItems: 'center' }}>
                            <span className='category-span'>Highest percentage of urban area covered by trees</span>
                            <div className='category-icon'>
                                <i class="fas fa-question" style={{ color: "rgb(255, 255, 255)", fontWeight: "bold", fontSize: "0.5rem" }}></i>
                            </div>
                        </div>
                        <h5 className='categories-title'>Laren Municipality</h5>
                    </div>
                </div>
                <div className="w3-col m4  w3-center" style={{ display: 'flex' }}>
                <div className='category-img-div'>
                        <img src={grass} className='categories-img'></img>
                    </div>
                    <div className='category-content'>
                        <div  style={{ display: 'flex', alignItems: 'center' }}>
                            <span className='category-span'>Highest percentage of urban area covered by grass</span>
                            <div className='category-icon'>
                                <i class="fas fa-question" style={{ color: "rgb(255, 255, 255)", fontWeight: "bold", fontSize: "0.5rem" }}></i>
                            </div>
                        </div>
                        <h5 className='categories-title'>Montfoort Municipality</h5>
                    </div>
                </div>
            </div>


        </>
    );
}
export default Categories