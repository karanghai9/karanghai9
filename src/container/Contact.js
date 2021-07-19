import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Contact.css';
import Fade from 'react-reveal/Fade';

function Contact() {
    return (
        <div className="parallax-contact">
            <Fade>
                <Row>
                <div className="parallax-head">
                    Looking for a Web Developer?
                </div>
                </Row>
            </Fade>
            
            <Row>
                <div className="parallax-content">
                    <Row>
                        <div className="content-head">
                            " I'M A WEB DEVELOPER AND PROGRAMMER LIVING IN GURUGRAM, INDIA.
                            <br></br>
                            I CREATE WEB APPLICATIONS USUALLY WITH REACT. "
                        </div>
                    </Row>

                    <Row>
                        <div className="content-detail">
                            I primarily use MERN (Mongo,Express,React and Node) for developing web apps but picking up a new framework or language is also not a big deal.
                            <br></br>
                            I am comfortable creating not just web apps but also Machine Learning and Deep Learning models using Python.
                            <br></br>
                            You can check out some of the things I have worked upon under Projects page.
                        </div>
                    </Row>
                   
                    <Fade>
                        <Row>
                            <Col><a className="contactBtn" href="mailto:kg9811422163@gmail.com">Send me an Email</a></Col>
                            <Col><a className="contactBtn" href="tel:+919958313686">Discuss over Call</a></Col>
                            <Col>
                                <a href="https://www.facebook.com/karan.ghai.1997" className="fa fa-facebook"> </a>
                                <a href="https://github.com/karanghai9" className="fa fa-github"> </a>
                                <a href="https://www.linkedin.com/in/karan-ghai9" className="fa fa-linkedin"> </a>
                                <a href="https://www.instagram.com/karan.ghai9" className="fa fa-instagram"> </a>
                                <h6>Connect with me</h6>
                            </Col>
                        </Row>
                    </Fade>
                    <a href="https://wa.me/+919958313686" className="whatsapp_float fa fa-whatsapp" rel="noopener noreferrer"> </a>
                </div>
            </Row>
        </div>
    );
}

export default Contact;