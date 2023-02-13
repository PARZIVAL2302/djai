song_1 = "";
song_2 = "";

left_wrist_x = "";
right_wrist_x = "";
left_wrist_y = "";
left_wrist_x = "";

function preload(){
    song_1 = loadSound("Mission-Impossible.mp3");
    song_2 = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        left_wrist_x = results[0].pose.leftWrist.x;
        console.log("X coordinates of left wrist are " + left_wrist_x);

        right_wrist_x = results[0].pose.rightWrist.x;
        console.log("X coordinates of right wrist are " + right_wrist_x);

        right_wrist_y = results[0].pose.rightWrist.y;
        console.log("Y coordinates of right wrist are " + right_wrist_y);

        left_wrist_y = results[0].pose.leftWrist.y;
        console.log("Y coordinates of left wrist are " + left_wrist_y);
    }
}