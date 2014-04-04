var photoStorage = new Array();
var currentPhotoURL;

photoStorage.push('/img/edits/googleearth1.jpg');
photoStorage.push('/img/edits/googleearth11.jpg');
photoStorage.push('/img/edits/googleearth15.jpg');
photoStorage.push('/img/edits/googleearth20.jpg');
photoStorage.push('/img/edits/googleearth21.jpg');
photoStorage.push('/img/edits/googleearth24.jpg');
photoStorage.push('/img/edits/googleearth25.jpg');
photoStorage.push('/img/edits/googleearth27.jpg');
photoStorage.push('/img/edits/googleearth29.jpg');
photoStorage.push('/img/edits/googleearth3.jpg');
photoStorage.push('/img/edits/googleearth30.jpg');
photoStorage.push('/img/edits/googleearth32.jpg');
photoStorage.push('/img/edits/googleearth33.jpg');
photoStorage.push('/img/edits/googleearth35.jpg');
photoStorage.push('/img/edits/googleearth37.jpg');
photoStorage.push('/img/edits/googleearth39.jpg');
photoStorage.push('/img/edits/googleearth4.jpg');
photoStorage.push('/img/edits/googleearth5.jpg');
photoStorage.push('/img/edits/googleearth6.jpg');
photoStorage.push('/img/edits/googleearth8.jpg');
photoStorage.push('/img/edits/googleearth9.jpg');

function shuffleGamePhoto () {
	var randomIndex = Math.floor((Math.random()*photoStorage.length)+0);

	console.log("index is");
	console.log(randomIndex);

	console.log("current photo URL is");
	console.log(photoStorage[randomIndex]);

	currentPhotoURL = photoStorage[randomIndex];


}

