App.populator('page2_1', function (page) {
	var c_canvas = page.querySelector("#gameBoardCanvas");
	var context = c_canvas.getContext("2d");

	var c=page.querySelector("#gameUICanvas");
	var ctx=c.getContext("2d");

	function drawBoard(){
		var maxValueX = 256
		var maxValueY = 306
		var minValueX = 10.5
		var minValueY = 60.5

		for (var x = minValueX; x < maxValueX; x += 35) {
		  context.moveTo(x, minValueY);
		  context.lineTo(x, maxValueY);
		}

		for (var y = minValueY; y < maxValueY; y += 35) {
		  context.moveTo(minValueX, y);
		  context.lineTo(maxValueX, y);
		}


		context.strokeStyle = "black";
		context.stroke();
	}

	drawBoard();
	
	ctx.rect(20,20,150,100);
	ctx.stroke();

})

//function handleClick(e) {}



// snap to grid

/*canvas.on('object:moving', function(options) { 
  options.target.set({
    left: Math.round(options.target.left / grid) * grid,
    top: Math.round(options.target.top / grid) * grid
  });
});*/