import React from 'react'
import "./checkoutProduct.css"
import config from "../../config.json";
import axios from 'axios';
import cogoToast from 'cogo-toast';

//{code, image, title, price, rating}
class CheckoutProduct extends React.Component {

    constructor(props) {
        super(props);
    }
    
    removeFromBasket = (code) => {
        axios.post(config.SERVER + config.API + config.REST.SHOPPING_CART + "/" + code, {}, { headers: { 'Authorization': localStorage.getItem('AUTH_TOKEN')} }).then(function (response) {
            console.log(response);
            window.location.reload("/")
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render() {
        return (
            <div className="checkoutProduct">
                <img src={this.props.image} alt=""/>
                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">{this.props.title}</p>
                    <p className="checkoutProduct__price">
                        <small>$</small>
                        <strong>{this.props.price}</strong>
                    </p>

                    <div className="checkoutProduct__rating">
                        {Array(this.props.rating).fill().map((index) => (
                            <i key="{index}" class="fa fa-star"></i>
                        ))}
                    </div>
                    <button onClick={() => this.removeFromBasket(this.props.code)}>Remove from basket</button>
                </div>
            </div>
        )
    }
}

export default CheckoutProduct