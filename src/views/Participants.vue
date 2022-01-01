<template>
  <div class="container">
    <h1 class="title is-3 has-text-centered">
      Participants of {{ course.name }}
    </h1>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th v-if="course.hasCompleted">Attendance</th>
        </tr>
      </thead>
      <tr
        v-for="(attendance, participant) in course.participants"
        :key="participant"
      >
        <!-- <router-link :to="course.link">{{ part }}</router-link> -->
        <td>{{ participant }}</td>

        <td v-if="course.hasCompleted" class="has-text-centered">
          <i
            @click="toggleAttendance(participant)"
            :class="{ fas: true, 'fa-check-circle': true, absent: !attendance }"
          ></i>
        </td>
        <td></td>
      </tr>
    </table>
    <div v-if="Object.keys(participants).length && course.hasCompleted">
      <button class="button is-link" @click="markAllAttend">
        Mark All Attend
      </button>
      <button class="button is-danger ml-4" @click="markAllAbsent">
        Mark All Absent
      </button>
    </div>
    <div class="is-size-7">
      <i
        >*Attendance marking will be available once the course is complete ({{
          formatDate(course.dateEnd)
        }})</i
      >
    </div>
  </div>

  <!-- {{ participants }} -->
  <!-- <div class="box">Juliana Ahmad</div>
    <div class="box">Anasurimbor Kellhus</div> -->
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
    formatDate(date) {
      if (!date) {
        return;
      }
      const splitDate = date.split("-");
      return `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;
    },
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
    setCompletionStatus(dateEnd) {
      dateEnd = new Date(dateEnd);
      dateEnd.setHours(0);
      dateEnd.setMinutes(0);
      dateEnd.setSeconds(0);
      dateEnd.setMilliseconds(0);

      let today = new Date();
      today.setHours(0);
      today.setMinutes(0);
      today.setSeconds(0);
      today.setMilliseconds(0);

      console.log(today.getTime());
      console.log(dateEnd.getTime());
      console.log(today.getTime() > dateEnd.getTime());
      if (today.getTime() > dateEnd.getTime()) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    const courseID = this.$route.params.id;

    const dbRef = ref(database);

    const fetchUsers = async () => {
      get(child(dbRef, `users`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            let participants = {};
            participants = Object.filter(snapshot.val(), (user) => {
              if (user.courses === 0) {
                return false;
              } else if (user.courses.some((id) => id === courseID)) {
                return true;
              }
            });
            this.participants = participants;
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
            this.course.hasCompleted = this.setCompletionStatus(
              this.course.dateEnd
            );
            if (!this.course.participants) {
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