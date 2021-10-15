import React from 'react'
import "./Home.css"
import Product from "../product/Product.js"
import config from "../../config.json";
import axios from 'axios';

import { bannerImg } from '../../products'

let products = [];

function Home() {
    setTimeout(() => {
        //NO AUTH
        axios.get(config.SERVER + config.API + config.REST.PRODUCT_LIST).then(function (response) {
            console.log(response);
            products = response.data;
            this.setState(state => ({ loaded: true})); 
        })
        .catch(function (error) {
            console.log(error);
        })
    }, 1000);

    return (
        <div className="home">
            <img className="home__image" src={bannerImg} alt=""/>
            
            {/*product id, title, price, rating */}

            <div className="home__row">
                {products.map(item => {
                    return (
                        <Product
                            code={item.code}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />

                    )
                })}

            </div>

        </div>

    )
}

export default Home
