//import { createApp, reactive } from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/css/all.css'
import router from './router'

//import { initializeApp } from "firebase/app";
//import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

//const firebaseConfig = {
// apiKey: "AIzaSyAHboKLVVQClua9tbn-pZP56G8-WbCT0wk",

//     authDomain: "short-course-c76bc.firebaseapp.com",

//         projectId: "short-course-c76bc",

//             storageBucket: "short-course-c76bc.appspot.com",

//                 messagingSenderId: "681386967584",

//                     appId: "1:681386967584:web:fb269b8c2762199a627245",
// };

// Initialize Firebase

//const firebase_app = initializeApp(firebaseConfig);
//const database = getDatabase(firebase_app);
// const store = Vue.observable({ database: database });

// Vue.prototype.$store = store;


createApp(App).use(router).mount('#app')


