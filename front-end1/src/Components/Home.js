import React from 'react';
import Img3 from './img4.webp'
import Img4 from './CP2.jpg'
import Img5 from './SM2.png'

const HomePage = () => {
    return (
        <div>
            <h1>Have a look on some awesome Potraits</h1>
            <div className='home-container'>

                <div className='home-Box'>
                    
                   <img src={Img3}  alt='image'/>
                </div>
                <div className='home-Box'>
                   
                    <img src={Img4}  alt='image' width="320" height="320" />
                </div>
                <div className='home-Box'>
                    
                    <img src={Img5}  alt='image'  width="320" height="320"/>
                </div>
            </div>
        </div>
    )
}

export default HomePage;