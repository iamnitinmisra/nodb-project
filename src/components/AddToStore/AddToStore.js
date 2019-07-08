import React from "react";
import "./AddToStore.css";

export default function addToStore(props) {
  const { description, image, price/*, category, brand, alt */} = props.state;
    // console.log(props.state.products);
    // console.log(description);
    return (
      <div className="input-container">
        <form className = "addToStoreForm">
          <h2>Create new product</h2>
        <input
          onChange={event =>
            props.universalChangeHandler(event.target.name, event.target.value)
          }
          value={description}
          name="description"
          placeholder="Garment Description"
        />
        <input
          onChange={event =>
            props.universalChangeHandler(event.target.name, event.target.value)
          }
          value={image}
          name="image"
          placeholder="Image URL"
        />
        <input
          onChange={event =>
            props.universalChangeHandler(event.target.name, event.target.value)
          }
          value={price}
          name="price"
          placeholder="Price"
        />
        {/* <input
          onChange={event =>
            props.universalChangeHandler(event.target.name, event.target.value)
          }
          value={category}
          name="category"
          placeholder="Category"
        /> */}
        {/* <input
          onChange={event =>
            props.universalChangeHandler(event.target.name, event.target.value)
          }
          value={brand}
          name="brand"
          placeholder="Brand"
        /> */}
        {/* <input
          onChange={event =>
            props.universalChangeHandler(event.target.name, event.target.value)
          }
          value={alt}
          name="alt"
          placeholder="Alt Image Text"
        /> */}

        <button className="addProduct-button" onClick={() => props.postNewProduct()}>Add</button>
        </form>
      </div>
    );

}
