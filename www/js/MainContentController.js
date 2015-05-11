/**
 * Main Content Controller
 */

ddh.controller('MainContentController', MainContentController);

function MainContentController($scope, $ionicSideMenuDelegate) {
	$scope.toggleLeft = function() {
		$ionicSideMenuDelegate.toggleLeft();
	};
}