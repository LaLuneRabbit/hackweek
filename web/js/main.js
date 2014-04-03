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

		currentUser = user.username;

		userSelected = page.querySelector('#new-game-button');

		userSelected.addEventListener('touchstart', function(event) {
			console.log("sending to user!");

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
         					App.load("page2", user);
				        });
				    }
			});

		});

		/*
		startGame = page.querySelector('#start-game-button');
		startGame.addEventListener('touchstart', function(event) {
			console.log("testing fake game data and game play");

			var posTest = {
				x: 6,
				y: 6
			};

			var dataTest = {
					sender: currentUser,
			    	url: '/img/stickman.jpg',
			    	pos: posTest   	
			};

			var receiverTest = {
				userName: "receiver.qa",
				fullName: "test",
				firstName: "receiver",
				lastName: "qa"
				//pic:
				//thumbnail:
			};

			//gameStorage[receiverTest.userName] = dataTest;

			//console.log(dataTest.url);
			//console.log(gameStorage[receiverTest]);
			App.load('page3-1', dataTest);
			//App.load('page3-1', receiverTest.userName, gameStorage);

		});
		*/
	});



	App.populator('page0', function (page) {
		// body...
	})

	if (kik.message) {
		console.log('time to load page3');
    	App.load('page3');
	}


	// try {
	// 	//App.restore();
	// } catch (err) {
		App.load('intro');
	// }
})(App);

