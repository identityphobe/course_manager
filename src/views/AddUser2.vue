
<template>
  <!-- if logged in, don't show registration page...or... -->
  <Page title="Add a User" />
  <section class="container">
    <div class="columns">
      <div class="column"></div>
      <div class="column mx-6">
        <form>
          <div class="field">
            <label class="label">Full Name</label>
            <div class="control">
              <input
                class="input"
                type="text"
                v-model="fullName"
                placeholder="Your Full Name"
                required
              />
            </div>
            <p class="help is-danger" v-if="isSubmitted && !fullName">
              Required
            </p>
          </div>
          <div class="field">
            <label class="label">Username</label>
            <div class="control">
              <input
                class="input"
                type="text"
                v-model="ID"
                placeholder="ID"
                required
              />
            </div>
            <p class="help is-danger" v-if="isSubmitted && !ID">Required</p>
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
              Required
            </p>
          </div>

          <div class="field">
            <label class="label">Confirm Password</label>
            <div class="control">
              <input
                class="input"
                type="password"
                v-model="confirmPassword"
                required
                placeholder="Password"
              />
            </div>
            <p class="help is-danger" v-if="isSubmitted && !confirmPassword">
              Required
            </p>
            <p class="help is-danger" v-if="password != confirmPassword">
              Both passwords do not match
            </p>
          </div>

          <label class="label">Role</label>
          <div class="control">
            <div class="select">
              <select v-model="role">
                <option disabled value="">Role</option>
                <option value="User">Participant</option>
                <option value="Speaker">Speaker</option>
              </select>
            </div>
            <p class="help is-danger" v-if="isSubmitted && !role">Required</p>
          </div>

          <div class="field is-grouped is-grouped-centered">
            <div class="control">
              <input
                @click="writeUserData"
                type="submit"
                class="button is-link mt-5"
                value="Submit"
              />
            </div>
          </div>
        </form>
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
      confirmPassword: "",
      fullName: "",
      isSubmitted: false,
      role: "",
      //TODO: Check if username is available
      //TODO: Check password length and complexity
    };
  },
  methods: {
    writeUserData() {
      this.isSubmitted = true;
      if (
        this.ID &&
        this.password &&
        this.password == this.confirmPassword &&
        this.role
      ) {
        set(ref(database, "users/" + this.ID), {
          password: this.password,
          fullName: this.fullName,
          role: this.role,
          courses: 0,
        });

        router.push("/users" + "?userCreated=true");
      }
    },
  },
};
</script>