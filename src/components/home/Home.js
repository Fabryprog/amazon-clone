import React from 'react'
import "./Home.css"
import Product from "../product/Product.js"
import config from "../../config.json";
import axios from 'axios';

import { bannerImg } from '../../products'


class Home extends React.Component {
    
    constructor(props) {
      super(props);

      this.state = {products: []}

        //NO AUTH
        axios.get(config.SERVER + config.API + config.REST.PRODUCT_LIST).then((response) => {
            console.log(response);
            this.setState({products : response.data});
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        
        return (
            <div className="home">
                <img className="home__image" src={bannerImg} alt=""/>
                
                {/*product id, title, price, rating */}

                <div className="home__row">
                    {this.state.products.map(item => {
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
}

export default Home
