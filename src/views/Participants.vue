<template>
  <div class="container">
    <h1 class="title is-3 has-text-centered">
      Participants for Short Course {{ $route.params.id }}
    </h1>
    <ul>
      <li v-for="(participant, index) in participants" :key="index">
        <!-- <router-link :to="course.link">{{ part }}</router-link> -->
        {{ index }}
      </li>
    </ul>
    <!-- {{ participants }} -->
    <!-- <div class="box">Juliana Ahmad</div>
    <div class="box">Anasurimbor Kellhus</div> -->
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
  name: "Participants",
  data() {
    return {
      participants: {},
    };
  },
  created() {
    const courseID = this.$route.params.id;

    const dbRef = ref(database);

    const fetchUsers = async () => {
      get(child(dbRef, `users`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            let participants = {};
            participants = Object.filter(snapshot.val(), (user) => {
              if (user.courses === 0) {
                return false;
              } else if (user.courses.some((id) => id === courseID)) {
                return true;
              }
            });
            this.participants = participants;
            console.log(participants);
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