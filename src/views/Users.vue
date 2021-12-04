<template>
  <div v-if="isAdmin" class="container">
    <h1 class="title is-3 has-text-centered">Users</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
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
        <td>{{ data.role }}</td>
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