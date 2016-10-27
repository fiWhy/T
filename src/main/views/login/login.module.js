import template            from './login.html';
import {LoginController} from './login';


function loginRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home.login', {
            url: '/login',
            template: template,
            controller: 'LoginController',
            controllerAs: 'login'
        });
}


export default angular.module('states.login', [])
    .controller('LoginController', LoginController)
    .config(loginRoutes)
