class Menu {
    #price1 = 5;
    #price2 = 7.35;
    constructor(item1, item2) {
        this.item1 = item1;
        this.item2 = item2;
    }

    calculatePrice() {
        let totalCost = this.#price1*this.item1 + this.price2*this.item2;
        return totalCost;
    }
}