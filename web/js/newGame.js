App.populator('page0', function (page, photoURL) {
		kik.browser.setOrientationLock('portrait');
		points.debug = true;

		// var goalPosValue = {
		// 	x : 1,
		// 	y : 1
		// };

		// var bombPosValue = {
		// 	x : 2,
		// 	y : 2
		// };

		// var kikPointsPosValue = {
		// 	x : 3,
		// 	y : 3
		// };

		var goalPosValue;
		var bombPosValue;
		var kikPointsPosValue;
		var playImageObj;

		var randomPosValue;
		var ctxPlay;

		//have an array that store all the image link

		function removeShovel () {
			// when tapping on canvas
			// change innerHTML to x - 1
			var old = page.querySelector('#shovel-count-value').innerHTML;
			page.querySelector('#shovel-count-value').innerHTML = Number(old) - 1;
		}

		function haveShovel () {
			// if innerHTML is 0 or less (somehow)
			// then show App.dialo
			// need to by shovel
			// return yes or no
			var currentShovelAmount = page.querySelector('#shovel-count-value').innerHTML;
			if (currentShovelAmount > 0) {
				removeShovel();
				checkZone(ctxPlay, touchRow, touchCol, playZoneSize);
			} else {
				App.dialog({
					title: "Missing Shovel",
					text: "You are not thinking about digging with your hands are you?",
					okButton: "Go and get more shovels!"
				});
			}

		}

		function randomPos () {
			// generate random Row and Col
			randomPosValue = {
					x : Math.floor((Math.random()*7)+0),
					y : Math.floor((Math.random()*7)+0)
			};
		}

		function resetKikPointsPos () {
			// body...
			randomPos();
			kikPointsPosValue = {
				x : randomPosValue.x, 
				y : randomPosValue.y
			};

		}

		function resetBomb () {
			// change bomb location
			// called in resetGoalPos
			randomPos();
			bombPosValue = {
				x : randomPosValue.x, 
				y : randomPosValue.y
			};
		}

		function resetGoal () {
			// after tapping a bomb
			// show App.dialog
			//all item.Pos reset
			//I guess I can use this to set Goal the first time???
	
			randomPos();
			goalPosValue = {
				x : randomPosValue.x,
				y : randomPosValue.y
			};

		}


		function bombFound (tappedPosition) {
			// take in tapped position
			// check if row and col matches bomb location
			// if true
			// then call resetGoalPos and resetBomb

			App.dialog({
					title: "Well...",
					text: "I guess you will have to START OVER...",
					okButton: "No Problem"
				});
			ctxPlay.clearRect(0,0,300,300);
			ctxPlay.drawImage(playImageObj, 0, 0, 300, 300);
			setupPos(); 
		}

		function kikPointsFound (tappedPosition) {
			//reward kik points if found
			App.dialog({
					title: "Wow!",
					text: "It's your LUCKY DAY...too bad there is no points to give.",
					okButton: "Let's keep going"
				});

			resetKikPointsPos();

		}

		function goalFound () {
			// if found 
			// call App.dialog
			// bring user back to home app.load
			App.dialog({
					title: "...",
					text: "You actually WON!",
					okButton: "More Treasure Hunt"
				});
			shuffleGamePhoto();
			playImageObj.onload = function() {
				ctxPlay.drawImage(playImageObj, 0, 0, 300, 300);
			};
 
			//canvasContent.drawImage(playImageObj, 0, 0, 300, 300);
			playImageObj.src = currentPhotoURL;
			var old = page.querySelector('#shovel-count-value').innerHTML;
			page.querySelector('#shovel-count-value').innerHTML = Number(old) + 15;
			setupPos();

		}

		// function getImage (...) {
		// 	//get a random index
		// 	//take from imageArray
		// 	//return imageURL
		// }


		function setupPos () {
			// body...
			resetBomb();
			resetGoal();
			resetKikPointsPos();

		}

		function buyShovel () {
		    var id   = kik.utils.random.uuid(),
		        cost = 25,
		        sku  = 'com.herokuapp.treasure-hunts.shovel';

		    points.transfer(id, 25, sku, function (transaction) {
				    if (transaction) {
					    var old = page.querySelector('#shovel-count-value').innerHTML;
						page.querySelector('#shovel-count-value').innerHTML = Number(old) + 5;

				    } else {
				      // NOPE NO POINTS FOR YOU
				    }
			});
		 }

		// selectionScreen = page.querySelector('#selectionCanvas');
		// ctxSelection = selectionScreen.getContext('2d');

		playPhotoScreen = page.querySelector("#receivedPhotoCanvas");
		ctxPlay = playPhotoScreen.getContext("2d");
		//playPhotoScreen.style.position = 'absolute';
		//playPhotoScreen.style.top = 20 + 'px';
		//playPhotoScreen.style.left = 10 + 'px';
		playZoneSize = playPhotoScreen.height / 7;

		setupPos();
		console.log(goalPosValue);
		console.log(kikPointsPosValue);
		console.log(bombPosValue);



		var $addShovelButton = page.querySelector('#add-shovel');
			$addShovelButton.addEventListener('touchstart', function(event){
				event.preventDefault();  
				//ADD KIK POINTS TRANSACTIONS HERE!!!!!!!!!
				buyShovel();
				
		});


		function drawPlayPhoto (canvasContent) {
			console.log("photo url is");
			console.log(currentPhotoURL);

			playImageObj = new Image();

			playImageObj.onload = function() {
				canvasContent.drawImage(playImageObj, 0, 0, 300, 300);
			};

			//canvasContent.drawImage(playImageObj, 0, 0, 300, 300);
			playImageObj.src = currentPhotoURL; //grab from storage later
			//playImageObj.src = gameData.gamePhotoURL;
		}


		function checkZone (canvasContent, touchedRow, touchedCol, touchedZoneSize) {
			// body...
			event.preventDefault();

			var selectedValue = {
				x : touchedRow,
				y : touchedCol
			};

			console.log(selectedValue.x);
			console.log(selectedValue.y);

			if (selectedValue.x == bombPosValue.x && selectedValue.y == bombPosValue.y) {
				//bombed
				bombFound();
			} 
			else if (selectedValue.x == goalPosValue.x && selectedValue.y == goalPosValue.y){
				//goal found
				goalFound();
			} 
			else if (selectedValue.x == kikPointsPosValue.x && selectedValue.y == kikPointsPosValue.y){
				//found Kik points
				console.log("got kik points");
				kikPointsFound();
			} else {
				//draw in the square
				var itemImageObj = new Image();

				itemImageObj.onload = function() {
					canvasContent.drawImage(itemImageObj, 
						selectedValue.x * playZoneSize, 
						selectedValue.y * playZoneSize, 
						playZoneSize, playZoneSize);
				};
			
				itemImageObj.src = '/img/dog-digging.jpg';
			}

	// 	var areaInPx = {
			// 		x: touchedRow * touchedZoneSize,
			// 		y: touchedCol * touchedZoneSize
			// 	};
			// 	itemImageObj = new Image();

			// 	itemImageObj.onload = function() {
			// 		canvasContent.drawImage(itemImageObj, 
			// 			areaInPx.x, areaInPx.y, touchedZoneSize, touchedZoneSize);
			// 	};
			
			// 	itemImageObj.src = gameData.url;


		}

		drawPlayPhoto(ctxPlay);

		playPhotoScreen.addEventListener('touchstart', function(event) {
			event.preventDefault();                 

			touchX = event.touches[0].pageX - playPhotoScreen.offsetLeft;
			touchY = event.touches[0].pageY - playPhotoScreen.offsetTop;

			touchRow = Math.floor (touchX / playZoneSize); 
			touchCol = Math.floor (touchY / playZoneSize) - 1;

			console.log(touchRow);
			console.log(touchCol);

			console.log(haveShovel);
			haveShovel();		

		});

		//if #quit-game is tapped
		//App.dialog I told you so!
		//return user to homepage
		var quitGameButton = page.querySelector('#quit-game');
		quitGameButton.addEventListener('touchstart', function(event) {
			event.preventDefault();
			App.dialog({
					title: "Too Bad",
					text: "Why No Treasure???",
					okButton: "Bankrupt!"
				}, function (success) {
					if (success) {
						shuffleGamePhoto();
						App.back(function () {
						  // back to home
						  // page2 destructor has been called
						});
					}
				});
		});


})