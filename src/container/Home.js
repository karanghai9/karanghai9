import React from 'react';
import './Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import Fade from 'react-reveal/Fade';

function Home() {
    let history = useHistory();

    const handleRoute = () =>{ 
        history.push("/contact");
      }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Fade left>
                            <Row className="myName">Hi, I’m Karan Ghai</Row>
                        </Fade>
                        <Row className="typewriter">Software Developer</Row>
                        <Row className="buttons">
                            <Col>
                                <button className="btnHire" onClick={handleRoute}>Hire Me</button>
                            </Col>
                            <Col>
                                <a className="btnDownload" href={require("../component/MyResume.pdf")} download="reactResume">Download CV</a>
                            </Col>
                        </Row>
                        <div className="skills">
                            <div className="skillset">Skillset</div>
                            <Row>
                                <Col>
                                    <p>JavaScript</p>
                                </Col>
                                <Col>
                                    <p>Python</p>
                                </Col>
                                <Col>
                                    <p>Java</p>
                                </Col>
                                <Col>
                                    <p>HTML</p>
                                </Col>
                                <Col>
                                    <p>CSS</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>ReactJS</p>
                                </Col>
                                <Col>
                                    <p>MongoDB</p>
                                </Col>
                                <Col>
                                    <p>ExpressJS</p>
                                </Col>
                                <Col>
                                    <p>NodeJS</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Numpy</p>
                                </Col>
                                <Col>
                                    <p>Pandas</p>
                                </Col>
                                <Col>
                                    <p>Sklearn</p>
                                </Col>
                                <Col>
                                    <p>Selenium</p>
                                </Col>
                                <Col>
                                    <p>TensorFlow</p>
                                </Col>
                                <Col>
                                    <p>Keras</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Machine Learning</p>
                                </Col>
                                <Col>
                                    <p>Deep Learning</p>
                                </Col>
                                <Col>
                                    <p>SQL</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col><img className="zoom" src="/me.png" alt="profile_pic" /></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;