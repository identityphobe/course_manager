<template>
  <h1 class="title is-3 has-text-centered">Edit {{ ID }}</h1>
  <section class="container">
    <div class="box">
      <div class="columns">
        <div class="column"></div>
        <div class="column mx-6">
          <form onsubmit="return false">
            <div class="field">
              <label class="label">Full Name</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  v-model="user.fullName"
                  placeholder="Your Full Name"
                  required
                />
              </div>
              <p class="help is-danger" v-if="isSubmitted && !user.fullName">
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
            <div v-if="role === 'Admin'">
              <label class="label">Role</label>
              <div class="control">
                <div class="select">
                  <select v-model="user.role">
                    <option disabled value="">Role</option>
                    <option value="User">Participant</option>
                    <option value="Speaker">Speaker</option>
                  </select>
                </div>
                <p class="help is-danger" v-if="isSubmitted && !role">
                  Required
                </p>
              </div>
            </div>
            <!-- <div class="field">
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
          </div> -->

            <!-- <div class="field">
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
          </div> -->

            <div class="field is-grouped is-grouped-centered">
              <div class="control">
                <input
                  @click="editUserData"
                  type="submit"
                  class="button is-link mt-4"
                  value="Submit"
                />
              </div>
            </div>
          </form>
        </div>

        <div class="column"></div>
      </div>
    </div>
  </section>
</template>


<script>
import database from "../database";
import router from "../router/index.js";
import { child, get, ref, set, remove } from "firebase/database";
export default {
  name: "EditUser",

  data() {
    return {
      currentID: "",
      ID: "",

      isSubmitted: false,
      user: {},
      role: "",
      //TODO: Check if username is available
      //TODO: Check password length and complexity
    };
  },
  created() {
    this.ID = this.$route.params.id;
    this.currentID = this.$route.params.id;
    this.role = localStorage.getItem("role");
    const fetchUser = async () => {
      const dbRef = ref(database);
      get(child(dbRef, `users/${this.ID}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            this.user = snapshot.val();
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchUser();
  },
  methods: {
    editUserData() {
      this.isSubmitted = true;
      if (this.ID && this.user.fullName) {
        let newUserData = {
          ...this.user,
          role: this.user.role,
          fullName: this.user.fullName,
          username: this.ID,
        };
        let currentIDRef = ref(database, `users/${this.currentID}`);
        remove(currentIDRef).then(() => {
          set(ref(database, "users/" + this.ID), newUserData).then(() => {
            router.push("/users/" + this.ID + "/profile?userEdited=true");
          });
        });
      }
    },
  },
};
</script>