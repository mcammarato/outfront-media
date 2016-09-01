// Defnie Controller
app.controller('homeController', function($scope, $http) {

  //Page Change Function
  $scope.pageChange = function(newPage, oldPage) {
      fetchData(newPage);
      $scope.currentPage = newPage;
  };

  // Tell DOM to always load the first page
  $scope.currentPage = 1;

  // Get Current Page
  function fetchData(currentPage) {
    // Build HTTP POST Request
    var request = $http({
  		method: "post",
  		url: " http://ec2-52-86-89-220.compute-1.amazonaws.com/api/assets/search",
  		data: {"location":{"lat":40.7127837,"lon":-74.00594130000002,"radius":"5mi"},"currentPage":currentPage}
  	});

    // Bind data to scope
    request.success(function(response) {
      $scope.location = response.assets;
      $scope.latitude = response.assets;
      $scope.longitude = response.assets;
      $scope.media = response.assets;
      $scope.copy_size = response.assets;
      $scope.cpm = response.assets;
      $scope.totalItems = response.total;
    });
 }

  // Round CPM to second decimal place
  $scope.formatNumber = function(i) {
    return Math.round(i * 100)/100;
  }

  fetchData(1);
});
