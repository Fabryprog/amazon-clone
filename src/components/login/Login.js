import React, {useState} from 'react'
import "./Login.css"
import {Link, useHistory} from "react-router-dom"
import {auth} from "../../firebase"
//import {signInWithEmailAndPassword} from "../../authenticator"
import config from "./../../config.json";
import axios from 'axios';

function Login() {

    const history = useHistory()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //RESET
    localStorage.setItem("AUTH_TOKEN", null)


    const signIn = (event) => {
        event.preventDefault()
        
        axios.post(config.SERVER + config.REST.LOGIN, JSON.stringify({"username": email, "password": password})).then(function (response) {
            console.log(axios.defaults.headers);
            if(response.status == 200) {
            localStorage.setItem("AUTH_TOKEN", response.headers["x-token"])
            }
            //redirect to home page
            history.push("/")
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const register = (event) => {
        event.preventDefault()
        //TODO
    }
    return (
        <div className="login">
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" className="login__logo"/>
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email:</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>

                    <h5>Password:</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>

                    <button type="submit" onClick={signIn}  className="login__signInBtn">sign in</button>
                    <p>
                        by signing in you agree to amazon condition of use and sale.Please see our privacy notice, our cookies notice and our interest based ad notice. 
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login
