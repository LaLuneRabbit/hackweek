(function (App) {
	App.populator('intro', function (page) {
		//body
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
