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
        if(this.UserData.username
            && this.UserData.password
            && this.UserData.address
            && this.UserData.phone) {
                return true;
            }

            return false;
    }


}