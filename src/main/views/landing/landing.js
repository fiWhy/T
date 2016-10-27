import faker from 'faker';
import devNotes from './dev-notes.html';
import task from './task.html';
export class LandingController {
    static $inject = ['LocalizationService', 'UserData', 'RatesData', '$scope', 'RatesService', '$interval', '$mdDialog', '$state'];
    constructor(
        LocalizationService,
        UserData,
        RatesData,
        $scope,
        RatesService,
        $interval,
        $mdDialog,
        $state
    ) {
        this.LocalizationService = LocalizationService;
        this.UserData = UserData;
        this.RatesData = RatesData;
        this.$scope = $scope;
        this.RatesService = RatesService;
        this.$interval = $interval;
        this.$mdDialog = $mdDialog;
        this.$state = $state;

        const fields = {
            image: faker.image.avatar,
            title: faker.company.companyName,
            bid: () => {return Math.ceil(Math.random() * 100)} ,
            ask: () => {return Math.ceil(Math.random() * 100)} 
        }

        this.RatesService.registerFields(fields);
        this.RatesService.loadNewData(20)
            .then((data) => {
                this.RatesData.pushRates(data);
                this.startTimer(1000);
            });
    }

    logout() {
        this.UserData.clear();
        this.$state.go('home.login');
    }

    handleRemove(index) {
        this.RatesData.remove(index);
    }


    startTimer(every) {
        this.timer = this.$interval(() => {
            this.RatesService.updateData(this.RatesData.rates);
        }, every)
    }

    showTask(e) {
        this.$mdDialog.show({
            scope: this.$scope,
            preserveScope: true,
            template: task,
            clickOutsideToClose: true,
        }).then(this.makeSelection.bind(this))
    }

    showDevNotes(e) {
        this.$mdDialog.show({
            scope: this.$scope,
            preserveScope: true,
            template: devNotes,
            clickOutsideToClose: true,
        }).then(this.makeSelection.bind(this))
    }



}