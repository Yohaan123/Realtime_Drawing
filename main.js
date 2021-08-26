noseX = 0;
noseY = 0;

leftwrist = 0;
rightwrist = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 115);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log(" PoseNet is initialized ");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log("results = " + results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX);
        console.log("noseY = " + noseY);
        leftwrist = results[0].pose.leftWrist.x;
        rightwrist = results[0].pose.rightWrist.x;
        difference = floor(leftwrist - rightwrist);
        console.log("left wrist = " + leftwrist);
        console.log("right wrist = " + rightwrist);
        console.log("difference = " + difference);
    }
}

function draw() {
    background('#636160');
    fill('#ff0090');
    stroke('#ff0090');
    square(noseX,noseY,difference);
}