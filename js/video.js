var video;


window.addEventListener("load", function() {
	video = document.querySelector("#player1");
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	
});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume*100 + "%"

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
	console.log(video.currentTime);

});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false){
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute"
	} else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute"
	}

});

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = document.querySelector("#slider").value/100
	document.querySelector("#volume").innerHTML = video.volume*100 + "%"

});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");


});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");

});
