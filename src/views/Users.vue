<template>
  <div v-if="isAdmin" class="container">
    <div v-if="this.$route.query.userDeleted" class="section">
      <div class="notification is-success">
        <button class="delete"></button>
        User {{ $route.query.user }} deleted
      </div>
    </div>
    <h1 class="title is-3 has-text-centered">Users</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Username</th>
          <th>Full Name</th>
          <th>Role</th>
        </tr>
      </thead>
      <tr v-for="(data, user) in users" :key="user">
        <!-- <router-link :to="course.link">{{ part }}</router-link> -->
        <td>
          <router-link :to="'/users/' + user + '/profile'">{{
            user
          }}</router-link>
        </td>
        <td>
          {{ data.fullName }}
        </td>
        <td v-if="data.role === 'User'">Participant</td>
        <td v-else>{{ data.role }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import database from "../database";
import { child, get, ref } from "firebase/database";
Object.filter = (obj, predicate) =>
  Object.keys(obj)
    .filter((key) => predicate(obj[key]))
    .reduce((res, key) => ((res[key] = obj[key]), res), {});
export default {
  name: "Users",
  data() {
    return {
      users: {},
      isAdmin: localStorage.getItem("role") === "Admin",
    };
  },
  created() {
    const dbRef = ref(database);

    const fetchUsers = async () => {
      get(child(dbRef, `users`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            this.users = snapshot.val();
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchUsers();
  },
};
</script>

<style scoped>
.fa-check-circle {
  color: green;
  cursor: pointer;
}

.fa-check-circle.absent {
  color: gray;
}
</style>