import angularRouter    from 'angular-ui-router';
import ngPlaces         from'./libs/mapApi/ngPlacesAutocomplete';

import AngularMaterial from 'angular-material';
import AngularMaterialDataTable from 'angular-material-data-table';
//modules
import Home             from './main/home.module';

import './assets/index.scss';

let modules = [
    angularRouter,
    AngularMaterial,
    AngularMaterialDataTable,
    Home.name,
    'ngPlacesAutocomplete'
];

function configTranslation(){

    // var translations = {
    //     1: "Guest"
    //
    // };
    //
    // $translateProvider
    //     .translations('en', translations)
    //     .preferredLanguage('en');
}

angular.module('meetUpPlanner', modules)
    .config(configTranslation);

// Bootstrap in strictDI mode
angular.bootstrap(document, ['meetUpPlanner'], {});
