export class LoginController {
    static $inject = ['UserData', '$state'];
    countrySearching = false;
    constructor(
        UserData,
        $state
    ) {
        this.UserData = UserData;
        this.$state = $state;
        console.log(this.UserData);
    }

    countryWillBeFound(searchPromise) {
        this.countrySearching = true;
        searchPromise.finally(() => {
            this.countrySearching = false;
        });
    }

    countrySelected(country) {
        this.UserData.address = country.formatted_address;
        this.UserData.setAddress(country);
    }

    handleFormSubmit() {
        this.$state.go('home.landing');
    }

    checkLoginForm() {
        return true;
    }


}