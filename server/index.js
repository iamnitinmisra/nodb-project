const express = require("express");
const app = express();
app.use(express.json());
const productController = require("./controller/productConroller")

app.get("/api/products", productController.getAllProducts)
app.post("/api/products", productController.postAllProducts)
app.put("/api/products/:id", productController.updateProductOffering)
app.delete("/api/products/:id", productController.deleteProductOffering)

const port = 6000;
app.listen(port, ()=> {
    console.log(`Server is listening on port ${port}`)
})