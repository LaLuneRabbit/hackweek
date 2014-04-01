
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

	function canvasValue (canvasContent, setRow, setCol, setBlock, setBlockX, setBlockY) {
		this.canvasContent = canvasContent;
		this.setRow = setRow;
		this.setCol = setCol;
		this.setBlock = setBlock;
		this.setBlockX = setBlockX;	
        this.setBlockY = setBlockY;        
	}	

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
    canvasBase.canvasContent.drawImage(goalImageObj, positionX, positionY);
    };
    
    goalImageObj.src = "/img/Farm-Fresh_door.png";


}
	

	function drawBase(page) { 
		boardCanvas = page.querySelector('#testGameBoardCanvas');
		buttonCanvas = page.querySelector('#testButtonCanvas')
		goalCanvas = page.querySelector('#testGoalCanvas');
		makerCanvas = page.querySelector('#testInterfereCanvas');

		if (boardCanvas.getContext)
		{
			//game board
			ctxBoard = boardCanvas.getContext('2d');
			GAME_BLOCK_SIZE = (boardCanvas.height - 100) / GAME_NUMBER_OF_ROWS;
        	boardCanvasObj = 
				new canvasValue (ctxBoard, GAME_NUMBER_OF_ROWS, GAME_NUMBER_OF_COLS, GAME_BLOCK_SIZE, "null", "null");

			draw(boardCanvasObj);


			//arrow keys
			ctxButton = buttonCanvas.getContext('2d');
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

			//add interference pieces
			//drawMakerPieces();
		}
		else
		{
			aleart ("our browser does not support the HTML5 canvas tag.");
		}
	}
	
	drawBase(page);
})