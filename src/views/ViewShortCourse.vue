<template>
  <h1 class="title is-3 has-text-centered">{{ course.name }}</h1>

  <div class="columns">
    <div class="column"></div>
    <div class="column is-three-fifths">
      <div class="container">
        <div class="box">
          <label class="label">Name</label>
          <p>{{ course.name }}</p>
          <label class="label">Objective</label>
          <p>{{ course.objective }}</p>
          <label class="label">Certificate</label>
          <p>{{ course.certificate }}: {{ course.certificateModule }}</p>

          <div v-if="isAdmin">
            <label class="label">Target Audience</label>
            <ul v-for="audience in course.targetAudience" :key="audience">
              <li>{{ audience }}</li>
            </ul>
          </div>
          <label class="label">Venue</label>
          <p>{{ course.venue }}</p>
          <label class="label">Capacity</label>
          <p>{{ course.capacity }}</p>
          <label class="label">Start Date</label>
          <p>{{ course.dateStart }}</p>
          <label class="label">End Date</label>
          <p>{{ course.dateEnd }}</p>
          <label class="label">Agenda</label>
          <a>View Agenda</a>
          <div v-if="isAdmin">
            <label class="label mt-4">Costs</label>
            <div class="columns is-vcentered">
              <div class="column is-one-fifth">Food and Beverage</div>
              <div class="column is-one-third">
                <div class="field has-addons">
                  <p class="control">
                    <a class="button is-static">RM</a>
                  </p>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      disabled
                      :value="course.costFB"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="columns is-vcentered">
              <div class="column is-one-fifth">Instructor Fee</div>
              <div class="column is-one-third">
                <div class="field has-addons">
                  <p class="control">
                    <a class="button is-static">RM</a>
                  </p>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      disabled
                      placeholder="-"
                      :value="course.costInstructor"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="columns is-vcentered">
              <div class="column is-one-fifth">Course Module</div>
              <div class="column is-one-third">
                <div class="field has-addons">
                  <p class="control">
                    <a class="button is-static">RM</a>
                  </p>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      disabled
                      placeholder="-"
                      :value="course.costModule"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="columns is-vcentered">
              <div class="column is-one-fifth">Others</div>
              <div class="column is-one-third">
                <div class="field has-addons">
                  <p class="control">
                    <a class="button is-static">RM</a>
                  </p>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      disabled
                      placeholder="-"
                      :value="course.costOthers"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="columns is-vcentered">
              <div class="column is-one-fifth">Total</div>
              <div class="column is-one-third">
                <div class="field has-addons">
                  <p class="control">
                    <a class="button is-static">RM</a>
                  </p>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      disabled
                      placeholder="-"
                      :value="course.costTotal"
                    />
                  </div>
                </div>
              </div>
            </div>

            <label class="label">Approval Letter</label>
            <a>View Letter</a>

            <label class="label">Speaker Appointment Letter</label>
            <a>View Letter</a>
          </div>
          <label class="label">Poster</label>
          <a>View Poster</a>
          <div v-if="isAdmin" class="columns">
            <div class="column">
              <button class="button is-link">View Participants</button>
            </div>
            <div class="column">
              <button class="button is-link">Edit</button>
            </div>
          </div>
          <div v-else-if="isUser" class="columns">
            <div class="column"></div>
            <div class="column has-text-centered">
              <button
                v-if="!hasJoinedCourse"
                class="button is-link"
                @click="joinCourse"
              >
                Join {{ hasJoinedCourse }}
              </button>
              <button class="button is-link" @click="test">Test</button>
            </div>
            <div class="column"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="column"></div>
  </div>
</template>

<script>
// import route from "../router/index";
import database from "../database";
import { child, get, ref } from "firebase/database";
// import { cloneDeep } from "lodash";

export default {
  name: "ViewShortCourse",
  data() {
    return {
      isAdmin: localStorage.getItem("role") === "Admin",
      isUser: localStorage.getItem("role") === "User",
      ID: localStorage.getItem("ID"),
      user: {},
      course: "",
      courseID: this.$route.params.id,
    };
  },
  methods: {
    test() {
      console.log("HEYYA");
      console.log(this.user.courses);
      for (const course of this.user.courses) {
        console.log(course);
        console.log(this.user.courses);
        if (course === this.courseID) {
          return true;
        }
      }
      return false;
    },

    joinCourse() {
      const dbRef = ref(database);
      get(child(dbRef, `users/${this.ID}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            this.user = snapshot.val();
            console.log(this.user);
            if (!this.user.courses) {
              this.user.courses = [];
              this.user.courses[0] = this.courseID;
            }
            console.log(this.user);
            console.log(this.user.courses);
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  computed: {
    hasJoinedCourse() {
      console.log("HEYYA");
      console.log(this.user.courses);
      if (!this.user.courses) {
        return false;
      }
      for (const course of this.user.courses) {
        console.log(course);
        console.log(this.user.courses);
        if (course === this.courseID) {
          return true;
        }
      }
      return false;
    },
  },
  created() {
    const courseID = this.$route.params.id;

    const dbRef = ref(database);

    const fetchCourse = async () => {
      get(child(dbRef, `courses/${courseID}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            this.course = snapshot.val();
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchCourse();

    let ID = localStorage.getItem("ID");
    const fetchUser = async () => {
      const dbRef = ref(database);
      get(child(dbRef, `users/${ID}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            this.user = snapshot.val();
            console.log(this.user);
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
};
</script>

<style scoped>
:disabled {
  background-color: white;
  /* font: black; */
}
</style>