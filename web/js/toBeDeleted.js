var gameStorage = new buckets.Dictionary;
var gameDataArray = new Array();

function sender (userName, firstName, profilePicURL) {
	this.userName = userName;
	this.firstName = firstName;
	this.profilePicURL = profilePicURL;
}

function receiver (userName, firstName, profilePicURL) {
	this.userName = userName;
	this.firstName = firstName;
	this.profilePicURL = profilePicURL;
}

function currentUser (userName, firstName, profilePicURL, cameraCount, glassCount) {
	this.userName = userName;
	this.firstName = firstName;
	this.profilePicURL = profilePicURL;
	this.cameraCount = cameraCount;
	this.glassCount = glassCount;
}

function position (row, col) {
	this.row = row;
	this.col = col;
}

function board (itemPos, boardPhotoURL, itemPhotoURL) {
	this.itemPos = itemPos;
	this.boardPhotoURL = boardPhotoURL;
	this.itemPhotoURL = itemPhotoURL;
}

function gameData (senderData, currentUserData, boardData) {
	this.senderData = senderData; //senderObj
	this.currentUserData = currentUserData; //currentUserObj
	this.boardData = boardData;	//boardObject
}

