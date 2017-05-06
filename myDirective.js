var app = angular.module('myModule');

app.directive('redditPost', function (){

  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'redditpost.html'
  }

});
