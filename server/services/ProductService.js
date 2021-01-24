const data      = require('../data');
class ProductService {

      getAutoCompleteResult(query) {
        return data.find(it => it.name.contains(query)||it.tags.toString().contains(query)||it.about.contains(query));
    }

}
module.exports = ProductService
