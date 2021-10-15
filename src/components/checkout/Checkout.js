import React from 'react'
import "./Checkout.css"
import CheckoutProduct from "../checkoutProduct/CheckoutProduct"
import Subtotal from "../subtotal/Subtotal"

import config from "../../config.json";
import axios from 'axios';

let basket = []

function Checkout() {    
    axios.get(config.SERVER + config.API + config.REST.SHOPPING_CART, { headers: { 'Authorization': localStorage.getItem('AUTH_TOKEN')} }).then(function (response) {
        console.log(response);
        basket = response.data;
    })
    .catch(function (error) {
        console.log(error);
    })

    return (
        <div className="checkout">
            <div className="checkout__left">
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your shopping basket is empty</h2>
                        <p>
                            You have no items in your basket. To buy one or add item to basket click the add to basket button
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title">Your shopping basket</h2>
                        {basket.map(item => {
                            console.log(item)
                        return (
                            <CheckoutProduct
                                code={item.code}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />

                        )
                        })}
                    </div>
                )}

            </div>
            {basket?.length > 0 && 
                <div className="checkout__right">
                    <Subtotal/>
                </div>
            }
            
            
        </div>
    )
}

export default Checkout
