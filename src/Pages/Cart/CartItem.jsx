import React, { useContext } from 'react'

import { ShopContext } from '../../Context/ShopContext';

const CartItem = (props) => {
    const {id,productName,price,productImage}=props.product;
    const {cartItems,addToCart,removeFromCart,updateCartItemCount }=useContext(ShopContext)
  return (
    <div className="cartItem">
        <img src={productImage} alt="" />
        <div className="description">
            <p><b>{productName}</b></p>
            <p>${price}</p>
            <div className="countHandler">
                <button onClick={()=>{removeFromCart(id)}}>-</button>
                <input value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id)}/>
                <button onClick={()=>{addToCart(id)}}>+</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem;