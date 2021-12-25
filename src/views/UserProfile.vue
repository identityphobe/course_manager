<template>
  <!-- {{ isAdmin }} -->
  <div v-if="this.$route.query.userEdited" class="section">
    <div class="notification is-success">
      <button class="delete"></button>
      User successfully edited
    </div>
  </div>
  <h1 class="title is-3 has-text-centered">Profile</h1>
  <div class="columns">
    <div class="column"></div>
    <div class="column is-three-fifths">
      <div class="container">
        <div class="box">
          <label class="label">Full Name</label>
          <p>{{ user.fullName }}</p>
          <label class="label">Username</label>
          <p>{{ ID }}</p>
          <label class="label" v-if="isAdmin">Role</label>
          <p v-if="isAdmin">
            {{ user.role }} <label class="label">Joined Courses</label>
          </p>

          <ul v-if="Object.keys(coursesJoined).length">
            <li v-for="course in coursesJoined" :key="course">
              <!-- TODO: process date -->
              <router-link :to="course.link">{{ course.name }}</router-link>
              <span v-if="!course.participants[ID]">{{
                " " +
                formatDate(course.dateStart) +
                " - " +
                formatDate(course.dateEnd)
              }}</span>
              <span v-else> (Attended)</span>
            </li>
          </ul>
          <p v-else>None</p>
          <div v-if="isAdmin" class="columns">
            <div class="column has-text-centered">
              <router-link class="button is-link" :to="editLink"
                >Edit</router-link
              >
            </div>
            <div class="column has-text-centered">
              <button class="button is-danger" @click="deleteUser">
                Delete
              </button>
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
import { ref, child, get, remove } from "firebase/database";
import router from "../router/index.js";
Object.filter = (obj, predicate) =>
  Object.keys(obj)
    .filter((key) => predicate(obj[key]))
    .reduce((res, key) => ((res[key] = obj[key]), res), {});
export default {
  name: "CoursesJoined",

  computed: {},
  data() {
    return {
      user: {},
      coursesJoined: {},
      ID: "",
      isAdmin: false,
      editLink: "",
    };
  },
  methods: {
    formatDate(date) {
      const splitDate = date.split("-");
      return `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;
    },
    deleteUser() {
      let toRemoveRef = ref(database, `users/${this.ID}`);
      remove(toRemoveRef);
      router.push("/users?userDeleted=true&ID=" + this.ID);
    },
  },
  created() {
    const dbRef = ref(database);
    this.ID = this.$route.params.id;
    this.isAdmin = localStorage.getItem("role") === "Admin";
    console.log(this.userRole);
    // const coursesJoined = [];
    const fetchUser = async (ref, id) => {
      get(child(ref, `users/${id}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            this.user = snapshot.val();
            console.log("No data available");
          }
        })
        .then(() => {
          console.log(this.user);

          for (let i = 0; i < this.user.courses.length; i++) {
            const key = this.user.courses[i];
            get(child(ref, `courses/${this.user.courses[i]}`))
              .then((snapshot) => {
                if (snapshot.exists()) {
                  this.coursesJoined[key] = snapshot.val();
                  this.coursesJoined[key].link = "/courses/" + key;
                } else {
                  console.log("No data available");
                }
              })
              .catch((error) => {
                console.error(error);
              });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchUser(dbRef, this.ID);
    this.editLink = "/users/" + this.$route.params.id + "/edit";
  },
};
</script>