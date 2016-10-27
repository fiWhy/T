import {RatesWidgetController} from './rates';
import template from './templates/rates.html';
export class RatesWidget {
    static widgetName = 'rates';
    restrict = 'E';
    controller = RatesWidgetController;
    controllerAs = 'rates';
    template = template;
    scope = {
        list: '=',
        handleRemove: '&'
    }

    static instance() {
        return new RatesWidget;
    }
}