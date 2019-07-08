import React from "react";
import "./StoreSelection.css";

export default function Store(props) {
  const mappedProducts = props.products.map(product => {
    return (
      //   <main key={product.id} >

      <div key={product.id} className="product-container">
        <img src={product.image} alt={product.alt} />
        <div>{product.description}</div>
        <div className="price-container">
          <button onClick={() => props.updatePrice(product.id, false)}>
            -
          </button>
          <div>${product.price}</div>
          <button onClick={() => props.updatePrice(product.id, true)}>+</button>
        </div>
        {/* <div>{product.brand}</div> */}
        <div>
          <button onClick={() => props.deleteProduct(product.id)}>
            Remove Product
          </button>
        </div>
      </div>
      //   </main>
    );
  });
  return <div className="mappedProducts">{mappedProducts}</div>;
}
