import React, {useEffect, useState, Suspense} from 'react';
import { useNavigate } from 'react-router-dom';
import "./About.css";
// import homeImage from "./images/office.jpg";
import Navbar from '../../Components/Navbar/Navbar';


function Home(props) {

    return (
        
        <div class = "head-text">
            <h3>About Alyssa</h3>
            <br></br>
            <br></br>
            I am a senior at the University of Arizona pursuing a Bachelor of Science in Computer Science.
            <br></br>
            I'm currently seeking Front-End Developer/UX designer roles. 
            <br></br>
            I am proficient in HTML, CSS, Javascript
            and React. I'm looking forward to gaining even more experience. 
            <br></br>
            <br></br>
            Prior to my career change, I graduated from Holy Names University with a Bachelor of Arts 
            degree in Music. 
            <br></br>
            I have always had a passion for the arts but once I stumbled across
            software development, 
            <br></br>
            I was so intrigued that I went back to school.
            <br></br>
            I am constantly updating this website so feel free to check periodically!
              {/* <img src={homeImage} className = "office-photo" ></img>   */}
            {/* <div className="left"> */}
                {/* <img src={homepageContentImage} className="headerPhoto"></img>  */}
                
                {/* <div className="textContainer"> 
                    <div className = "text"> 
        
                    
                    </div>
                </div>
            {/* </div> */}
            {/* <div className="right"> */}
                {/* <img src = {homeOffice} className = "office-photo" ></img> */}
            {/* </div>  */}

        </div>
      
           

    );
}

export default Home;
