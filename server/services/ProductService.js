const data = require('../data');

class ProductService {

    constructor() {
        this.products = Object.values(data);
    }

    getAutoCompleteResult(query) {
        let data = this.products.filter(it => it.name.includes(query) || it.tags.toString().includes(query) || it.about.includes(query));
        return data.length > 5 ? data.slice(0, 5) : data;
    }

}

module.exports = ProductService
