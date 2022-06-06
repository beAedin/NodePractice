const fs = require("fs");
const path = require("path");

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        const p = path.join(
            dirname(require.main.filename),
            "data",
            "products.json"
        );
        fs.readFile(p, (err, fileContent) => {
            console.log(fileContent);
        });
        products.push(this);
    }

    static fetchAll() {
        return products;
    }
};
