import React from 'react'
import "./Product.css"
import { useStateValue } from "../stateProvider/StateProvider"
import config from "../../config.json";
import axios from 'axios';

function Product({code, title, price, rating, image}) {
    const [{}, dispatch] = useStateValue();
    const addToBasketOLD = () => {
        //Add item to basket...
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                code,
                title,
                image,
                price,
                rating
            }
        })
    };

    const addToBasket = () => {
        axios.post(config.SERVER + config.API + config.REST.SHOPPING_CART, {"code": code}, { headers: { 'Authorization': localStorage.getItem('AUTH_TOKEN')} }).then(function (response) {
            console.log(response);
            //TODO web notify
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((index) => (
                        <i key={index} class="fa fa-star"></i>
                    ))}
                </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
