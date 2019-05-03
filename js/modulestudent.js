var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider){

    $routeProvider

    .when('/',
    {
        controller: 'analytics',
        templateUrl: '../../HTML/dashboard3.html'
    })
    .when('/studgrade',
    {
        controller: 'analytics',
        templateUrl: '../../HTML/studgrade.html'
    })
    .when('/subject',
    {
        controller: 'analytics',
        templateUrl: '../../HTML/subject.html'
    })
    .when('/table',
    {
        controller: 'analytics',
        templateUrl: '../../HTML/table.html'
    })
    .when('/grade',
    {
        controller: 'analytics',
        templateUrl: '../../HTML/grade.html'
    })
    .when('/attendance',
    {
        controller: 'analytics',
        templateUrl: '../../HTML/attendance.html'
    })
    .when('/exam',
    {
        controller: 'analytics',
        templateUrl: '../../HTML/exam.html'
    })
    .when('/quiz',
    {
        controller: 'analytics',
        templateUrl: '../../HTML/quiz.html'
    })
    .when('/activities',
    {
        controller: 'analytics',
        templateUrl: '../../HTML/activities.html'
    })
    .when('/character',
    {
        controller: 'analytics',
        templateUrl: '../../HTML/character.html'
    })
 
    
    .otherwise({redirecTo: '/' });
});