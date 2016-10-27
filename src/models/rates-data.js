export class RatesData{
    rates = [];
    constructor(){
    }

    pushRates(rates) {
        this.rates = rates;
    }

    remove(index) {
        if(this.rates[index]) {
            this.rates.splice(index, 1);
        }
    }
}