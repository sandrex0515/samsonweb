var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider){

    $routeProvider

    .when('/',
    {
        controller: 'user',
        templateUrl: 'HTML/body.html'
    })
    .when('/gallery',
    {
        controller: 'user',
        templateUrl: 'HTML/gallery.html'
    })
    .when('/about',
    {
        controller: 'user',
        templateUrl : 'HTML/about.html'
    })
    .when('/productbl2',
    {
        controller: 'adminController',
        templateUrl : '../../HTML/producttbl2.html'
    })
    .when('/stock2', 
    {
        controller: 'adminController',
        templateUrl : '../../HTML/productstock.html'
    })
    .when('/stock',
    {
        controller: 'adminController',
        templateUrl : '../../HTML/stock2.html'
    })
    .when('/process',
    {
        controller: 'adminController',
        templateUrl : '../../HTML/process.html'
    })
    .when('/process2',
    {
        controller: 'adminController',
        templateUrl : '../../HTML/process2.html'
    })
    .when('/fordelivery',
    {
        controller: 'adminController',
        templateUrl : '../../HTML/delivery.html'
    }) 
    .when('/fordelivery2',
    {
        controller: 'adminController',
        templateUrl : '../../HTML/delivery2.html'
    })
    .when('/delivered2',
    {
        controller: 'adminController',
        templateUrl : '../../HTML/delivered2.html'
    })
    .when('/delivered',
    {
        controller: 'adminController',
        templateUrl : '../../HTML/delivered.html'
    })
  
    
 
    
 
    
    .otherwise({redirecTo: '/' });
});