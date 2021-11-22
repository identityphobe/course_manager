<template>
  <h1 class="title is-3 has-text-centered">{{ course.name }}</h1>

  <div class="columns">
    <div class="column"></div>
    <div class="column is-three-fifths">
      <div class="container">
        <div v-if="!doesCourseExists" class="has-text-centered">
          The course you are looking for does not exist.
        </div>
        <div v-else class="box">
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
            <div class="column has-text-centered">
              <router-link :to="participantsLink"
                ><button class="button is-link">
                  View Participants
                </button></router-link
              >
            </div>
            <div class="column has-text-centered">
              <button class="button is-link">Edit</button>
            </div>
            <div class="column has-text-centered">
              <button class="button is-link">Evaluations</button>
            </div>
            <div class="column has-text-centered">
              <button
                class="button is-link has-text-centered"
                @click="deleteCourse"
              >
                Delete
              </button>
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
                Join
              </button>
              <button v-else class="button is-link" @click="dropCourse">
                Drop
              </button>

              <!-- <button class="button is-link" @click="test">Test</button> -->
            </div>
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
import { child, get, ref, remove, set } from "firebase/database";
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
      participantsLink: `/courses/${this.$route.params.id}/participants`,
      hasJoinedCourse: false,
      doesCourseExists: false,
    };
  },
  methods: {
    joinCourse() {
      const dbRef = ref(database);
      get(child(dbRef, `users/${this.ID}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            this.user = snapshot.val();
            // if exists, don't add
            if (this.user.courses === 0) {
              console.log("AUK");
              this.user.courses = [this.courseID];
              console.log(this.user.courses);
              // this.user.courses[0] = this.courseID;
            } else {
              if (this.user.courses.indexOf(this.courseID) != -1) {
                this.user.courses.push(this.courseID);
              }
            }
            set(child(dbRef, `users/${this.ID}`), this.user);
            this.hasJoinedCourse = true;
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    dropCourse() {
      const dbRef = ref(database);
      let index = this.user.courses.indexOf(this.courseID);
      console.log(index);
      if (index > -1) {
        this.user.courses.splice(index, 1);
        console.log(this.user.courses.length);
        if (this.user.courses.length === 0) {
          this.user.courses = 0;
        }
        set(child(dbRef, `users/${this.ID}`), this.user);
      }
    },
    deleteCourse() {
      // const dbRef = ref(database);
      // const dbRef = ref(database);
      // console.log("Deleting!");
      let toRemoveRef = ref(database, `courses/${this.courseID}`);
      console.log(toRemoveRef);
      remove(toRemoveRef);
      // remove(toRemoveRef);
    },
  },
  computed: {},
  created() {
    const courseID = this.$route.params.id;

    const dbRef = ref(database);

    const fetchCourse = async () => {
      get(child(dbRef, `courses/${courseID}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            this.course = snapshot.val();
            this.doesCourseExists = true;
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

            for (const idx in this.user.courses) {
              if (this.user.courses[idx] === this.courseID) {
                this.hasJoinedCourse = true;
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

    fetchUser();

    // const hasJoinedCourse = async () => {
    //   console.log(this.user.courses);
    //   if (!this.user.courses) {
    //     console.log("WHAT!!");
    //     return false;
    //   }
    //   for (const course of this.user.courses) {
    //     console.log(course);
    //     console.log(this.courseID);
    //     if (course === this.courseID) {
    //       return true;
    //     }
    //   }

    //   return false;
    // };

    // console.log(hasJoinedCourse());
  },
};
</script>

<style scoped>
:disabled {
  background-color: white;
  /* font: black; */
}
</style>