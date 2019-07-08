import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import StoreSelection from "./components/StoreSelection/StoreSelection";
import AddToStore from "./components/AddToStore/AddToStore";
import MenuBar from "./components/MenuBar/MenuBar"
import Heading from "./components/Heading/Heading"
import "./index.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cart: [],
      id: 0,
      description: "",
      image: "",
      price: "",
      category: "",
      brand: "",
      qty: 0,
      alt: ""
    };
  }
  componentDidMount() {
    this.getAllProducts();
  }

  getAllProducts() {
    axios
      .get("/api/products")
      .then(response => {
        // console.log(response.data)
        this.setState({
          products: response.data
        });
      })
      .catch(console.error());
  }

  postNewProduct = () => {
    const newProduct = {
      description: this.state.description,
      image: this.state.image,
      price: this.state.price,
      category: this.state.category,
      brand: this.state.brand,
      alt: this.state.alt
    };
    axios
      .post("/api/products", newProduct)
      .then(response => {
        this.setState({
          products: response.data
        });
      })
      .catch(err => console.log(err));
  };

  updatePrice = (id, match) => {
    axios
      .put(`/api/products/${id}?match=${match}`)
      .then(response => {
        this.setState({
          products: response.data
        });
      })
      .catch(err => console.log(err));
  };

  deleteProduct = (id) => {
    axios
      .delete(`/api/products/${id}`)
      .then(response => {
        this.setState({
          products: response.data
        });
      })
      .catch(err => console.log(err));
  };

  universalChangeHandler = (property, value) => {
    this.setState({
      [property]: value
    });
  };

  render() {
    const { products } = this.state;
    // console.log(products)
    return (
      <div className="App">
        <Heading 
        />
        <div className="navigation">
          <MenuBar 
          />
        </div>
        <div className="store-container">
          <StoreSelection
            products={products}
            updatePrice={this.updatePrice}
            deleteProduct={this.deleteProduct}
          />
        </div>
        <div className="new-clothes">
        <AddToStore 
          universalChangeHandler={this.universalChangeHandler}
          state={this.state}
          postNewProduct={this.postNewProduct}
        />
        </div>
      </div>
    );
  }
}

export default App;
