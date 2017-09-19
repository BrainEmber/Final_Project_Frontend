console.log("app.js working");

const app = angular.module("FinalProject", []);

app.controller("mainController", ["$http", function($http){

  this.musers = [];

this.getMusers = function(){
  $http({
    method: 'GET',
    url: 'http://localhost:3000/musers'
  }).then
    (response => {
      this.musers = response.data;
    }).catch(err => console.log(err));
};

















// END CONTROLLER
}])
