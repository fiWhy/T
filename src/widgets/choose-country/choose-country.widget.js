import {ChooseCountryController} from './choose-country';
import template from './templates/choose-country.html';
export class ChooseCountryWidget {
    static widgetName = 'chooseCountry';
    transclude = true;
    restrict = 'E';
    controller = ChooseCountryController;
    controllerAs = 'chooseCountry';
    template = template;
    scope = {
        countryWillBeFound: '&',
        countrySelected: '&',
        withDialog: '='
    }

    static instance() {
        return new ChooseCountryWidget;
    }
}