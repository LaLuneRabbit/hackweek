App.populator('page2', function (page, receiver) {

	function oldPostion (
		positionX, positionY) {
		// body...
		this.positionX = positionX;
		this.positionY = positionY;
	}




	function drawZone (canvasContent, row, col, blockSize, zonePrev) {
		// square zone are drawn here
		console.log("working!");
		//canvasContent.fillText(col, row * blockSize + 10, col * blockSize);

		canvasContent.strokeRect(
			row * blockSize, 
			col * blockSize, 
				blockSize, 
				blockSize);

		if (zonePrev.positionX == "null") {
			//canvasContent.fillText(col, row * blockSize + 10, col * blockSize);
			canvasContent.strokeRect(
				row * blockSize, 
				col * blockSize, 
					blockSize, 
					blockSize);
			//update oldPosition
			zonePrev.positionX = row * blockSize;
			zonePrev.positionY = col * blockSize;

		} else {
			canvasContent.clearRect(zonePrev.positionX - 5, zonePrev.positionY - 5, blockSize + 10, blockSize + 10);
			//canvasContent.fillText(col, row * blockSize + 10, col * blockSize);
			canvasContent.strokeRect(
				row * blockSize, 
				col * blockSize, 
					blockSize, 
					blockSize);

			//update oldPosition
			zonePrev.positionX = row * blockSize;
			zonePrev.positionY = col * blockSize;

		}
	}

	photoOnScreen = page.querySelector("#photoCanvas");
	ctxPhoto = photoOnScreen.getContext("2d");
	photoOnScreen.style.position = 'absolute';
	photoOnScreen.style.top = 20 + 'px';
	photoOnScreen.style.left = 10 + 'px';

	var baseImageObj = new Image();

	baseImageObj.onload = function() {
		ctxPhoto.drawImage(baseImageObj, 0, 0, 300, 300);
	};

	baseImageObj.src = "/img/icon.png";
    
  	/*
   	kik.photo.get(function (photos) {
		    if ( !photos ) {
		        // action cancelled by user
		    } else {
		        baseImageObj.src = photos[0];
		    }
	});
	*/

	zoneOnScreen = page.querySelector("#zoneCanvas");
	ctxZone = zoneOnScreen.getContext("2d");
	zoneOnScreen.style.position = 'absolute';
	zoneOnScreen.style.top = 20 + 'px';
	zoneOnScreen.style.left = 10 + 'px';


	selectionScreen = page.querySelector("#selectionCanvas");
	ctxSelection = selectionScreen.getContext("2d");
	selectionScreen.style.position = 'absolute';
	selectionScreen.style.top = 20 + 'px';
	selectionScreen.style.left = 10 + 'px';

	zoneSize = selectionScreen.height / 7;
	zoneOld = 
		new oldPostion("null", "null");

	selectionScreen.addEventListener('touchstart', function(event) {
		//console.log('HEY WHATS GOOD');
		event.preventDefault();                 

		touchX = event.touches[0].pageX - selectionScreen.offsetLeft;
		//console.log(touchX);
		///console.log(boardCanvas.offsetLeft);
		
		touchY = event.touches[0].pageY - selectionScreen.offsetTop;
		//console.log(touchY);

		touchRow = Math.floor (touchX / zoneSize); 
		console.log(touchX);
		console.log(zoneSize);
		console.log(touchRow);

		touchCol = Math.floor (touchY / zoneSize) - 1;
		console.log(touchY);
		console.log(zoneSize);
		console.log(touchCol);

		drawZone(ctxZone, touchRow, touchCol, zoneSize, zoneOld);

	});

	
	addPicButton = page.querySelector("#photoAdd");
		addPicButton.style.position = 'absolute';
		addPicButton.style.top = 350 + 'px';
		addPicButton.style.left = 55 + 'px';

		addPicButton.addEventListener('touchstart', function(event) {
			console.log("yes, I reach here!");

			kik.photo.get(function (photos) {
		    		if ( !photos ) {
					        // action cancelled by user
					    } else {
					    	baseImageObj.src = photos[0];
					    	console.log(baseImageObj.src);
					        basemageObj.onload = function() {
								ctxPhoto.drawImage(baseImageObj, 0, 0, 300, 300);
							};
					    }
				});
			
		});


	picConfirmButton = page.querySelector('#photoConfirm');
		picConfirmButton.style.position = 'absolute';
		picConfirmButton.style.top = 350 + 'px';
		picConfirmButton.style.left = 190 + 'px';

		picConfirmButton.addEventListener('touchstart', function(event) {
			alert("I got to here!");

			console.log("I got to here!");
			console.log(receiver);

			//take points when user confirm here!!!
			var pos = {
				x: zoneOld.positionX,
				y: zoneOld.positionY
			};
			kik.send(receiver.username, {
			    title : 'hi' ,
			    pic   : '/img/stickman.jpg' , // optional
			    text  : 'this is the text body'  ,
			    noForward : true ,
			    /*data      : {
			    	url: baseImageObj.src,
			    	pos: pos,    	
			    }  */      

			});
		});

   		// body...
   
})
