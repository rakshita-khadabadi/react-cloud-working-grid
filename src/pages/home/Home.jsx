import "./home.css";
import React from 'react';
import image from '../../images/roomates.jpg';

export default function Home(){
    return (
        <div style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
         height:1000,width:1115
        }}>
          </div>
    );
}