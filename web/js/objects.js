	
	function canvasValue (canvasContent, setRow, setCol, setBlock, setBlockX, setBlockY) {
		this.canvasContent = canvasContent;
		this.setRow = setRow;
		this.setCol = setCol;
		this.setBlock = setBlock;
		this.setBlockX = setBlockX;	
        this.setBlockY = setBlockY;        
	}	

/*
	function makerPieceList (...) {
		// body...
		//how do I do this one
	}

	function makerListing (...) {
		// body...
	}
*/

	function goalValue (goalPic, goalPositionX, goalPositionY) {
		this.goalPic = goalPic;
		this.goalPositionX = goalPositionX;
		this.goalPositionY = goalPositionY;
	}

	function userGameValue (positionX, positionY, lifeCount, itemsCarried) {
		this.positionX = positionX;
		this.positionY = positionY;		
		this.lifeCount = lifeCount;
		this.itemsCarried = itemsCarried;
	}

	function userBaseValue (nameValue, namePic, 
						ticketHeld, ticketPaid, 
						mapHeld, mapPaid, 
						lifeLevel, quantityLevel, 
						sightLevel, speedLevel, carryLevel, 
						rockLevel, holeLevel, plankLevel) {

		this.nameValue = nameValue;
		this.namePic = namePic;

		this.ticketHeld = ticketHeld;
		this.ticketPaid = ticketPaid;

		this.mapHeld = mapHeld;
		this.mapPaid = mapPaid;

		this.lifeLevel = lifeLevel;
		this.quantityLevel = quantityLevel;

		this.sightLevel = sightLevel;
		this.speedLevel = speedLevel;
		this.carryLevel = carryLevel;

		this.rockLevel = rockLevel;
		this.holeLevel = holeLevel;
		this.plankLevel	= plankLevel;
	}


	function canvasData (gameID, userPosition, goalPosition, piecesPosition, lifeCount, itemHeld) {
		this.gameID = gameID;
		this.userPosition = userPosition;
		this.goalPosition = goalPosition;
		this.piecesPosition = piecesPosition;

		this.lifeCount = lifeCount;
		this.itemHeld = itemHeld;
	}

