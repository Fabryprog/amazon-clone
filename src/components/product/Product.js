import React from 'react'
import "./Product.css"
import config from "../../config.json";
import axios from 'axios';
import cogoToast from 'cogo-toast';
import {Link, useHistory} from "react-router-dom"

//{code, title, price, rating, image}
class Product extends React.Component {

    constructor(props) {
        super(props);
  
        this.state = {products: []}
  
    }

    addToBasket (code) {
        axios.post(config.SERVER + config.API + config.REST.SHOPPING_CART, {"code": code}, { headers: { 'Authorization': localStorage.getItem('AUTH_TOKEN')} }).then(function (response) {
            console.log(response);
            cogoToast.success("Article added to basket!")
        })
        .catch(function (error) {
            console.log(error);
            if(error.response.status == 403) {
                //redirect to login
                window.location.reload("/login")
            }
        })
    }

    render() {
        return (
            <div className="product">
                <div className="product__info">
                    <p>{this.props.title}</p>
                    <p className="product__price">
                        <small>$</small>
                        <strong>{this.props.price}</strong>
                    </p>
                    <div className="product__rating">
                        {Array(this.props.rating).fill().map((index) => (
                            <i key="{index}" class="fa fa-star"></i>
                        ))}
                    </div>
                </div>
                <img src={this.props.image} alt=""/>
                <button onClick={() => this.addToBasket(this.props.code)}>Add to basket</button>
            </div>
        )
    }
}

export default Product
