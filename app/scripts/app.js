'use strict';
angular.module('confusionApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
        // route for the contactus page
            .when('/contactus', {
                templateUrl : 'views/contactus.html',
                controller  : 'ContactController'
            })
            .when('/aboutus',{
                templateUrl: 'views/aboutus.html',
                controller  : 'AboutController'
            })
                
            // route for the menu page
            .when('/menu', {
                templateUrl : 'views/menu.html',
                controller  : 'MenuController'
            })
            // route for the dish details page
            .when('/menu/:id', {
                templateUrl : 'views/dishdetail.html',
                controller  : 'DishDetailController'
            })
            .otherwise('views/contactus');
    })
;

