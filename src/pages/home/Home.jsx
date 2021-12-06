import "./home.css";
import React from 'react';
//import image from '../../images/roomates.jpg';
import image from '../../images/image1.png';

export default function Home(){
    return (
        <div >
        <div style={{ backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh' }}>

        </div>
        <div className="footer-bottom">
		Copyright, All Rights Reserved. Cloud Project 2021
	</div>
        </div>
        // <div style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
        //  height:1000,width:1115
        // }}>
        //   </div>
    );
}