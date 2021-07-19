import React from 'react';
import "./About.css"
import Fade from 'react-reveal/Fade';
import pythonImg from "../component/mee.png";

function About() {
    return (
        <div className="parallax-about">
            <Fade>
                <div className="about-header"><h1><b>About Me</b></h1></div>
            </Fade>

            <div class="about-text">
                <img class="container_image" src={pythonImg} alt="karan_img"/>
                <div>
                    Started from a basic hello world program in C++ to developing web apps from scratch, I came a long way. After graduating from Institute of Technology and Science, I got placed in TCS. Training period helped me a lot to experience latest technologies like Machine Learning and Deep Learning which made me fell in love with Python projects.<br></br>But on the other side I always wanted to be one of the best UI developers which made me learn MERN stack. You can find some of the projects under <a href="/projects"><b>Projects</b></a> page.
                </div>
            </div>

            <div className="about-text">
                Do follow me on social apps, links are provided under <a href="/contact"><b>Contact</b></a> page.
            </div>
        </div>
    );
}

export default About;