import React from 'react'
import "./Checkout.css"
import CheckoutProduct from "../checkoutProduct/CheckoutProduct"
import Subtotal from "../subtotal/Subtotal"

import config from "../../config.json";
import axios from 'axios';


class Checkout extends React.Component {    
    
    constructor(props) {
        super(props);
  
        this.state = {basket: []}

        axios.get(config.SERVER + config.API + config.REST.SHOPPING_CART, { headers: { 'Authorization': localStorage.getItem('AUTH_TOKEN')} }).then((response) => {
            console.log(response);

            this.setState({basket : response.data});
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <div className="checkout">
                <div className="checkout__left">
                    <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt="ad" />

                    {this.state.basket?.length === 0 ? (
                        <div>
                            <h2>Your shopping basket is empty</h2>
                            <p>
                                You have no items in your basket. To buy one or add item to basket click the add to basket button
                            </p>
                        </div>
                    ) : (
                        <div>
                            <h2 className="checkout__title">Your shopping basket</h2>
                            {this.state.basket.map(item => {
                                console.log("BASKET")
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
                {this.state.basket?.length > 0 && 
                    <div className="checkout__right">
                        <Subtotal/>
                    </div>
                }
                
                
            </div>
        )
    }
}

export default Checkout
