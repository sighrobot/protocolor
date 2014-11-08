function TitleCtrl($scope, Page) {
	$scope.Page = Page;
}

function dim(w) {
	return ((w.innerWidth-17)/16);
}

app.controller('IPCtrl', function ($rootScope, $scope, $routeParams, Page) {

	$rootScope.ipString = '0.x.x.x - 255.x.x.x';
	Page.setTitle($rootScope.ipString);

	$scope.drawIPs = function() {
		var el = document.getElementById('box');
		var dimString = dim(window) + 'px';
		
  		for (i = 0; i < 256; i++) {
  			var div = document.createElement('div');
  			div.className = 'ip';
  			div.style.width = dimString;
  			div.style.height = dimString;
  			div.style.background = 'rgba(' + i + ', 0, 0, 1)';

  			var a = document.createElement('a');
  			a.className = 'ip-link';
  			a.style.color = 'rgba(' + i + ', 0, 0, 1)';
  			a.href = '#/'+i;
  			a.innerHTML = i;

  			div.appendChild(a);
			el.appendChild(div);
  		}
	}
});

app.controller('IP1Ctrl', function ($rootScope, $scope, $routeParams, Page) {

	$scope.n1 = $routeParams.n1;
	
	$rootScope.ipString = $scope.n1 + '.0.x.x - ' + $scope.n1 + '.255.x.x';
	Page.setTitle($rootScope.ipString);

	$scope.drawIPs = function() {
		var el = document.getElementById('box');
		var dimString = dim(window) + 'px';

  		for (i = 0; i < 256; i++) {
  			var div = document.createElement('div');
  			div.className = 'ip';
  			div.style.width = dimString;
  			div.style.height = dimString;
  			div.style.background = 'rgba(' + $scope.n1 + ',' + i +', 0, 1)';

  			var a = document.createElement('a');
  			a.className = 'ip-link';
  			a.style.color = 'rgba(' + $scope.n1 + ',' + i +', 0, 1)';
  			a.href = '#/'+ $scope.n1 + '/'+ i;
  			a.innerHTML = i;

  			div.appendChild(a);
			el.appendChild(div);

  		}
	}


});

app.controller('IP2Ctrl', function ($rootScope, $scope, $routeParams, Page) {

	$scope.n1 = $routeParams.n1;
	$scope.n2 = $routeParams.n2;
	
	$rootScope.ipString = $scope.n1 + '.' + $scope.n2 + '.0.x - ' + $scope.n1 + '.' + $scope.n2 + '.255.x';
	Page.setTitle($rootScope.ipString);

	$scope.drawIPs = function() {
		var el = document.getElementById('box');
		var dimString = dim(window) + 'px';

  		for (i = 0; i < 256; i++) {
  			var div = document.createElement('div');
  			div.className = 'ip';
  			div.style.width = dimString;
  			div.style.height = dimString;
  			div.style.background = 'rgba(' + $scope.n1 + ',' + $scope.n2 +','+ i +', 1)';

  			var a = document.createElement('a');
  			a.className = 'ip-link';
  			a.style.color = 'rgba(' + $scope.n1 + ',' + $scope.n2 +','+ i +', 1)';
  			a.href = '#/'+ $scope.n1 + '/'+ $scope.n2 + '/' + i;
  			a.innerHTML = i;

  			div.appendChild(a);
			el.appendChild(div);

  		}
	}


});

app.controller('IP3Ctrl', function ($rootScope, $scope, $routeParams, Page) {

	$scope.n1 = $routeParams.n1;
	$scope.n2 = $routeParams.n2;
	$scope.n3 = $routeParams.n3;
	
	$rootScope.ipString = $scope.n1 + '.' + $scope.n2 + '.' + $scope.n3 + '.0 - ' + $scope.n1 + '.' + $scope.n2 + '.' + $scope.n3 + '.255';
	Page.setTitle($rootScope.ipString);

	$scope.drawIPs = function() {
		var el = document.getElementById('box');
		var dimString = dim(window) + 'px';

  		for (i = 0; i < 256; i++) {
  			var div = document.createElement('div');
  			div.className = 'ip';
  			div.style.width = dimString;
  			div.style.height = dimString;
  			div.style.background = 'rgba(' + $scope.n1 + ',' + $scope.n2 +','+ $scope.n3 +', '+(1-i/255)+')';

  			var a = document.createElement('a');
  			a.className = 'ip-link';
  			a.style.color = 'rgba(' + $scope.n1 + ',' + $scope.n2 +','+ $scope.n3 +', '+(1-i/255)+')';
  			a.href = '#/'+ $scope.n1 + '/'+ $scope.n2 + '/' + $scope.n3 + '/' + i;
  			a.innerHTML = i;

  			div.appendChild(a);
			el.appendChild(div);

  		}
	}

	


});

app.controller('IP4Ctrl', function ($rootScope, $scope, $routeParams, Page) {

	$scope.n1 = $routeParams.n1;
	$scope.n2 = $routeParams.n2;
	$scope.n3 = $routeParams.n3;
	$scope.n4 = $routeParams.n4;
	
	$rootScope.ipString = $scope.n1 + '.' + $scope.n2 + '.' + $scope.n3 + '.' + $scope.n4;
	Page.setTitle($rootScope.ipString);

	$scope.drawIPs = function() {
		var el = document.getElementById('box');
		var dimString = window.innerHeight-70 + 'px';

  		
  			var div = document.createElement('div');
  			div.className = 'ip';
  			div.style.width = dimString;
  			div.style.height = dimString;
  			div.style.background = 'rgba(' + $scope.n1 + ',' + $scope.n2 +','+ $scope.n3 +', '+(1-$scope.n4/255)+')';

  			var a = document.createElement('a');
  			a.className = 'ip-link';
  			a.style.color = 'rgba(' + $scope.n1 + ',' + $scope.n2 +','+ $scope.n3 +', '+(1-$scope.n4/255)+')';
  			a.href = 'http://'+ $scope.n1 + '.'+ $scope.n2 + '.' + $scope.n3 + '.' + $scope.n4;
  			a.target = '_blank';

  			div.appendChild(a);
			el.appendChild(div);

  		
	}

	


});


