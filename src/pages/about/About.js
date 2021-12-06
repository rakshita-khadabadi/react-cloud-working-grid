import React,{useState} from 'react';
import image from '../../images/about.jpg'
import './about.css';

//import './login.css';
import { useHistory } from "react-router-dom";
import axios from "axios";



const About = () => {

    return (

        <div>
        
        <div className="aboutinfo" style={{ backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh', color:'#fff0db', }}>

        <div className="aboutinfo">
            <h1 style={{ textAlign:'center' }}>About Us</h1> <br/>
            <div style={{ fontSize:'26px' }}>
            <ul >
            <li>Easy and convenient ways of finding roommates</li>
            <li>Easy connect options</li>
            <li>Know your potential roommates preferences </li>
            <li>Get details about the price, distance from campus and many more.... </li>
            </ul>  
            </div>
            
            
        </div>

        </div>
        </div>
    )
}
    

    





export default About
