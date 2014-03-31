
(function (App) {
	App.populator('intro', function (page) {
		//body
		$(page)
    		.find('.app-button.link')
    		.on('click', function () {
	      		kik.getUser(function (user) {
				    if ( !user ) {
				        App.load('intro');
				    } else {
				        typeof user.username;  // 'string'
				        typeof user.fullName;  // 'string'
				        typeof user.firstName; // 'string'
				        typeof user.lastName;  // 'string'
				        typeof user.pic;       // 'string'
				        typeof user.thumbnail; // 'string'
				    }
				});
    	});
	});

	App.populator('home', function (page) {
		// put stuff here

	});

	App.populator('page2', function (page) {
		// put stuff here
		$(page)
    		.find('.app-button.userPick')
    		.on('click', function () {
	      		kik.pickUsers(function (users) {
				    if ( !users ) {
				        App.load('page2');
				    } else {
				        users.forEach(function (user) {
				            typeof user.username;  // 'string'
				            typeof user.fullName;  // 'string'
				            typeof user.firstName; // 'string'
				            typeof user.lastName;  // 'string'
				            typeof user.pic;       // 'string'
				            typeof user.thumbnail; // 'string'
				        });
				    }
				});
    	});
	});

	App.populator('page2_1', function (page) {
		// body...
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
