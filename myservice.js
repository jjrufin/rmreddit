var app = angular.module('myModule');

app.factory('myfactory', function($http){
console.log('service check');

var obj = {};
obj.getData = function () {
  return $http.get('https://www.reddit.com/r/EarthPorn.json');
  }
  return obj;


});
