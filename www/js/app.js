// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ui.router', 'ngCordova'])
  .config(definirRotas)

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

definirRotas.$inject = ["$stateProvider", "$urlRouterProvider"];

function definirRotas($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state("vitrine", {
      url: "/vitrine",
      templateUrl: "templates/vitrine.html",
      controller: "vitrine as vm"
    })
    .state("produto", {
      url: "/produto/:id",
      templateUrl: "templates/produto.html",
      controller: "produto as vm"
    });

  $urlRouterProvider.otherwise("/vitrine");
}
