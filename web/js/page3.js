	App.populator('page3', function (page) {
		var gameListedTemp = page.querySelector('.game-static-info');
		var gameListedParent = gameListedTemp.parentNode;

		function setPage () {
			//gameListedParent.removeChild(gameListedTemp);
			gameListedTemp.parentNode.removeChild(gameListedTemp);
			var gameListing = gameStorage;
			gameListing.forEach( function(gameInfo) {
				console.log(gameInfo);
				createGame(gameInfo);
			});
		}

		function createGame (gameInfo) {
			var newGameListed = gameListedTemp.cloneNode(true);
			var img = page.createElement
			newGameListed.querySelector('.sender-profile-pic').src = gameInfo.senderProfilPic;
			newGameListed.querySelector('.sender-firstname').innerHTML = gameInfo.senderFirstName;

			new Clickable(newGameListed);
			newGameListed.addEventListener('click', function() {
				App.load('page3-1', gameInfo);
			}, false);

			gameListedParent.appendChild(newGameListed);
		}

		setPage();
	
	})

	App.populator('page3-1', function (page, gameData) {
		// console.log("you have gotten to the right page");
		// console.log("all the data you are suppose to have on this page");
		// console.log(gameData.gameID);
		// console.log(gameData.senderFirstName);
		// console.log(gameData.senderProfilPic);
		// console.log(gameData.gamePhotoURL);
		// console.log(gameData.itemPic);
		// console.log(gameData.itemPosition);
		//console.log(personReceiving);
		//console.log(gameDataArray);
		//gameData = gameDataArray[personReceiving];

		playPhotoScreen = page.querySelector("#receivedPhotoCanvas");
		ctxPlay = playPhotoScreen.getContext("2d");
		playPhotoScreen.style.position = 'absolute';
		playPhotoScreen.style.top = 20 + 'px';
		playPhotoScreen.style.left = 10 + 'px';
		playZoneSize = playPhotoScreen.height / 7;

		function drawPlayPhoto (canvasContent) {
			playImageObj = new Image();

			playImageObj.onload = function() {
				canvasContent.drawImage(playImageObj, 0, 0, 300, 300);
			};

			//canvasContent.drawImage(playImageObj, 0, 0, 300, 300);
			playImageObj.src = gameData.url;
			//playImageObj.src = gameData.gamePhotoURL;
		}


		function checkZone (canvasContent, touchedRow, touchedCol, touchedZoneSize) {
			// body...
			if (touchedRow == gameData.pos.x && touchedCol == gameData.pos.y) {
				console.log("you won!");
				var areaInPx = {
					x: touchedRow * touchedZoneSize,
					y: touchedCol * touchedZoneSize
				};
				itemImageObj = new Image();

				itemImageObj.onload = function() {
					canvasContent.drawImage(itemImageObj, 
						areaInPx.x, areaInPx.y, touchedZoneSize, touchedZoneSize);
				};
			
				itemImageObj.src = gameData.url;
				//itemImageObj.src = gameData.itemPic;
				App.dialog({
					title: "HEY",
					text: "SUP",
					okButton: "ok"
				}, function (success) {
					if (success) {
						App.load('home');
					}
				});
			} else {
				console.log("you missed!");
			}

		}

		drawPlayPhoto(ctxPlay);

		playPhotoScreen.addEventListener('touchstart', function(event) {
			event.preventDefault();                 

			touchX = event.touches[0].pageX - playPhotoScreen.offsetLeft;
			touchY = event.touches[0].pageY - playPhotoScreen.offsetTop;

			touchRow = Math.floor (touchX / playZoneSize); 
			touchCol = Math.floor (touchY / playZoneSize) - 1;
			
			checkZone(ctxPlay, touchRow, touchCol, playZoneSize);

		});
	
})