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
/*
		console.log(page);
		page.querySelector('.text').innerHTML = user.username;
		userName = user.username;
		userPic = user.thumbnail;

/*
		currentUser	 = 
			new userBaseValue (user.username, user.thumbnail, 
						DAILY_TICKET_COUNT, PAID_TICKET_COUNT, 
						DAILY_MAP_COUNT, PAID_MAP_COUNT, 
						BASE_SKILL_LEVEL, BASE_SKILL_LEVEL, 
						BASE_SKILL_LEVEL, BASE_SKILL_LEVEL, BASE_SKILL_LEVEL, 
						BASE_SKILL_LEVEL, BASE_SKILL_LEVEL, BASE_SKILL_LEVEL);
*/
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


	App.populator('page3', function (page) {
	
	})

	App.populator('page0', function (page) {
		// body...
	})

	// try {
	// 	//App.restore();
	// } catch (err) {
		App.load('intro');
	// }
})(App);

