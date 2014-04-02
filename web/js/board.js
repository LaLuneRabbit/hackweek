
function drawGoal () {
	// body...
}

function drawMakerPieces () {
	// body...
}

function drawSetup () {
	// when user tap start
	// draw userPiece onto #testUserCanvas
}

function drawUserMove () {
	// typing on button move user on #testUserCanvas
}






App.populator('page0', function (page) {
	var GAME_NUMBER_OF_ROWS = 7;
	var GAME_NUMBER_OF_COLS = 7;
	var GAME_BLOCK_SIZE;
	var ctxBoard;
	var boardCanvasObj;

	var BUTTON_NUMBER_OF_ROWS = 4; //why the heck is this flipped?
	var BUTTON_NUMBER_OF_COLS = 1;
	var BUTTON_BLOCK_SIZE_X;
	var BUTTON_BLOCK_SIZE_Y;
	var ctxButton;
	var buttonCanvasObj;

	var GOAL_NUMBER_OF_ROWS = 7;
	var GOAL_NUMBER_OF_COLS = 7;
	var GOAL_BLOCK_SIZE;
	var ctxGoal;
	var goalCanvasObj;

	var userProfile;
	var userImageObj;

	var positionX;
	var positionY;

	var touchX;
	var touchY;
	var touchRow;
	var touchCol;
	var updateRowValue;
	var updateColValue;

	//objects are listed here
	function canvasValue (canvasContent, setRow, setCol, setBlock, setBlockX, setBlockY) {
		this.canvasContent = canvasContent;
		this.setRow = setRow;
		this.setCol = setCol;
		this.setBlock = setBlock;
		this.setBlockX = setBlockX;	
        this.setBlockY = setBlockY;        
	}	

	//canvas data
	function canvasData (userPosition, goalPosition, piecesPosition, lifeCount,  ) {
		this.userPosition = userPosition;
		this.goalPosition = goalPosition;
		this.piecesPosition = piecesPosition;
		
	}

	function userValue (nameValue, positionX, positionY, lifeLevel, quantityLevel, sightLevel, speedLevel, carryLevel, rockLevel, holeLevel, plankLevel, lifeCount, itemsCarried) {
		this.nameValue = nameValue;
		this.positionX = positionX;
		this.positionY = positionY;

		this.lifeLevel = lifeLevel;
		this.quantityLevel = quantityLevel;

		this.sightLevel = sightLevel;
		this.speedLevel = speedLevel;
		this.carryLevel = carryLevel;

		this.rockLevel = rockLevel;
		this.holeLevel = holeLevel;
		this.plankLevel	= plankLevel;

		this.lifeCount = lifeCount;
		this.itemsCarried = itemsCarried;
	}
	///////////////////////////////////////////

	//goalValue obj
/*
	function drawMoveButton () {
		ctxButton = buttonCanvas.getContext('2d');


	}
*/

	function drawBlock(canvasBase, countRow, countBlock) {
        var colCounter;
        canvasBase.canvasContent.strokeRect(countRow * canvasBase.setBlock, 
	    	countBlock * canvasBase.setBlock, 
	    	canvasBase.setBlock, canvasBase.setBlock);
	    canvasBase.canvasContent.stroke();
    } 

	function drawRow (canvasBase, rowCounting) {
	    var blockCounter;
	    
		for (blockCounter = 0; blockCounter < canvasBase.setRow; blockCounter++) {
			drawBlock(canvasBase, rowCounting, blockCounter);
		}
	    
	}

	function draw (canvasBase) {
	    var rowCounter;
	    
		for (rowCounter = 0; rowCounter < canvasBase.setRow; rowCounter++ ) {
			drawRow(canvasBase, rowCounter);
		}

		canvasBase.canvasContent.lineWidth = 1;
        //ctxBoard.strokeStyle = 'black';
		canvasBase.canvasContent.strokeRect (0, 0, 
			canvasBase.setRow * canvasBase.setBlock, canvasBase.setCol * canvasBase.setBlock);

	}

	function drawGrid (canvasBase) {
		    var rowCounter;
	        var colCounter;
		    
			for (rowCounter = 0; rowCounter < canvasBase.setRow; rowCounter++ ) {
	            for (colCounter = 0; colCounter < canvasBase.setCol; colCounter++) {
	                canvasBase.canvasContent.strokeRect(rowCounter * canvasBase.setBlockX, 
		    	colCounter * canvasBase.setBlockY, 
		    	canvasBase.setBlockX, canvasBase.setBlockY);
		    canvasBase.canvasContent.stroke();            
	                
	            }
				
			}


			canvasBase.canvasContent.lineWidth = 1;
	        //ctxBoard.strokeStyle = 'red';
			//canvasBase.canvasContent.strokeRect (0, 0, 
			//	canvasBase.setRow * canvasBase.setBlock, canvasBase.setCol * canvasBase.setBlock);
	}

	function drawGoal (canvasBase) {
		var randomX  = Math.floor((Math.random() * canvasBase.setRow));
		var randomY = Math.floor((Math.random() * canvasBase.setCol));

		var positionX = randomX * canvasBase.setBlock;
		var positionY = randomY * canvasBase.setBlock;

		var goalImageObj = new Image();

		goalImageObj.onload = function() {
	    canvasBase.canvasContent.drawImage(goalImageObj, positionX, positionY, GAME_BLOCK_SIZE, GAME_BLOCK_SIZE);
	    };
	    
	    goalImageObj.src = "/img/Farm-Fresh_door.png";

	}

	function moveUp (moveObject) {
		// body...
		//if not at the edge of the map
		//currentPostionY + (userSpeed * setBlock)
	}

	function moveDown (moveObject) {
		// body...
		//if not at the edge of the map
		//currentPostionY - (userSpeed * setBlock)
	}
/*
	function moveRight () {
		// body...
		//if not at the edge of the map
		//currentPostionX + (userSpeed * setBlock)
		userImageObj.onload = function() {
		    	ctxUser.drawImage(userImageObj, 0, 0, GAME_BLOCK_SIZE * 2, GAME_BLOCK_SIZE);
		};
	}
*/
	function moveLeft (moveObject) {
		// body...
		//if not at the edge of the map
		//currentPostionX - (userSpeed * setBlock)

	}
/*
	function buttonChose (cordiX, cordiY) {
		// body...
		var selectedButton;

		var 


		return selectedButton;
	}
*/
	function moveUser (e) {
		// body...
		//use translation...nvm
/*
		touchX = e.pageX - buttonCanvas.offsetLeft;
		touchY = e.pageY - buttonCanvas.offsetTop;
		//alert("X = " + touchX + "Y = " + touchY);
		//console.log(touchX);
		//console.log(touchY);

		touchRow = Math.floor (touchY / buttonCanvasObj.setBlockY); 
		touchCol = Math.floor (touchX / buttonCanvasObj.setBlockX);

		//check which button user is tapping on
		//var buttonSelection =  buttonChose(touchX, touchY);

		if (touchRow > -1 ) {
			//moveRight();
			userImageObj.onload = function() {
		    	ctxUser.drawImage(userImageObj, GAME_BLOCK_SIZE, 0, GAME_BLOCK_SIZE, GAME_BLOCK_SIZE);
			};
		}
		/*
		else if (touchRow == 1) {
			moveDown(userBase);
		}
		else if (touchRow == 2) {
			moveUp(userBase);
		}
		else {
			moveRight(userBase);
		}
		*/
	}
	

	function drawBase(page) { 
		boardCanvas = page.querySelector('#testGameBoardCanvas');
		buttonCanvas = page.querySelector('#testButtonCanvas')
		goalCanvas = page.querySelector('#testGoalCanvas');
		makerCanvas = page.querySelector('#testInterfereCanvas');
		userCanvas = page.querySelector('#testUserCanvas');

		if (boardCanvas.getContext)
		{
			//game board
			ctxBoard = boardCanvas.getContext('2d');
			GAME_BLOCK_SIZE = (boardCanvas.height - 100) / GAME_NUMBER_OF_ROWS;
        	boardCanvasObj = 
				new canvasValue (ctxBoard, GAME_NUMBER_OF_ROWS, GAME_NUMBER_OF_COLS, GAME_BLOCK_SIZE, "null", "null");

			draw(boardCanvasObj);

			//will make a new function later, just for testing purpose right now
			ctxUser = userCanvas.getContext('2d');
			userCanvas.style.position = 'absolute';
			userCanvas.style.top = 0+ 'px';
   			userCanvas.style.left = 0 + 'px';
			userImageObj = new Image();

			userImageObj.onload = function() {
		    	ctxUser.drawImage(userImageObj, 0, 0, GAME_BLOCK_SIZE, GAME_BLOCK_SIZE);
		    };
		    
		    userImageObj.src = "/img/stickman.jpg";

		    userProfile =
		    	new userValue (userImageObj, 0, 0, 1, 1, 1);
		    /////////////////////////////////////////////////


			//arrow keys
			ctxButton = buttonCanvas.getContext('2d');
			//buttonCanvas.addEventListener('click', moveUser, false);
			buttonCanvas.style.position = 'absolute';
			buttonCanvas.style.top = 350 + 'px';
   			buttonCanvas.style.left = 10 + 'px';

		    BUTTON_BLOCK_SIZE_X = buttonCanvas.width / BUTTON_NUMBER_OF_ROWS;
			BUTTON_BLOCK_SIZE_Y = buttonCanvas.height / BUTTON_NUMBER_OF_COLS;
		    buttonCanvasObj = 
				new canvasValue (ctxButton, BUTTON_NUMBER_OF_ROWS, BUTTON_NUMBER_OF_COLS, "null", BUTTON_BLOCK_SIZE_X, BUTTON_BLOCK_SIZE_Y);
			drawGrid(buttonCanvasObj);

			//icon user must reach
			ctxGoal = goalCanvas.getContext('2d');
			GOAL_BLOCK_SIZE = (goalCanvas.height - 100) / GOAL_NUMBER_OF_ROWS;
			goalCanvasObj =
				new canvasValue (ctxGoal, GOAL_NUMBER_OF_ROWS, GOAL_NUMBER_OF_COLS, GOAL_BLOCK_SIZE, "null", "null");
			drawGoal(goalCanvasObj);

		//////////////////////
				buttonCanvas.addEventListener('touchstart', function(event) {
				console.log('HEY WHATS GOOD');
            	event.preventDefault();                 
            
            	touchX = event.touches[0].pageX - buttonCanvas.offsetLeft;
            	console.log(touchX);
            	touchY = event.touches[0].pageY - buttonCanvas.offsetTop;
            	console.log(touchY);

            	touchRow = Math.floor (touchY / buttonCanvasObj.setBlockY); 
            	console.log(touchRow);
				touchCol = Math.floor (touchX / buttonCanvasObj.setBlockX);
				console.log(touchCol);

				var oldX;
				var oldY;

				if (touchCol == 0){ //left
					console.log('left');
					updateRowValue = userProfile.positionX - GAME_BLOCK_SIZE;

					oldX = userProfile.positionX;
					oldY = userProfile.positionY;

					//userCanvas.clear();

					ctxUser.clearRect(oldX, oldY, GAME_BLOCK_SIZE, GAME_BLOCK_SIZE);
			   		ctxUser.drawImage(userImageObj, 
			   					updateRowValue, oldY, GAME_BLOCK_SIZE, GAME_BLOCK_SIZE);
			   		userProfile.positionX = updateRowValue;
				}
				else if (touchCol == 1){ //down
					console.log('down');
					updateColValue = userProfile.positionY + GAME_BLOCK_SIZE;

					oldX = userProfile.positionX;
					oldY = userProfile.positionY;

					//userCanvas.clear();

					ctxUser.clearRect(oldX, oldY, GAME_BLOCK_SIZE, GAME_BLOCK_SIZE);
			   		ctxUser.drawImage(userImageObj, 
			   						oldX, updateColValue, GAME_BLOCK_SIZE, GAME_BLOCK_SIZE);
			   		userProfile.positionY = updateColValue;
				}
				else if (touchCol == 2) { //up
					console.log('up');
					updateColValue = userProfile.positionY - GAME_BLOCK_SIZE;

					oldX = userProfile.positionX;
					oldY = userProfile.positionY;

					//userCanvas.clear();

					ctxUser.clearRect(oldX, oldY, GAME_BLOCK_SIZE, GAME_BLOCK_SIZE);
			   		ctxUser.drawImage(userImageObj, 
			   						oldX, updateColValue, GAME_BLOCK_SIZE, GAME_BLOCK_SIZE);
			   		userProfile.positionY = updateColValue;
				}
				else if (touchCol == 3) {  
					console.log('right');                 //right
					updateRowValue = userProfile.positionX + GAME_BLOCK_SIZE;

					oldX = userProfile.positionX;
					oldY = userProfile.positionY;

					//userCanvas.clear();

					ctxUser.clearRect(oldX, oldY, GAME_BLOCK_SIZE, GAME_BLOCK_SIZE);
			   		ctxUser.drawImage(userImageObj, 
			   						updateRowValue, oldY, GAME_BLOCK_SIZE, GAME_BLOCK_SIZE);
			   		console.log(updateRowValue);
			   		console.log(oldY);
			   		userProfile.positionX = updateRowValue;
				}

        	});

		    //add interference pieces
			//drawMakerPieces();

		    //moveUser(userProfile);

			
		}
		else
		{
			alert ("our browser does not support the HTML5 canvas tag.");
		}
	}
	
	drawBase(page);
})