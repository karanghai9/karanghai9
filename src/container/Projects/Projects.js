import React, { Component } from 'react';
import Project from './Project/Project';
import reactImg from "../../component/reactJS.jpg";
import pythonImg from "../../component/python.jpg";

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            data: [{ 
                technology: pythonImg,
                head: "Facial Recognition",
                description: "Facial Recognition project created on Python using libraries like cv2, face-recognition and dlib can easily identify a person using his images which are to be provided as sample data to train the model.",
                previewUrl: "https://colab.research.google.com/drive/1AHxXlcEaeOCZdc3xRS9RvJUr6wmpvuoy?usp=sharing"
            },
            {
                technology: reactImg,
                head: "Burger Builder",
                description: "In this project user can prepare a burger by adding ingredients like bacon, cheese of his choice and ordering functionality is also provided after logging-in using unique credentials."
            },
            {
                technology: pythonImg,
                head: "Loan Prediction",
                description: "Using the sample dataset of thousands of borrowers, firstly I drew a correlation matrix for all the features and after analysing the same, a model has been trained to predict whether a borrower can repay the loan or not.",
                previewUrl: "https://colab.research.google.com/drive/1cvqtD5ESRSrso0Ekf4KnRcwYn3cTof1V?usp=sharing" 
            },
            {
                technology: reactImg,
                head: "Portfolio",
                description: "You guessed it right! The portfolio you are looking at, is also created using ReactJS. This project includes state components as well as class based components. Have a look at its source code by clicking the below button.",
                previewUrl: "https://github.com/karanghai9/karanghai9"
            },
            {
                technology: pythonImg,
                head: "German Traffic Signs Detection",
                description: "This is one of my favourite project as it is created using Deep Learning model. Trained on dataset of thousands of images, this project can differentiate between all the different traffic signs.",
                previewUrl: "https://colab.research.google.com/drive/1fW2fGEDdpZoqAeQL3sUQcvoTx0VBkR0L?usp=sharing"
            },
            {
                technology: pythonImg,
                head: "Spam mail Detection",
                description: "As the name suggests, this project is just to analyse whether a provided mail is a spam mail or not. To achieve this, I did use stopwords and PorterStemmer.",
                previewUrl: "https://colab.research.google.com/drive/1sWYRuffc_QHHP2s9tdgovDIGgFDblvIx?usp=sharing"
            }]
        };   
    }   
  
    render() {
        return (
        <div>
            <Project data={this.state.data} />
        </div>
        );
    }
}
export default Projects;