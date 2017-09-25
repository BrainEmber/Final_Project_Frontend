console.log("app.js working");

const app = angular.module("FinalProject", []);

app.controller("mainController", ["$http", function($http){

  this.url = 'http://localhost:3000';
  this.muser = {};
  this.bog = "";
  this.show = true;
  this.login = false;
  this.create = false;
  this.loginMuser = false;
  this.createMuserv = false;


//menu interactions

  this.changeLogin = function() {
    this.login = true;
    this.show = false;
  }

  this.changeCreate = function() {
    this.create = true;
    this.show = false;
  }

  this.loginM = function() {
    this.loginMuser = true;
    this.login = false;
  }

  this.createM = function() {
    this.createMuserv = true;
    this.create = false;
  }



//devolopment


this.mlogin = function(userPass) {
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


  // this.flogin = function(userPass) {
  //        console.log(userPass);
  //
  //        $http({
  //              method: 'POST',
  //              url: this.url + '/fusers/login',
  //              data: { muser: { username: userPass.username, password: userPass.password }},
  //            }).then(function(response) {
  //              this.fuser = response.data.fuser;
  //              localStorage.setItem('token', JSON.stringify(response.data.token));
  //              console.log(response);
  //            }.bind(this));
  //   }








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
    url: this.url + '/fusers'
  }).then
    (response => {
      this.fusers = response.data;
      console.log(response.data);
    }).catch(err => console.log(err));
};

this.createMuser = function() {
  $http({
    method: 'POST',
    url: this.url + '/musers',
    dataType: 'json',
    data: {
      username : this.username,
      game : this.game,
      genera : this.genera,
      hours : this.hours,
      password : this.password,
    }
  }).then
    (response => {
    console.log(response);
    this.getMusers();
  }).catch(err => console.log(err))
}















this.getMusers();
// this.getFusers();

// END CONTROLLER
}])
