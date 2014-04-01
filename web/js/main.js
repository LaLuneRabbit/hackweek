var userName;
var userPic;


(function (App) {

	App.populator('intro', function (page) {
		//body
		$(page)
    		.find('.app-button.link')
    		.on('click', function () {
    			if(kik.getUser){
    				kik.getUser(function (user) {
				    if ( !user ) {
				    	console.log("denied");
				    	//TODO
				    } else {
				    	App.load('home', user);
				        typeof user.username;  // 'string'
				        typeof user.fullName;  // 'string'
				        typeof user.firstName; // 'string'
				        typeof user.lastName;  // 'string'
				        typeof user.pic;       // 'string'
				        typeof user.thumbnail; // 'string'
				    }
				});
    			} else {
    				App.load('home', {
    					username: 'test',
    					fullName: 'test1234',
    					firstName: 'test1234 5678',
    					lastName: '5678',
    					pic: null,
    					thumbnail: null
    				})
    			}
	      		
    	});
	});

	App.populator('home', function (page, user) {
		console.log(page);
		page.querySelector('.text').innerHTML = user.username;
		userName = user.username;
		userPic = user.thumbnail;

	});

	App.populator('page2', function (page) {
		// put stuff here
		$(page)
    		.find('.app-button.userPick')
    		.on('click', function () {
	      		kik.pickUsers({
				    minResults : 1 , // number >= 0
				    maxResults : 1   // number >  0
				}, function (users) {
				    if ( !users ) {
				        console.log("denied");
				    	//TODO
				    } else {
				        users.forEach(function (user) {
				            typeof user.username;  // 'string'
				            typeof user.fullName;  // 'string'
				            typeof user.firstName; // 'string'
				            typeof user.lastName;  // 'string'
				            typeof user.pic;       // 'string'
				            typeof user.thumbnail; // 'string'
				            /*kik.send(user, {
								title : 'zodiac' ,
								text  : '" + userName + " invite you to play zodiac',
							});*/
				            App.load('page2_1', user);
				        });
				    }
				});
    	});
	});

	App.populator('page2_1', function (page, user) {
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

		//text starting here
		var opponentName = user.username;
		var opponentPic = user.thumbnail;;

		context.fillText(opponentName, 248, 43);
		context.fillText(userName, 58, 165);

		var imageObj = new Image();
		imageObj.onload = function() {
        context.drawImage(imageObj, 69, 50);
      	};
      	imageObj.src = opponentPic;

      	var imageObj2 = new Image();
      	imageObj2.onload = function() {
        context.drawImage(imageObj2, 100, 200);
      	};
      	imageObj2.src = userPic;

	})

	App.populator('page3', function (page) {
		// body...
	})

	try {
		App.restore();
	} catch (err) {
		App.load('intro');
	}
})(App);

