let loginForm = document.querySelector('.login-wrap');
let signupForm = document.querySelector('.signup-wrap');
let title = document.querySelector('title');

let signupToggleBtn = document.querySelector('#toggle-signup');
let loginToggleBtn = document.querySelector('#toggle-login');
let signupBtn = document.querySelector('#signup-btn');



signupToggleBtn.onclick = () => {
  loginForm.classList.remove('lactive');
  signupForm.classList.add('lactive');
  title.textContent = 'Signup form';
}

loginToggleBtn.onclick = () => {
  signupForm.classList.remove('lactive');
  loginForm.classList.add('lactive');
  title.textContent = 'Login form';
}
signupBtn.onclick = () => {
  
	signupForm.classList.remove('lactive');
  loginForm.classList.add('lactive');
  title.textContent = 'Login form';

getAccount();
// ACCOUNT RESTDB.IO DATABASE
var database;

let username = $("#name").val();
let password = $("#password").val();

let jsondata = {
	"username": username,
	"password": password
};

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://interactivedev-91ec.restdb.io/rest/account",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "63bf88f9969f06502871adc1",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": JSON.stringify(jsondata)
}

$.ajax(settings).done(function (response) {
  console.log(response);
	
	
	getAccount();
});
};

function GetAccount(limit = 10, all = true) {
	var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://interactivedev-91ec.restdb.io/rest/account",
  "method": "GET",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "63bf88f9969f06502871adc1",
    "cache-control": "no-cache"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
};


/*
function signup() {
  // GET METHOD
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://interactivedev-91ec.restdb.io/rest/account",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "63bf88f9969f06502871adc1",
      "cache-control": "no-cache"
    }
  }

  $.ajax(settings).done(function (response) {
    database = response;
  });
}

function signin(jsondata) {
  //POST METHOD
  var jsondata = {
    "field1": "xyz",
    "field2": "abc"
  };
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://interactivedev-91ec.restdb.io/rest/account",
    "method": "POST",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "63bf88f9969f06502871adc1",
      "cache-control": "no-cache"
    },
    "processData": false,
    "data": JSON.stringify(jsondata)
  }

  $.ajax(settings).done(function (response) {
    database = response;
  });
}
signup();

*/
