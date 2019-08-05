# DDD Presentation – Understanding Facial Recognition

## Table of Contents
* Warm-Up (15 min)

* Introduction (2 minutes)
* How does it work? (5 minutes)
* Training (3 minutes)
* Accuracy (4 minutes)
* Performance (3 minutes)
* Technologies (2 minutes)
* Conclusion (1 minute)


## Warm-Up
Cycle through images to predict, some informative and some humorous

## Introduction
Intro
* Welcome
* Sponsors

What is Facial Recognition?
* Identifying a person from an image (or video frame)
* e.g. Facebook tagging, Apple Face ID, law enforcement and security surveillance

What we will be looking at:
* How does it work?
* Training
* Accuracy
* Performance
* Technologies
* End-to-End Scenario


> Create one page for each, with images...  
> If time permits, make it animated


## How does it work?
What is going on between the input and the output?


Pipeline Overview:
* Input
* Face Detection
* Conversion
* Prediction
* Output

Pipeline details:
* Input
    * Images, video or live camera
    * Can be variable in resolution and quality
* Face Detection
    * Overview
        * Using input
        * Is it a face?
        * If so, crop the face from the input
        * Finds key face landmarks
        * Consistency is key
        * Examples: MTCNN, DLib
    * Implementation
        * MTCNN neural network
        * Outputs a 160px by 160px face
        * Attempts to align landmarks consistently
* Conversion
    * Overview
        * Convert cropped face to "features"
        * Features strongly represent "facial features"
        * Needs to be converted to something that neural networks agree with
    * Implementation
        * FaceNet neural network
        * Converts image of face to 512 numbers (called embeddings)
        * Also supports 128 and 256 dimension embeddings
        * Learns how to convert image of face to embeddings via training
        * Pre-trained on VGGFace2 dataset, from 3.3+ million images of faces
* Prediction
    * Overview
        * Use converted face (512 dimension embedding) for prediction
        * Compare converted face with "training" model
        * Training model could have many known faces
        * Can use any machine learning model at this point (e.g. Logistic Regression, SVMs, Neural Networks)
        * Really simple Nearest Neighbour algorithm works well
    * Implementation
        * Nearest neighbour algorithm
        * Compare embeddings of prediction vs known embeddings
        * Example is 2-dimensional, but in reality it’s 512-dimensional
        * Don’t need many examples of each person (one-shot learning)
* Output
    * Output is a number, that represents an ID of the person
    * Number maps to person’s name (label)
* Live demo
    * Predict me in live stream
    * Input
    * Face Detection
    * Conversion
    * Prediction

## Training
Training
* “Train” models
* Evolve models via "online" learning


## Accuracy
Measuring accuracy:
* Calculate “distance”
* Anything lower than 0.75 is considered accurate
* Larger than 1.2 is rotten
* Could add “unknown” threshold

What needs to be considered:
* Input resolution
* Robust to variables (e.g. image quality, larger datasets)

What causes inaccurate predictions?
* Large quantity of people to compare against
* Bad input (e.g. bad resolution, face obscured)
* Lookalikes / twins
* Bad threshold for "unknown" people
* Wrong choice of algorithm for prediction

## Performance
Performance considerations:
* Hardware (CPU vs GPU)
* Amount of known people in dataset (high quantity = slower)
* Choice of algorithms for face detection, embeddings and predictions

Live demo

## Technologies
Technologies used – server side:
* Language: Python
* Maths computation graphs (especially for GPUs) – Tensorflow
* Web service – Python Flask
* Python environment: Anaconda (but virtualenv would be better for deployment)

Technologies used – client side:
* Electron, Jquery, React, Redux, HTML5, CSS3, Babel…




## Conclusion
Resources

Questions?


