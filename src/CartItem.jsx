import React, { useState, useEffect } from 'react';
import "./CartItem.css";


const CartItem = () => {

    /* get the current cart */
    //const cart = useSelector((state) => state.cart);

    /* init total no. of item in cart to 0 */
    //const [noItemInCart, setNoItemInCart] = useState(0);


    return (
        <>
            <div class="cart-item">
    <img class="product-img" src="https://unsplash.com" alt="Peace Lily"/>
    
    <div class="product-details">
      <div>
        <h2 class="product-title">Peace Lily</h2>
        <div class="product-price">$18</div>
        
        <div class="quantity-controls">
          <button class="btn-qty">-</button>
          <span class="qty-value">2</span>
          <button class="btn-qty">+</button>
        </div>
        
        <div class="total-price">Total: $36</div>
      </div>
      
      <button class="btn-delete">Delete</button>
    </div>
  </div>
        </>
    )


}



export default CartItem;
