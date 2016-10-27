import {Rate} from '../entities/rate';

export class RatesService {
    static $inject = ['$q'];
    constructor(
        $q
    ) {
        this.$q = $q;
    }

    getNewDataObject() {
        let dataInRate = {};
        for (let value in this.fields) {
            dataInRate[value] = this.fields[value]();
        }

        return dataInRate;
    }

    loadNewData(itemsCount = 20) {
        let rates = [];
        const deferred = this.$q.defer();
        for (let i = 0; i < 20; i++) {
            rates.push(new Rate(this.getNewDataObject()));
        }
        deferred.resolve(rates);
        return deferred.promise;
    }

    updateData(oldData) {
        const deferred = this.$q.defer();
        oldData.forEach(r => {
            r.update(this.getNewDataObject());
        });
        return deferred.promise;
    }

    registerFields(fields) {
        this.fields = fields;
    }
}