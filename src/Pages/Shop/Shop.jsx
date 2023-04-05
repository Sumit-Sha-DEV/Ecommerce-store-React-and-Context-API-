import "./Shop.css"

import { PRODUCTS } from '../../Products'
import Product from './Product';
import React from 'react'

const Shop = () => {
    return (
        <div className="shop">
            <div className='shopTitle'>
                <h1>Horizon Shop </h1>
            </div>
            <div className="products">{PRODUCTS.map((product)=> <Product key={product.id} data={product}/>)
            }</div>
        </div>
    )
}

export default Shop