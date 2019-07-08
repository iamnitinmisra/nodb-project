const products = require("../../products.json");

let id = 5;

module.exports = {
  getAllProducts: (req, res) => {
    res.status(200).send(products);
  },
  postAllProducts: (req, res) => {
    //create a new object
    const { description, image, price, category, brand, qty } = req.body; //will be provided when item is added to cart
    products.push({
      id: id, // we will set the id ourselves
      description, // provided by user
      image, // provided by user
      price, //provided by user
      category,
      brand, // provided by user
      qty
    });
    id++;
    res.status(200).send(products);
  },
  updateProductOffering: (req, res) => {
    //put
    let updateId = req.params.id;
    const { match } = req.query;
    let index = products.findIndex(product => {
      //defines the index location
      return product.id == updateId;
    });
    if (index === -1) {
      res.status(404).send("Product not found");
    } else {
      if (match === "true") {
        products[index].price++;
      } else {
        if (products[index].price > 0) {
          products[index].price--;
        }
      }
      res.status(200).send(products);
    }
  },

  deleteProductOffering: (req, res) => {
    let updateId = req.params.id;
    let index = products.findIndex(product => {
      return product.id == updateId;
    });
    console.log("UpdateId is", updateId);
    console.log("Index is", index);
    if (index === -1) {
      //id not found
      res.status(404).send("Product not found");
    } else {
      products.splice(index, 1);
      res.status(200).send(products);
    }
  }
};
