import {RatesWidget} from './rates/rates.widget';
import {ChooseCountryWidget} from './choose-country/choose-country.widget';

export default angular.module('meetUpPlanner.widgets', [])
    .directive(RatesWidget.widgetName, RatesWidget.instance)
    .directive(ChooseCountryWidget.widgetName, ChooseCountryWidget.instance);