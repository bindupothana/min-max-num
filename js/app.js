'use strict';

var numApp = angular.module('numApp',['ui.router','ngMessages']);
 numApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider,$urlRouterProvider)
 {
  $urlRouterProvider.otherwise("/enternum")
  $stateProvider
  .state("enternum", { 
    url : "/enternum", 
    templateUrl : "views/enternum.html",
    controller : "numCtrl",
 })

  .state("list",{
  url : "/list",
  templateUrl : "views/list.html",
  controller : "numCtrl",
 })
}]);