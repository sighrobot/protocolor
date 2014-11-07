app.factory('Page', function() {
	var title = 'PROTOCOLOR';
	return {
		title: function() { return title; },
		setTitle: function(newTitle) { title = newTitle }
	};
});