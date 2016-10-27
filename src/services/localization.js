export class LocalizationService{

    constructor($http, $q){

        this.http      = $http;
        this.q = $q;
        this.navigator = navigator;

        this.query = "";
        this.paOptions = {
            updateModel : true
        };
        this.paTrigger = {};
        this.paDetails = {};
        this.addressObj = {};
    }

    getAddressLocalization(){

         var dfd = this.q.defer();

           this.navigator.geolocation.getCurrentPosition(function(position){
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            let url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&sensor=true";
            this.http.get(url)
                .then(function(result) {
                     dfd.resolve(result.data);
                }.bind(this));
        }.bind(this));

         return dfd.promise;

    }

    placesCallback(error,details){
        console.log(this.query);
        let adressItem = {
                houseNumber : details.address_components[0],
                streetName : details.address_components[1],
                cityName : details.address_components[2],
                countryName : details.address_components[5]
        };
        if (error) {
            return console.error(error);
        }
        this.paDetails = details;
        this.addressObj = adressItem;
    }

    getAdressData(){
        return this.addressObj;
    }
}