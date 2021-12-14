<template>
  <h1 class="title is-3 has-text-centered">{{ course.name }}</h1>
  <h2 v-if="isCapacityFull" class="title is-4 has-text-centered">
    <span v-if="isCapacityFull"
      >(<span id="capacityIndicator">Full</span>)</span
    >
  </h2>
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
          <label class="label">Department</label>
          <p>{{ course.department }}</p>
          <label class="label">Certificate</label>
          <p>
            {{ course.certificate
            }}<span v-if="course.certificateModule"
              >: {{ course.certificateModule }}</span
            >
          </p>

          <div v-if="isAdmin">
            <label class="label">Target Audience</label>
            <ul v-for="audience in course.targetAudience" :key="audience">
              <li>{{ audience }}</li>
            </ul>
          </div>
          <label class="label">Venue</label>
          <p>{{ course.venue }}</p>
          <label class="label">Capacity</label>
          <p>
            {{ currentCapacity }}/{{ course.capacity
            }}<span v-if="isCapacityFull"
              >(<span id="capacityIndicator">Full</span>)</span
            >
          </p>
          <label class="label">Start Date</label>
          <p>{{ formatDate(course.dateStart) }}</p>

          <label class="label">End Date</label>
          <p>{{ formatDate(course.dateEnd) }}</p>
          <label class="label">Agenda</label>
          <a
            v-if="oldUploads['agenda']"
            :href="oldUploads['agenda']"
            target="_blank"
            >View</a
          >
          <a v-else>Unavailable.</a>
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
                      @change="updateTotal"
                      :value="course.costTotal"
                    />
                  </div>
                </div>
              </div>
            </div>

            <label class="label">Approval Letter</label>
            <a
              v-if="oldUploads['approvalLetter']"
              :href="oldUploads['approvalLetter']"
              target="_blank"
              >View</a
            >
            <a v-else>Unavailable</a>

            <label class="label">Speaker Appointment Letter</label>
            <a
              v-if="oldUploads['speakerLetter']"
              :href="oldUploads['speakerLetter']"
              target="_blank"
              >View</a
            >
            <a v-else>Unavailable</a>
          </div>
          <label class="label">Poster</label>
          <a
            v-if="oldUploads['poster']"
            :href="oldUploads['poster']"
            target="_blank"
            >View</a
          >
          <a v-else>Unavailable.</a>
          <label class="label">Attended</label>
          <p v-if="courseAttended">Yes</p>
          <p v-else>No</p>

          <div v-if="isAdmin" class="columns">
            <div class="column has-text-centered">
              <router-link :to="participantsLink"
                ><button class="button is-link">
                  Participants
                </button></router-link
              >
            </div>
            <div class="column has-text-centered">
              <router-link class="button is-link" :to="editLink"
                >Edit</router-link
              >
            </div>
            <div class="column has-text-centered">
              <router-link class="button is-link" :to="reportLink">
                Evaluations
              </router-link>
            </div>
            <div class="column has-text-centered">
              <button
                class="button is-danger has-text-centered"
                @click="deleteCourse"
              >
                Delete
              </button>
            </div>
          </div>
          <div v-else-if="isUser" class="columns">
            <div
              class="column has-text-centered"
              v-if="!hasJoinedCourse && !isCapacityFull"
            >
              <button class="button is-link" @click="joinCourse">Join</button>
            </div>
            <div
              class="column has-text-centered"
              v-else-if="hasJoinedCourse && !courseAttended"
            >
              <button class="button is-danger" @click="dropCourse">Drop</button>
            </div>
            <div class="column has-text-centered" v-if="courseAttended">
              <router-link class="button is-link" :to="evaluateLink">
                Evaluate
              </router-link>
            </div>
            <div class="column has-text-centered" v-if="courseAttended">
              <router-link class="button is-link" :to="certificateURL">
                Certificate
              </router-link>
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
import { storage } from "../database";
import { ref as storageRef, getDownloadURL, listAll } from "firebase/storage";
import router from "../router/index.js";

