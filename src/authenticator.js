import config from "./config.json";
import axios from 'axios';

//TODO configurazione globale
//TODO da rinominare alla fine del refactoring

// signInWithEmailAndPassword(email, password)
//createUserWithEmailAndPassword(email, password)

export const signInWithEmailAndPassword = (username, password) => {

    axios.post(config.SERVER + config.REST.LOGIN, JSON.stringify({"username": username, "password": password}))
    .then(function (response) {
        console.log(axios.defaults.headers);
        if(response.status == 200) {
          localStorage.setItem("AUTH_TOKEN", response.headers["x-token"])
        }
        return true
      })
      .catch(function (error) {
        console.log(error);
      });
}


function createUserWithEmailAndPassword() {

}


