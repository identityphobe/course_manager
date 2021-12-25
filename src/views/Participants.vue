<template>
  <div class="container">
    <h1 class="title is-3 has-text-centered">
      Participants of {{ course.name }}
    </h1>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Attendance</th>
        </tr>
      </thead>
      <tr
        v-for="(attendance, participant) in course.participants"
        :key="participant"
      >
        <!-- <router-link :to="course.link">{{ part }}</router-link> -->
        <td>{{ participant }}</td>

        <td class="has-text-centered">
          <i
            @click="toggleAttendance(participant)"
            :class="{ fas: true, 'fa-check-circle': true, absent: !attendance }"
          ></i>
        </td>
        <td></td>
      </tr>
    </table>
    <button class="button is-link" @click="markAllAttend">
      Mark All Attend
    </button>
    <button class="button is-danger ml-4" @click="markAllAbsent">
      Mark All Absent
    </button>
    <!-- {{ participants }} -->
    <!-- <div class="box">Juliana Ahmad</div>
    <div class="box">Anasurimbor Kellhus</div> -->
  </div>
</template>

<script>
import database from "../database";
import { child, get, ref, set } from "firebase/database";
Object.filter = (obj, predicate) =>
  Object.keys(obj)
    .filter((key) => predicate(obj[key]))
    .reduce((res, key) => ((res[key] = obj[key]), res), {});
export default {
  name: "Participants",
  data() {
    return {
      participants: {},
      course: {},
    };
  },
  methods: {
    markAllAttend() {
      for (const participant in this.course.participants) {
        this.course.participants[participant] = true;
      }
      const courseID = this.$route.params.id;
      const courseRef = ref(database, `courses/${courseID}`);
      set(courseRef, this.course);
    },
    markAllAbsent() {
      for (const participant in this.course.participants) {
        this.course.participants[participant] = false;
      }
      const courseID = this.$route.params.id;
      const courseRef = ref(database, `courses/${courseID}`);
      set(courseRef, this.course);
    },
    toggleAttendance(participant) {
      this.course.participants[participant] =
        !this.course.participants[participant];
      console.log(this.course);
      const courseID = this.$route.params.id;
      const courseRef = ref(database, `courses/${courseID}`);
      set(courseRef, this.course);
    },
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
        .then(() => {
          fetchCourse();
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const fetchCourse = async () => {
      get(child(dbRef, `courses/${courseID}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            this.course = snapshot.val();
            console.log(this.course);
            if (!this.course.participants) {
              console.log("WEYYO");
              console.log(this.participants);
              this.course.participants = {};
              for (let participant in this.participants) {
                this.course.participants[participant] = false;
              }
            }
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchCourse();

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