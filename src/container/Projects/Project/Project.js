import React from 'react';
import "./Project.css";
import Zoom from 'react-reveal/Zoom';
import { Container, Col } from 'react-bootstrap';


function Projects(props) {
    const projects = props.data;
    console.log(projects)
   
    return (
        <div>
            <h1 className="project-header">Have a look at some of the projects created by me.</h1>
            <Zoom left>
            {projects.map((project, i)=>{
                const previewAvailable = project.previewUrl
                return(
                    <Container>
                        <div className="cards-list" key={i}>
                            <div className="card" style={{backgroundImage: `url(${project.technology})`}}>
                                <div className="content">
                                    <Col className="project-head">{project.head}</Col>
                                    <Col className="project-desc">{project.description}</Col>
                                    <Col>
                                        <b>{previewAvailable ?
                                            <a className="btnPreview" href={project.previewUrl}>Review Code</a>
                                        : 'Review not available'}</b>
                                    </Col>
                                </div>
                            </div>
                        </div>
                    </Container>
                );
            })}
            </Zoom>
        </div>
        );
}

export default Projects;