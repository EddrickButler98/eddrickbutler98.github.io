// Taken from http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// Array -> Array
//
// Randomize the order of the elements in the array.
//
// >>> shuffle([1,2,3])
// [1, 2, 3]
// >>> shuffle([1,2,3])
// [2, 3, 1]


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// links to video clips
var video_urls = [
	"https://www.youtube.com/watch?v=CB7iTh-G0Wo",
	"https://www.youtube.com/watch?v=jUJ9As47Yq8",
	"https://www.youtube.com/watch?v=nwIAgxMv7hI",
	"https://www.youtube.com/watch?v=kKvEllHwnuo",
	"https://www.youtube.com/watch?v=f-z1q124A54",
	"https://www.youtube.com/watch?v=3rK-M97rraQ",
	"https://www.youtube.com/watch?v=_oE5GRu5oUA",
	"https://www.youtube.com/watch?v=NhAGq1g2OZs",
	"https://www.youtube.com/watch?v=zuNSoKsIxJo",
	"https://www.youtube.com/watch?v=ocTTHkQZsBw",
	"https://www.youtube.com/watch?v=snpnKcCFFus",
	"https://www.youtube.com/watch?v=K_xwj9bHZm4",
	"https://www.youtube.com/watch?v=aRRNoe-Iqxo"
];

// links to posters for the video clips
var poster_urls = [
	"img/life_movie_cover.jpg",
	"img/next_friday.jpg",
	"img/roscoe_jenkins.jpg",
	"img/johnson_family_vacation.jpg",
	"img/the_fighting_temptations.jpg",
	"img/barbershop.jpg",
	"img/barbershop2.jpg",
	"img/the_next_cut.jpg",
	"img/ride_along.jpg",
	"img/the_fifth_wave.jpg",
	"img/2012.jpg",
	"img/the_day_after_tomorrow.jpg",
	"img/i_can_do_bad.jpg"
];

// divs that contain the movie links and posters
var movie_elements = document.getElementsByClassName("movie");

// Randomize the order of the movies in the html
function changePlaces() {
	var ids = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

	for (var i = 0; i < ids.length; i++) {
		var movie_element = movie_elements[i];
		var video_url = video_urls[ids[i]];
		var poster_url = poster_urls[ids[i]];

		var a = movie_element.getElementsByTagName("a")[0];
		var img = movie_element.getElementsByTagName("img")[0];

		a.href = video_url;
		img.src = poster_url;
	}
}

// start of the page
changePlaces();

// add the onclick listener for the randomize button
document.getElementById("randomize-button")
	    .addEventListener("click", changePlaces);