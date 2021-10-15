import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

//TODO: Add SDKs for Firebase products that you want to use

//https://firebase.google.com/docs/web/setup#available-libraries

//Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyAHboKLVVQClua9tbn-pZP56G8-WbCT0wk",

    authDomain: "short-course-c76bc.firebaseapp.com",

    databaseURL: "https://short-course-c76bc-default-rtdb.asia-southeast1.firebasedatabase.app",

    projectId: "short-course-c76bc",

    storageBucket: "short-course-c76bc.appspot.com",

    messagingSenderId: "681386967584",

    appId: "1:681386967584:web:fb269b8c2762199a627245",
};

//Initialize Firebase

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


export default database;