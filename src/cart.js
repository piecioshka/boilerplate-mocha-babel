class Cart {

    constructor() {
        this.list = [];
    }

    addProduct(product) {
        this.list.push(product);
    }

    removeProduct(product) {
        const index = this.list.indexOf(product);
        if (index !== -1) {
            this.list.splice(index, 1);
        }
    }

    getProducts() {
        return this.list;
    }

    clear() {
        this.list.length = 0;
    }

}

module.exports = {
    Cart
};
