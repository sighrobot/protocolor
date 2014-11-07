function TitleCtrl($scope, Page) {
	$scope.Page = Page;
}


app.controller('IPCtrl', function ($rootScope, $scope, $routeParams, Page) {

	$rootScope.ipString = '?.?.?.?';
	Page.setTitle($rootScope.ipString);

	$scope.drawIPs = function() {
		var el = document.getElementById('box');
  		for (i=0;i<256;i++) {
  			var div = document.createElement('div');
  			div.class = 'ip';
    		div.innerHTML = '<div class="ip" style="'
    		+'width:'+ (window.innerWidth/16) +'px;'
    		+'height:'+(window.innerWidth/16)+'px;'
    		+'background:' + 'rgba(' + i + ',' + 0 + ',' + 0 +',' + 1 + ');'
			+'"><a class="ip-link" style="color:'+'rgba(' + i + ',' + 0 + ',' + 0 +',' + 1 + ');'+'" href="#/'+i+'">'+i+'</a></div>';
			el.appendChild(div);
  		}
	}


});

app.controller('IP1Ctrl', function ($rootScope, $scope, $routeParams, Page) {

	$scope.n1 = $routeParams.n1;
	$scope.n2 = $routeParams.n2;
	$scope.n3 = $routeParams.n3;



	if ($scope.n2 == undefined) $scope.n2 = 0;
	if ($scope.n3 == undefined) $scope.n3 = 0;
	
	$rootScope.ipString = $scope.n1 + '.?.?.?';
	Page.setTitle($rootScope.ipString);

	$scope.drawIPs = function() {
		
		var el = document.getElementById('box');
  		for (i=0;i<256;i++) {
  			var div = document.createElement('div');
  			div.class = 'ip';
    		div.innerHTML += '<div class="ip" style="'
    		+'width:'+ (window.innerWidth/16) +'px;'
    		+'height:'+(window.innerWidth/16)+'px;'
    		+'background:' + 'rgba(' + $scope.n1 + ',' + i + ',' + 0 +',' + 1 + ');'
			+'"><a class="ip-link" style="color:'+'rgba(' + $scope.n1 + ',' + i + ',' + 0 +',' + 1 + ');"href="#/'+$scope.n1+'/'+i+'">'+i+'</a></div>';
			el.appendChild(div);
  		}
	}


});

app.controller('IP2Ctrl', function ($rootScope, $scope, $routeParams, Page) {

	$scope.n1 = $routeParams.n1;
	$scope.n2 = $routeParams.n2;
	$scope.n3 = $routeParams.n3;
	if ($scope.n2 == undefined) $scope.n2 = 0;
	if ($scope.n3 == undefined) $scope.n3 = 0;
	
	$rootScope.ipString = $scope.n1 + '.' + $scope.n2 + '.?.?';
	Page.setTitle($rootScope.ipString);

	$scope.drawIPs = function() {
		
		var el = document.getElementById('box');
  		for (i=0;i<256;i++) {
  			var div = document.createElement('div');
  			div.class = 'ip';
    		div.innerHTML += '<div class="ip" style="'
    		+'width:'+ (window.innerWidth/16) +'px;'
    		+'height:'+(window.innerWidth/16)+'px;'
    		+'background:' + 'rgba(' + $scope.n1 + ',' + $scope.n2 + ',' + i +',' + 1 + ');'
			+'"><a class="ip-link" style="color:'+'rgba(' + $scope.n1 + ',' + $scope.n2 + ',' + i +',' + 1 + ');"href="#/'+$scope.n1+'/'+$scope.n2+'/'+i+'">'+i+'</a></div>';
			el.appendChild(div);
  		}
	}


});

app.controller('IP3Ctrl', function ($rootScope, $scope, $routeParams, Page) {

	$scope.n1 = $routeParams.n1;
	$scope.n2 = $routeParams.n2;
	$scope.n3 = $routeParams.n3;
	if ($scope.n2 == undefined) $scope.n2 = 0;
	if ($scope.n3 == undefined) $scope.n3 = 0;
	
	$rootScope.ipString = $scope.n1 + '.' + $scope.n2 + '.' + $scope.n3 + '.?';
	Page.setTitle($rootScope.ipString);

	$scope.drawIPs = function() {
		
		var el = document.getElementById('box');
  		for (i=0;i<256;i++) {
  			var div = document.createElement('div');
  			div.class = 'ip';
    		div.innerHTML += '<div class="ip" style="'
    		+'width:'+ (window.innerWidth/16) +'px;'
    		+'height:'+(window.innerWidth/16)+'px;'
    		+'background:' + 'rgba(' + $scope.n1 + ',' + $scope.n2 + ',' + $scope.n3 +',' + (1-i/255) + ');'
			+'"><a class="ip-link" target="_blank" style="color:'+'rgba(' + $scope.n1 + ',' + $scope.n2 + ',' + $scope.n3 +',' + (1-i/255) + ');"href="http://'+$scope.n1+'.'+$scope.n2+'.'+$scope.n3+'.'+i+'">'+i+'</a></div>';
			el.appendChild(div);
  		}
	}


});


