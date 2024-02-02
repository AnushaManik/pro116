noseX = 0;
noseY = 0;
function preload(){
lipstick_filter = loadImage('https://i.postimg.cc/kMZzvFx2/lipstick.png');
}
function setup(){
canvas = createCanvas( 300 , 300);
canvas.center();
video = createCapture(VIDEO);
video.size ( 300 , 300);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on("pose" , gotPoses);
}
function modelLoaded(){
    console.log('Posenet is initialised');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose_x = " + results[0].pose.nose.x );
        console.log("nose_y = "+ results[0].pose.nose.y );
        noseX = results[0].pose.nose.x - 25;
        noseY = results[0].pose.nose.y + 20;
    }
}
function draw(){
    image(video , 0 , 0 , 300 , 300);
    image(lipstick_filter , noseX , noseY , 50 , 40);

}
function takeSnapshot(){
save('filtered_img.png');
}
