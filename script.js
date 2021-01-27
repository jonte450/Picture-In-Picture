
//Getting the tags from index.html element
const videoElement = document.getElementById('video');
const button = document.getElementById('button');


//Prompt to select media stream pass to video element then play.

async function selectMediaStream(){
    console.log('Hello');
    try{
      const mediaStream = await navigator.mediaDevices.getDisplayMedia();
      videoElement.srcObject = mediaStream;
      videoElement.onloadedmetadata = () => {
          videoElement.play();
      }
    }catch (error){
        //Catch the errors
        console.log('whoops, error here:',error);
    }
}


//Listener on the object to show the shared data
//When start button is pressed
//Disable the start button to
button.addEventListener('click', async () => {
//Disable the button
button.disabled = true;
//Start Picture in Picture
await videoElement.requestPictureInPicture();
//Reset Button
button.disabled = false;
});
//Onload

selectMediaStream();