import "./Cart.css"

import React, { useContext } from 'react'

import CartItem from './CartItem'
import { PRODUCTS } from '../../Products'
import { ShopContext } from '../../Context/ShopContext'
import {useNavigate} from "react-router-dom";

const Cart = () => {
    const {cartItems,getTotalCartAmount}=useContext(ShopContext);
    const totalAmount=getTotalCartAmount();
    const navigate=useNavigate()
  return (
    <div className='cart'>
        <div>
            <h1>Your cart items</h1>
        </div>
        <div className="cartItems">
            {PRODUCTS.map((product) => {
            if(cartItems[product.id] !==0 ){
                return <CartItem product={product} />
            }
            })}
        </div>
        {totalAmount>0 ? <div className="checkout">
            <p>Subtotal: ${totalAmount}</p>
            <button onClick={()=>navigate("/")}>Continue Shopping</button>
            <button onClick={()=>{alert("this functionality will be added later")}}>Checkout</button> 
        </div>: <h1>Your Cart is empty</h1>}
        
    </div>
  )
}

export default Cart;