export class UserData{
    constructor(){
        this.clear();
    }

    getCountry(){
        return this.address;
    }

    setAddress(address){
        this.mapAddress = address;
    }

    getAddress(){
        return this.mapAddress;
    }

    clear() {
        this.address = '';
        this.username = '';
        this.country = '';
        this.password = '';
        this.phone = '';
        this.mapAddress = {};
    }
}