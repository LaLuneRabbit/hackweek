var userName;
var userPic;


(function (App) {	

	App.populator('intro', function (page) {

		var enterGameButton = page.querySelector('#enter-game-button');
		enterGameButton.addEventListener('touchstart', function(event) {
			App.load('home');
		});
    	
	});

	App.populator('home', function (page, user) {

		currentUser = user.username;

		userSelected = page.querySelector('#new-game-button');

		userSelected.addEventListener('touchstart', function(event) {
			console.log("sending to user!");
			App.load("page0");

		});


	});



	// App.populator('page0', function (page) {
	// 	// body...
	// })


	// try {
	// 	//App.restore();
	// } catch (err) {
		App.load('intro');
	// }
})(App);