export default {
  name: "ViewShortCourse",
  data() {
    return {
      certificateURL: "/courses/" + this.$route.params.id + "/certificate",
      isCapacityFull: false,
      currentCapacity: 0,
      oldUploads: {
        speakerLetter: false,
        approvalLetter: false,
        agenda: false,
        poster: false,
      },
      isAdmin: localStorage.getItem("role") === "Admin",
      isUser: localStorage.getItem("role") === "User",

      ID: localStorage.getItem("ID"),
      evaluateLink: "/courses/" + this.$route.params.id + "/evaluate",
      courseAttended: false,
      reportLink: "/courses/" + this.$route.params.id + "/report",
      editLink: "/courses/" + this.$route.params.id + "/edit",
      user: {},
      course: "",
      courseID: this.$route.params.id,
      participantsLink: `/courses/${this.$route.params.id}/participants`,
      hasJoinedCourse: false,
      doesCourseExists: false,
    };
  },
  methods: {
    formatDate(date) {
      const splitDate = date.split("-");
      return `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;
    },
    joinCourse() {
      const dbRef = ref(database);
      if (this.user.courses === 0) {
        this.user.courses = [this.courseID];
      } else {
        if (this.user.courses.indexOf(this.courseID) === -1) {
          this.user.courses.push(this.courseID);
        }
      }
      console.log(this.user.courses.indexOf(this.courseID));
      if (typeof this.course.participants == "undefined") {
        this.course.participants = {};
      }
      this.course.participants[this.ID] = false;
      this.participants[this.ID] = {};
      this.currentCapacity += 1;

      if (Object.keys(this.participants).length >= this.course.capacity) {
        this.isCapacityFull = true;
      }

      set(child(dbRef, `users/${this.ID}`), this.user);

      this.hasJoinedCourse = true;

      const courseRef = ref(database, `courses/${this.courseID}`);
      set(courseRef, this.course);
    },
    updateTotal() {
      let total = 0;
      if (this.course.costFB) {
        total += this.course.costFB;
      }
      if (this.course.costInstructor) {
        total += this.course.costInstructor;
      }
      if (this.course.costModule) {
        total += this.course.costModule;
      }
      if (this.course.costOthers) {
        total += this.course.costOthers;
      }
      this.course.costTotal = total;
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
        this.currentCapacity -= 1;
        this.hasJoinedCourse = false;
        delete this.course.participants[this.ID];
        this.isCapacityFull = false;
        set(child(dbRef, `users/${this.ID}`), this.user);

        delete this.course.participants[this.ID];
        const courseRef = ref(database, `courses/${this.courseID}`);
        set(courseRef, this.course);
      }
    },
    deleteCourse() {
      // const dbRef = ref(database);
      // const dbRef = ref(database);
      // console.log("Deleting!");
      let toRemoveRef = ref(database, `courses/${this.courseID}`);
      console.log(toRemoveRef);
      remove(toRemoveRef);
      router.push("/courses?courseDeleted=true");
      // remove(toRemoveRef);
    },

    // generateCertificate() {
    //   const doc = new PDFDocument({
    //     layout: "landscape",
    //     size: "A4",
    //   });
    //   const stream = doc.pipe(blobStream());

    //   doc.moveDown();
    //   doc.moveDown();
    //   doc.moveDown();
    //   doc.moveDown();
    //   doc.moveDown();
    //   doc.moveDown();

    //   doc.rect(0, 0, doc.page.width, doc.page.height).fill("#fff");

    //   doc.fontSize(20).fill("#021c27").text("CERTIFICATE OF COMPLETION", {
    //     align: "center",
    //   });

    //   doc.moveDown();
    //   doc.moveDown();

    //   doc.fontSize(15).fill("#021c27").text(this.user.fullName, {
    //     align: "center",
    //   });

    //   doc.moveDown();
    //   doc.moveDown();

    //   doc
    //     .fontSize(10)
    //     .fill("#021c27")
    //     .text("for successfully completing " + this.course.name, {
    //       align: "center",
    //     });

    //   doc.end();

    //   stream.on("finish", () => {
    //     console.log("Finish");
    //     // get a blob you can do whatever you like with
    //     // const blob = stream.toBlob("application/pdf");
    //     // or get a blob URL for display in the browser
    //     const url = stream.toBlobURL("application/pdf");
    //     console.log(typeof url);

    //     this.certificateURL = url;
    //     console.log(this.certificateURL);

    //     // router.push(url);
    //   });
    // },
  },
  computed: {},
  created() {
    const courseID = this.$route.params.id;
    let ID = localStorage.getItem("ID");

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
        .then(() => {
          getCapacity();
          fetchUser();
          if (this.course.participants && this.course.participants[this.ID]) {
            this.courseAttended = true;
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchCourse();
    //

    const getCapacity = async () => {
      get(child(dbRef, `users`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            Object.filter = (obj, predicate) =>
              Object.keys(obj)
                .filter((key) => predicate(obj[key]))
                .reduce((res, key) => ((res[key] = obj[key]), res), {});

            let participants = {};
            participants = Object.filter(snapshot.val(), (user) => {
              if (user.courses === 0) {
                return false;
              } else if (user.courses.some((id) => id === courseID)) {
                return true;
              }
            });
            this.participants = participants;

            this.currentCapacity = Object.keys(participants).length;
            if (Object.keys(participants).length >= this.course.capacity) {
              this.isCapacityFull = true;
            }
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    //
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

    const fetchUploads = async () => {
      let availableFiles = [];
      listAll(storageRef(storage, courseID))
        .then((res) => {
          res.items.forEach((itemRef) => {
            const fileName = itemRef.fullPath.split("/").pop();
            availableFiles.push(fileName);
          });
        })
        .then(() => {
          availableFiles.forEach((fileName) => {
            getDownloadURL(storageRef(storage, courseID + "/" + fileName))
              .then((url) => {
                this.oldUploads[fileName] = url;
              })
              .catch((error) => {
                console.log(error);
              });
          });
        })
        .catch((error) => {
          console.log(error);
          // Uh-oh, an error occurred!
        });
    };

    fetchUploads();
  },
};
</script>

<style scoped>
:disabled {
  background-color: white;
  /* font: black; */
}
#capacityIndicator {
  color: red;
}
</style>