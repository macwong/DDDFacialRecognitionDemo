# DDD Presentation – Understanding Facial Recognition

## Warm-Up (15 min)
Cycle through images to predict, some informative and some humorous

## Intro (1 minute)
* Concepts and Features
* Recognition Pipeline
* Accuracy and Performance
* Technologies / resources
* Live demo

## Concepts and Features (4 minutes)
* What is Facial Recognition?
* Examples (e.g. Facebook tagging)
* Implementation options (e.g. Microsoft: Face API)
* Ideal features of Facial Recognition system
    * Accurate predictions
    * Input from image, video and cam
    * Robust to variables (e.g. image quality, larger datasets)
    * Real-time predictions
    * “Train” and evolve models
* Live demo


## Recognition Pipeline (5 minutes)
* Pipeline overview
* Input
    * Images, video or live camera
    * Can be variable in resolution and quality
* Face Detection
    * MTCNN neural network
    * Outputs a 160px by 160px face
    * Finds key face landmarks
    * Attempts to align landmarks consistently
    * Consistency is key
* Conversion
    * FaceNet neural network
    * Converts image of face to 512 numbers (called embeddings)
    * Also supports 128 and 256 dimension embeddings
    * Learns how to convert image of face to embeddings via training
    * Pre-trained on VGGFace2 dataset, from 3.3+ million images of faces
* Prediction
    * Nearest neighbour algorithm
    * Compare embeddings of prediction vs known embeddings
    * Example is 2-dimensional, but in reality it’s 512-dimensional
    * Don’t need many examples of each person (one-shot learning)
* Output
    * Output is a number, that represents an ID of the person
    * Number maps to person’s name (label)
* Live demo


## Training (3 minutes)
Nothing yet...

## Accuracy and Performance (4 minutes)
Measuring accuracy:
* Calculate “distance”
* Anything lower than 0.75 is considered accurate
* Larger than 1.2 is rotten
* Could add “unknown” threshold

What causes bad predictions?
* Large quantity of people to compare against
* Bad input (e.g. bad resolution, face obscured)
* Wrong choice of algorithm for prediction
* Unknown person

Performance considerations:
* Hardware (CPU vs GPU)
* Amount of known people in dataset (high quantity = slower)
* Choice of algorithms for face detection, embeddings and predictions

Live demo

## Technologies and Resources (2 minutes)
Technologies used – server side:
* Language: Python
* Maths computation graphs (especially for GPUs) – Tensorflow
* Web service – Python Flask
* Python environment: Anaconda (but virtualenv would be better for deployment)

Technologies used – client side:
* Electron, Jquery, React, Redux, HTML5, CSS3, Babel…

Live demo


## Summary (1 minute)
Resources

Questions


