import firebase from "firebase";
import config from "./config.json";

//TODO configurazione globale
//TODO da rinominare alla fine del refactoring

// signInWithEmailAndPassword(email, password)
//createUserWithEmailAndPassword(email, password)

function signInWithEmailAndPassword(email, password) {
    const requestOptions = {
        method: config.REST.LOGIN.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "username": email, "password": password })
    };
    fetch(config.SERVER_URL + config.REST.LOGIN.uri, requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
}


function createUserWithEmailAndPassword() {

}


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB9wrSph4bUfZsXZC0iCBlPlULjoIvLMYQ",
    authDomain: "clone-2c795.firebaseapp.com",
    databaseURL: "https://clone-2c795.firebaseio.com",
    projectId: "clone-2c795",
    storageBucket: "clone-2c795.appspot.com",
    messagingSenderId: "334920753365",
    appId: "1:334920753365:web:c8246d35bdb751aa94c25c",
    measurementId: "G-WJ6WDMR0C3"
})

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };