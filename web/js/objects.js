

//structure is something like this???
//userName: game{}

//game: {gameID, senderData, photoURL, itemPicURL, itemPos{}}

//itemPos: {x, y}

var senderData = {
	userName: "sender.qa",
	firstName: "testerSender",
	profilePicURL: '/img/stickman.jpg'
};

var itemPos = {
	x: 6,
	y: 6
};

var game =  {"gameID": "abcdefg",
	"senderFirstName": senderData.firstName,
	"senderProfilPic": senderData.profilePicURL,
	  "gamePhotoURL" : '/img/stickman.jpg',
		   "itemPic" : '/img/stickman.jpg',
	   "itemPosition": itemPos
};

//use like a dictionary
var gameStorage = new Array();

//game.senderFirstName
//game.senderProfilePic
//console.log(game.senderProfilPic);
//console.log(game.senderFirstName);
gameStorage.push(game);
gameStorage.push(game);
gameStorage.push(game);
gameStorage.push(game);
gameStorage.push(game);
//console.log(gameStorage[0]);



//var gameFakeData;

