export class UserData{
    constructor(){
        this.address = '';
        this.mapAddress = {};
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
}