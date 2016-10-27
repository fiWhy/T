import template         from './home-template.html';
import {HomeController} from './home';

//Modules
import Models           from '../models/models.module';
import Services         from '../services/services.module';
import Widgets         from '../widgets/widgets.module';

import Landing          from './views/landing/landing.module';
import Login          from './views/login/login.module';

function homeRoutes($stateProvider, $urlRouterProvider){

    $stateProvider
        .state('home', {
            abstract: true,
            template: template,
            controller: 'HomeController',
            controllerAs: 'Home',
        });

    $urlRouterProvider.otherwise('/login');
}


export default angular.module('meetUpPlaner', [
    Services.name,
    Models.name,
    Widgets.name,
    Login.name,
    Landing.name
])
    .controller('HomeController', HomeController)
    .config(homeRoutes)

