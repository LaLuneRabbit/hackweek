var gameStorage = new buckets.Dictionary;

function sender (userName, firstName, profilePicURL) {
	this.userName = userName;
	this.firstName = firstName;
	this.profilePicURL = profilePicURL;
}

function currentUser (userName, firstName, profilePicURL) {
	this.userName = userName;
	this.firstName = firstName;
	this.profilePicURL = profilePicURL;
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