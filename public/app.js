console.log("app.js working");

const app = angular.module("FinalProject", []);

app.controller("mainController", ["$http", function($http){

  this.url = 'https://dating-game-api.herokuapp.com';
  // this.url = 'http://localhost:3000'
  this.muser = {};
  this.bog = "";
  this.show = true;
  this.login = false;
  this.create = false;
  this.loginMuser = false;
  this.createMuserv = false;
  this.updateMenu = false;
  this.loggedIn = false;
  const controller = this;
  this.loginFuser = false;
  this.createFuserv = false;
  this.updateMenuF = false;
  this.MLogin = false;
  this.FLogin = false;



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

  this.changeUpdateMenu = function() {
    this.updateMenu = true;
  }

  this.loginF = function() {
    this.loginFuser = true;
    this.login = false;
  }

  this.createF = function() {
    this.createFuserv = true;
    this.create = false;
  }

  this.changeUpdateMenuF = function() {
    this.updateMenuF = true;
    this.create = false;
  }

  this.toggleMLogin = function() {
    this.MLogin = true;
    // this.show = true;

  }

  this.toggleFLogin = function() {
    this.FLogin = true;
    // this.show = true;

  }

  this.reset = function() {
    this.show = true;
    this.createMuserv = false;
    this.createFuserv = false;
    this.Flogin = false;
    this.Mlogin = false;
    this.loginMuser = false;
    this.loginFuser = false;
  }



//devolopment

// MUSER THINGS


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
             this.getMusers();
             this.getFusers();
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
    // this.getMusers();
    // this.getFusers();
  }).catch(err => console.log(err))
};


this.removeMuser = function(id) {
  console.log(id);
  $http({
    method: 'DELETE',
    url: this.url + '/musers/' + id,
    headers: {
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token'))
    }
  }).then
    (response => {
      console.log(response);
      console.log("got to here");
      this.getMusers();
      this.getFusers();
    }).catch(err => console.log(err));
};


this.updateMuser = function(id) {
  console.log(id);
  // console.log("This is the This", this);
  $http({
    method: 'PATCH',
    url: this.url + '/musers/' + id,
    dataType: 'json',
    headers: {
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token'))
    },
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
      console.log("anything", controller);
      this.getMusers();
      this.getFusers();
    }).catch(err => console.log(err))
};


// END MUSER THINGS

// FUSER THINGS


this.flogin = function(userPass) {
       console.log(userPass);

       $http({
             method: 'POST',
             url: this.url + '/fusers/login',
             data: { fuser: { username: userPass.username, password: userPass.password }},
           }).then(function(response) {
             this.fuser = response.data.fuser;
             localStorage.setItem('token', JSON.stringify(response.data.token));
             console.log(response);
             this.getFusers();
             this.getMusers();
           }.bind(this));
  }



  this.getFusers = function() {
    $http({
      url: this.url + '/fusers',
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token'))
      }
    }).then(function(response) {
      console.log(response);
      if (response.data.status == 401) {
          this.error = "Unauthorized";
      } else {
        this.fusers = response.data;
      }
    }.bind(this));
  };

  this.createFuser = function() {
    $http({
      method: 'POST',
      url: this.url + '/fusers',
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
      // this.getFusers();
      // this.getMusers();
    }).catch(err => console.log(err))
  };




  this.removeFuser = function(id) {
    console.log(id);
    $http({
      method: 'DELETE',
      url: this.url + '/fusers/' + id,
      headers: {
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token'))
      }
    }).then
      (response => {
        console.log(response);
        console.log("got to here");
        this.getFusers();
        this.getMusers();
      }).catch(err => console.log(err));
  };



  this.updateFuser = function(id) {
    console.log(id);
    // console.log("This is the This", this);
    $http({
      method: 'PATCH',
      url: this.url + '/fusers/' + id,
      dataType: 'json',
      headers: {
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token'))
      },
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
        console.log("anything", controller);
        this.getFusers();
        this.getMusers();
      }).catch(err => console.log(err))
  };












// END FUSER THINGS


// this.getMusers();
// this.getFusers();

// END CONTROLLER
}])
