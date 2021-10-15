<template>
  <Page title="Register" />
  <section class="container">
    <div class="columns">
      <div class="column"></div>
      <div class="column mx-6">
        <div class="field">
          <label class="label">ID</label>
          <div class="control">
            <input
              class="input"
              type="text"
              v-model="ID"
              placeholder="ID"
              required
            />
          </div>
          <p class="help is-danger" v-if="isSubmitted && !ID">
            Username is required
          </p>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input
              class="input"
              type="password"
              v-model="password"
              required
              placeholder="Password"
            />
          </div>
          <p class="help is-danger" v-if="isSubmitted && !password">
            Password is required
          </p>
        </div>

        <div class="field is-grouped is-grouped-centered">
          <div class="control">
            <button @click="writeUserData" class="button is-link">
              Submit
            </button>
          </div>
        </div>
      </div>

      <div class="column"></div>
    </div>
  </section>
</template>


<script>
import database from "../database";
import { ref, set } from "firebase/database";
import router from "../router/index.js";
import Page from "../components/Page.vue";
export default {
  name: "Register",
  components: {
    Page,
  },
  data() {
    return {
      ID: "",
      password: "",
      isSubmitted: false,
      //TODO: Check if username is available
      //TODO: Check password length and complexity
    };
  },
  methods: {
    writeUserData() {
      this.isSubmitted = true;
      if (this.ID && this.password) {
        set(ref(database, "users/" + this.ID), {
          password: this.password,
        });
        router.push("/users/" + this.ID + "?registerSuccess=true");
      }
    },
  },
};
</script>