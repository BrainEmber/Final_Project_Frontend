console.log("app.js working");

const app = angular.module("FinalProject", []);

app.controller("mainController", ["$http", function($http){

  this.url = 'http://localhost:3000';
  this.muser = {};


this.login = function(userPass) {
       console.log(userPass);

       $http({
             method: 'POST',
             url: this.url + '/musers/login',
             data: { muser: { username: userPass.username, password: userPass.password }},
           }).then(function(response) {
             this.muser = response.data.muser;
             localStorage.setItem('token', JSON.stringify(response.data.token));
             console.log(response);
           }.bind(this));
  }








  this.getMusers = function() {
    $http({
      url: this.url + '/musers',
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token'))
      }
    }).then(function(response) {
      console.log(response);
      if (response.data.status == 401) {
          this.error = "Unauthorized";
      } else {
        this.musers = response.data;
      }
    }.bind(this));
  }



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















// this.getMusers();
// this.getFusers();

// END CONTROLLER
}])
