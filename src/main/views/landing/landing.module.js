import template            from './landing.html';
import {LandingController} from './landing';

function landingRoutes($stateProvider, $urlRouterProvider){

    $stateProvider
        .state('home.landing', {
            url: '/landing',
            template: template,
            controller: 'LandingController',
            controllerAs: 'landing'
        });
}


export default angular.module('states.landing', [])
    .controller('LandingController', LandingController)
    .config(landingRoutes)
