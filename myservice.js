var app = angular.module('myModule');

app.factory('myfactory', function($http){
console.log('service check');

var obj = {};
obj.getData = function () {
  return $http.get('http://www.reddit.com/r/aww.json');
  }
  return obj;


});
