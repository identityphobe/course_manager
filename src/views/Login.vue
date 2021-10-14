<template>
  {{ message }}
  <Page title="Log In" />
  <div class="columns">
    <div class="column"></div>
    <div class="column mx-6">
      <div class="field">
        <label class="label">ID</label>
        <div class="control">
          <input class="input" type="text" placeholder="ID" />
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input is-success" type="text" placeholder="Password" />
        </div>
        <p class="help is-success">This username is available</p>
        <p class="help is-danger">This username is unavailable</p>
      </div>

      <div class="field is-grouped is-grouped-centered">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
        <div class="control">
          <button class="button is-link is-light">Cancel</button>
        </div>
      </div>
    </div>

    <div class="column"></div>
  </div>
</template>

<script>
// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";

//TODO: Add SDKs for Firebase products that you want to use

//https://firebase.google.com/docs/web/setup#available-libraries

//Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: "AIzaSyAHboKLVVQClua9tbn-pZP56G8-WbCT0wk",

//   authDomain: "short-course-c76bc.firebaseapp.com",

//   projectId: "short-course-c76bc",

//   storageBucket: "short-course-c76bc.appspot.com",

//   messagingSenderId: "681386967584",

//   appId: "1:681386967584:web:fb269b8c2762199a627245",
// };

//Initialize Firebase

//const firebase_app = initializeApp(firebaseConfig);
export default {
  name: "Login",
  data() {
    return {
      message: "Hello",
    };
  },
};
</script>