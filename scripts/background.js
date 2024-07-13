function randomImage() {
	var images = [
		"/images/backgrounds/best3v3map.jpeg",
		"/images/backgrounds/bestversion.jpeg",
		"/images/backgrounds/cosmo.jpeg",
		"/images/backgrounds/cosmo2.jpeg",
		"/images/backgrounds/cosmo3.jpeg",
		"/images/backgrounds/cosmo4.jpeg",
		"/images/backgrounds/fallenjumpscare.jpeg",
		"/images/backgrounds/hangar.jpeg",
		"/images/backgrounds/marsbaby.jpeg",
		"/images/backgrounds/marsithink.jpeg",
		"/images/backgrounds/marspvp.jpeg",
		"/images/backgrounds/moon.jpeg",
		"/images/backgrounds/moonshaunted.jpeg",
		"/images/backgrounds/mountains.jpeg",
		"/images/backgrounds/nostalgia.jpeg",
		"/images/backgrounds/ohgod.jpeg",
		"/images/backgrounds/oldtower.jpeg",
		"/images/backgrounds/oldtower2.jpeg",
		"/images/backgrounds/oldtowertraveler.jpeg",
		"/images/backgrounds/osirisland.jpeg",
		"/images/backgrounds/sothisisthedevilslair.jpeg",
		"/images/backgrounds/speaker.jpeg",
		"/images/backgrounds/stars.jpeg",
		"/images/backgrounds/thegreatmoonball.jpeg",
		"/images/backgrounds/thexurplace.jpeg",
		"/images/backgrounds/thinkyoucankillagod.jpeg",
		"/images/backgrounds/traveler.jpeg",
		"/images/backgrounds/venus.jpeg",
		"/images/backgrounds/venus2.jpeg",
		"/images/backgrounds/venus3.jpeg",
		"/images/backgrounds/venusvault.jpeg",
	];
	var size = images.length;
	var x = Math.floor(size * Math.random());
	console.log(x);
	var element = document.getElementById("background");
	console.log(element);
	element.style["background-image"] = "url(" + images[x] + ")";
}

document.addEventListener("DOMContentLoaded", randomImage);
