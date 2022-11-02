let video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	video = document.querySelector("#player1");
	// not done
});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
	// not done
 });

 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
   video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= .90;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.10;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if ((video.currentTime + 10) <= video.duration){
		video.currentTime += 10
	} else {
		video.currentTime = 0
	}
	// look over
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.mute = true)



});

document.querySelector("#slider").addEventListener("click", function() {


});

