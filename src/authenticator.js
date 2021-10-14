import config from "./config.json";
import axios from 'axios';

//TODO configurazione globale
//TODO da rinominare alla fine del refactoring

// signInWithEmailAndPassword(email, password)
//createUserWithEmailAndPassword(email, password)

export const signInWithEmailAndPassword = (email, password) => {

    axios.post(config.SERVER_URL + config.REST.LOGIN.uri, JSON.stringify({"username": email, "password": password})).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}


function createUserWithEmailAndPassword() {

}


