	App.populator('page3', function (page) {
		



	
	})

	App.populator('page3-1', function (page, gameData) {

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
			
				itemImageObj.src = '/img/stickman.jpg';
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