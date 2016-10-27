export class Rate {
    title = '';
    image = '';
    oldBidValue = 0;
    newBidValue = 0;
    bestBidValue = 0;

    oldAskValue = 0;
    newAskValue = 0;
    bestAskValue = 0;

    constructor(newData) {
        this.title = newData.title;
        this.image = newData.image;

        this.oldBidValue = this.newBidValue;
        this.newBidValue = newData.bid;
        this.bestBidValue = newData.bid;


        this.oldAskValue = this.newAskValue;
        this.newAskValue = newData.ask;
        this.bestAskValue = newData.ask;
    }

    calculateBest(currentVal, newVal) {
        if (currentVal < newVal) {
            return newVal;
        }

        return currentVal;
    }

    update(newData) {
        this.oldBidValue = this.newBidValue;
        this.newBidValue = newData.bid;
        this.bestBidValue = this.calculateBest(newData.bid);


        this.oldAskValue = this.newAskValue;
        this.newAskValue = newData.ask;
        this.bestAskValue = this.calculateBest(this.bestAskValue, newData.ask);
    }
}