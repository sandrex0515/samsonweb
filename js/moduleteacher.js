var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider){

    $routeProvider

    .when('/',
    {
        controller: 'analytics',
        templateUrl: '../../HTML/dashboard2.html'
    })
    .when('/gradecom',
    {
        controller: 'analytics',
        templateUrl: '../../HTML/gradecom.html'
    })
    .when('/announcement',
    {
        controller: 'analytics',
        templateUrl: '../../HTML/teacher.html'
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
    .when('/subject',
    {
        controller: 'analytics',
        templateUrl: '../../HTML/subject.html'
    })
 
    
    .otherwise({redirecTo: '/' });
});