var app = angular.module('myModule');

app.controller('redditCtrl', function($scope, $http, myfactory){
//lab bonus
$scope.getHttpData = function (){
    $scope.http = myfactory.getData();
    $scope.http.then(function(response){
      $scope.posts = response.data.data.children;
      console.log($scope.posts);

    }, function (error) {
      console.log(error);
    });
}
  $scope.getHttpData();

//  Lab requirements
// $http.get('http://www.reddit.com/r/aww.json').then(function(response) {
//  // console.log(response.data.data.children.data);
//
//  $scope.posts = response.data.data.children;
//  console.log($scope.posts);
//   // console.log(redditPosts);
// });
});
