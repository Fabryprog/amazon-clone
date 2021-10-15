import React from 'react'
import CurrencyFormat from 'react-currency-format';
import "./Subtotal.css"
import config from "../../config.json";
import axios from 'axios';
import { RepeatOneSharp } from '@material-ui/icons';

let basket = []

class Subtotal extends React.Component {

    constructor(props) {
        super(props);
  
        this.state = {basket: []}


        axios.get(config.SERVER + config.API + config.REST.SHOPPING_CART, { headers: { 'Authorization': localStorage.getItem('AUTH_TOKEN')} }).then((response) => {
            console.log(response);
            this.setState({basket: response.data, total : response.data?.reduce((amount, item) => item.price + amount, 0)});
        })
        .catch((error) => {
            console.log(error);
        })    
    }
    
    
    render() {
        return (
            <div className="subtotal">
                {/* price */}

                <CurrencyFormat 
                    renderText = {(value) => (
                        <>
                            <p>
                    ( Subtotal {this.state.basket.length} items ) : <strong>{`${value}`}</strong>
                            </p>
                            <small className="subtotal__gift">
                                <input type="checkbox"/> This order contains
                            </small>
                        </>
                    )}
                    value={this.state.total} 
                    displayType={'text'} 
                    thousandSeparator={true} 
                    prefix={'$'} 
                />
                
                <button>Proceed to checkout</button>
            </div>
        )
    }
}

export default Subtotal
