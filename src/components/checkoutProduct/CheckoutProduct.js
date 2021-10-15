import React from 'react'
import "./checkoutProduct.css"
import config from "../../config.json";
import axios from 'axios';
import cogoToast from 'cogo-toast';

function CheckoutProduct({code, image, title, price, rating}) {
    const removeFromBasket = () => {
        axios.post(config.SERVER + config.API + config.REST.SHOPPING_CART + "/" + code, {}, { headers: { 'Authorization': localStorage.getItem('AUTH_TOKEN')} }).then(function (response) {
            console.log(response);
            window.location.reload(false); 
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    return (
        <div className="checkoutProduct">
            <img src={image} alt=""/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((index) => (
                        <p key={index}>star</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct