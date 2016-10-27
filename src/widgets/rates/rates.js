export class RatesWidgetController {
    static $inject = ['$scope'];
    constructor(
        $scope
    ) {
        this.$scope = $scope;
    }

    remove(index) {
        this.$scope.handleRemove({index});
    }
}