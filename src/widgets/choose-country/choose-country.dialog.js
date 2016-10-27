export class ChooseCountryDialogController {
    static $inject = ['$mdDialog', '$scope']
    constructor(
        $mdDialog,
        $scope
    ) {
        this.$mdDialog = $mdDialog;
        this.$scope = $scope;
        console.log(this.$scope);
    }

    hide() {
        this.$mdDialog.hide();
    };

    cancel() {
       this.$mdDialog.cancel();
    };

    answer(answer) {
        this.$mdDialog.hide(answer);
    };
}