
(function (App) {
	App.populator('intro', function (page) {
		//body
		$(page)
    		.find('#random')
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
	});

	App.populator('page3', function (page) {
		// body...
	})

	try {
		App.restore();
	} catch (err) {
		App.load('intro');
	}
})(App);
