<template>
  <h1 class="title is-3 has-text-centered">Log In</h1>
  <div class="columns">
    <div class="column"></div>

    <div class="column mx-6">
      <div class="field">
        <label class="label">ID</label>
        <div class="control">
          <input v-model="ID" class="input" type="text" placeholder="ID" />
        </div>
        <p class="help is-danger" v-if="isSubmitted && !ID">
          Username is required
        </p>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input
            v-model="password"
            class="input is-success"
            type="password"
            placeholder="Password"
          />
        </div>
        <p class="help is-danger" v-if="isSubmitted && !password">
          Password is required
        </p>
        <p
          v-else-if="isSubmitted && !doesCombinationExists"
          class="help is-danger"
        >
          ID/Password combination is either unavailable or wrong
        </p>
      </div>

      <div class="columns">
        <div class="column">
          <div class="field is-grouped is-grouped-centered">
            <div class="control">
              <input
                @click="authenticate"
                class="button is-link"
                type="submit"
                value="Submit"
              />
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field is-grouped is-grouped-centered">
            <div class="control">
              <input
                @click="clearFields"
                class="button is-light"
                type="reset"
                value="Clear"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="column"></div>
  </div>
</template>

<script>
import database from "../database";
import { ref, child, get } from "firebase/database";
import router from "../router/index.js";
// import { ref, set } from "firebase/database";
// import router from "../router/index.js";
// import Page from "../components/Page.vue";
export default {
  name: "Login",

  data() {
    return {
      ID: "",
      password: "",
      storedPassword: "",
      role: "",
      doesCombinationExists: false,
      doesIDExists: false,
      isSubmitted: false,
    };
  },
  created() {
    window.addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        this.authenticate();
      }
    });
  },
  methods: {
    authenticate() {
      this.isSubmitted = true;
      const dbRef = ref(database);
      get(child(dbRef, `users/${this.ID}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            this.doesIDExists = true;
            console.log(snapshot.val());
            const userInfo = snapshot.val();
            this.storedPassword = userInfo.password;
            this.doesCombinationExists =
              this.doesIDExists && this.password == this.storedPassword;

            // console.log("Combination:" + this.doesCombinationExists);
            // console.log(`Stored Password: ${this.storedPassword}`);
            if (this.doesCombinationExists) {
              localStorage.setItem("ID", this.ID);
              localStorage.setItem("role", userInfo.role);
              router.push("/users/" + this.ID + "?loggedIn=true");
            }
          } else {
            this.doesCombinationExists = false;
            console.log("Unavailable or mismatch");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    clearFields() {
      this.ID = "";
      this.password = "";
    },
  },
};
</script>