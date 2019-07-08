# No-DB

## frontend checklist
- reset.css
- package.json (to run nodemon without giving a file)

### proxy
- :4005

### dependencies

- axios
- http-proxy-middleware

### frontend folder structure

- src/
    - Create class and extend component => App.js
    - index.js
    - components/
        - ShoppingCart.js
            - Displays whats in the cart and subtotal
        - Store.js 
            - Display store
        - Navigation.js 
            - Navigation menu for cart and store
        - AddToStore.js
            - component to add garments to the stores product selction

## backend checklist

### server folder structure

- server/
    - index.js
    - controller/
        - cartController.js => controls whats in the cart

### dependencies

- express

### routes

**cartController.js**
    
    - get: 'api/products'
    - post: 'api/products'
    - put: 'api/products/:id'
    - delete: 'api/products/:id'

### data
```js
const cart = {
    productId, productName, price, qty
}
```
