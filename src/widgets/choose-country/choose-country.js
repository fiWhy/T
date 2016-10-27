import dialogTemplate from './templates/country-list-dialog.html'
import { ChooseCountryDialogController } from './choose-country.dialog';

export class ChooseCountryController {
    static $inject = ['LocalizationService', '$scope', '$mdDialog'];
    constructor(
        LocalizationService,
        $scope,
        $mdDialog
    ) {
        this.localizationService = LocalizationService;
        this.$scope = $scope;
        this.$mdDialog = $mdDialog;
    }

    autodetectLocation() {
        const promise = this.localizationService.getAddressLocalization();
        this.$scope.countryWillBeFound({ promise });
        promise.then(r => {
            if (this.$scope.withDialog && r.status === 'OK') {
                this.$scope.countries = r.results;
                this.showDialog();
            }
        })
    }

    makeSelection(country) {
        this.$scope.countrySelected({country});
    }

    showDialog() {
        this.$mdDialog.show({
            controller: ChooseCountryDialogController,
            controllerAs: 'dialog',
            scope: this.$scope,
            preserveScope: true,
            template: dialogTemplate
        }).then(this.makeSelection.bind(this))
    };
}