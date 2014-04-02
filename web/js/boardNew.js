App.populator('page0', function (page) {

	function drawGrid (canvas) {
		console.log(canvas.setRow);
		console.log(canvas.setCol);

		var row;
		var col;

		for (row = 0; row < canvas.setRow; row++) {
			for (col = 0; col < canvas.setCol; col++) {
				canvas.canvasContent.strokeRect(
							row * canvas.setBlockX, 
		    				col * canvas.setBlockY, 
	    						canvas.setBlockX, 
		    					canvas.setBlockY); 
			}
		}

		canvas.canvasContent.lineWidth = 1;
	}

	function drawGoal (canvas) {
		var randomX  = Math.floor((Math.random() * canvas.setRow));
		var randomY = Math.floor((Math.random() * canvas.setCol));

		var positionX = randomX * canvas.setBlock;
		var positionY = randomY * canvas.setBlock;



		var goalImageObj = new Image();

		goalImageObj.onload = function() {
		    canvas.canvasContent.drawImage(goalImageObj, positionX, positionY, canvas.setBlockX, canvas.setBlockY);
	    };
    
   		goalImageObj.src = "/img/Farm-Fresh_door.png";

   		goalCanvasObj = 
			new goalValue (goalImageObj, positionX, positionY);

	}

	function drawUser (canvasContent, user) {
		if (user.positionX == 'null'){
			alert("please place your avatar on board before tapping on button.");
		}
		else {
			userImageObj = new Image();

			userImageObj.onload = function() {
				//will change to user_block_sie later; 
		    	ctxUser.drawImage(userImageObj, user.positionX, user.positionY, GAME_BLOCK_SIZE, GAME_BLOCK_SIZE);
		    };
		    
		    userImageObj.src = "/img/stickman.jpg";
		}
		
	}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	boardCanvas = page.querySelector('#testGameBoardCanvas');
	buttonCanvas = page.querySelector('#testButtonCanvas')
	goalCanvas = page.querySelector('#testGoalCanvas');
	makerCanvas = page.querySelector('#testInterfereCanvas');
	userCanvas = page.querySelector('#testUserCanvas');

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

	ctxBoard = boardCanvas.getContext('2d');
		boardCanvas.style.position = 'absolute';
		boardCanvas.style.top = 0 + 'px';
		boardCanvas.style.left = 0 + 'px';


	ctxGoal = goalCanvas.getContext('2d');
		goalCanvas.style.position = 'absolute';
		goalCanvas.style.top = 0 + 'px';
		goalCanvas.style.left = 0 + 'px';


	ctxUser = userCanvas.getContext('2d');
		userCanvas.style.position = 'absolute';
		userCanvas.style.top = 0 + 'px';
		userCanvas.style.left = 0 + 'px';

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	GAME_BLOCK_SIZE = (boardCanvas.height - 100) / GAME_NUMBER_OF_ROWS;
	GAME_BLOCK_SIZE_X  = (boardCanvas.height - 100) / GAME_NUMBER_OF_ROWS;
	GAME_BLOCK_SIZE_Y = boardCanvas.width / GAME_NUMBER_OF_COLS;

    boardCanvasObj = 
		new canvasValue (ctxBoard, GAME_NUMBER_OF_ROWS, GAME_NUMBER_OF_COLS, GAME_BLOCK_SIZE, GAME_BLOCK_SIZE_X, GAME_BLOCK_SIZE_Y);

	drawGrid(boardCanvasObj);


	GOAL_BLOCK_SIZE = (goalCanvas.height - 100) / GOAL_NUMBER_OF_ROWS;
	GOAL_BLOCK_SIZE_X  = (goalCanvas.height - 100) / GOAL_NUMBER_OF_ROWS;
	GOAL_BLOCK_SIZE_Y = goalCanvas.width / GOAL_NUMBER_OF_COLS;
	goalCanvasObj = 
		new canvasValue (ctxGoal, GOAL_NUMBER_OF_ROWS, GOAL_NUMBER_OF_COLS, GOAL_BLOCK_SIZE, GOAL_BLOCK_SIZE_X, GOAL_BLOCK_SIZE_Y);

	drawGoal(goalCanvasObj);

	

	//add user_block_size as well, using game_block_size for now
	//make a userCanvasObj as well

	currentUser = 
		new userGameValue ('null', 'null', TEMP_LIFE_VALUE, 'null');

	boardCanvas.addEventListener('touchstart', function(event) {
		console.log('HEY WHATS GOOD');
		event.preventDefault();                 

		touchX = event.touches[0].pageX - boardCanvas.offsetLeft;
		console.log(touchX);
		touchY = event.touches[0].pageY - boardCanvas.offsetTop;
		console.log(touchY);

		touchRow = Math.floor (touchY / GAME_BLOCK_SIZE_Y); 
		console.log(touchRow);
		touchCol = Math.floor (touchX / GAME_BLOCK_SIZE_X);
		console.log(touchCol);
	});

	setButton = page.querySelector('#submit-game');
			setButton.style.position = 'absolute';
			setButton.style.top = 400 + 'px';
			setButton.style.left = 130 + 'px';

			setButton.addEventListener('touchstart', function () {
				drawUser(ctxUser, currentUser);
			}); //do I need ;???

		leftButton = page.querySelector('#move-user-left');
			leftButton.style.position = 'absolute';
			leftButton.style.top = 430 + 'px';
			leftButton.style.left = 10 + 'px';
		downButton = page.querySelector('#move-user-down');
			downButton.style.position = 'absolute';
			downButton.style.top = 430 + 'px';
			downButton.style.left = 80 + 'px';
		upButton = page.querySelector('#move-user-up');
			upButton.style.position = 'absolute';
			upButton.style.top = 430 + 'px';
			upButton.style.left = 150 + 'px';
		rightButton = page.querySelector('#move-user-right');
			rightButton.style.position = 'absolute';
			rightButton.style.top = 430 + 'px';
			rightButton.style.left = 210 + 'px';

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

		


})

