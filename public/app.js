console.log("app.js working");

const app = angular.module("FinalProject", []);

app.controller("mainController", ["$http", function($http){



this.getMusers = function(){
  $http({
    method: 'GET',
    url: 'http://localhost:3000/musers'
  }).then
    (response => {
      this.musers = response.data;
      console.log(response.data);
    }).catch(err => console.log(err));
};

this.getFusers = function(){
  $http({
    method: 'GET',
    url: 'http://localhost:3000/fusers'
  }).then
    (response => {
      this.fusers = response.data;
      console.log(response.data);
    }).catch(err => console.log(err));
};















this.getMusers();
this.getFusers();

// END CONTROLLER
}])
