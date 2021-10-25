<template>
  <h1 class="title is-3 has-text-centered">Short Course</h1>

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
          <label class="label">Target Audience</label>
          <ul v-for="audience in course.targetAudience" :key="audience">
            <li>{{ audience }}</li>
          </ul>
          <label class="label">Venue</label>
          <p>{{ course.venue }}</p>
          <label class="label">Capacity</label>
          <p>{{ course.capacity }}</p>
          <label class="label">Start Date</label>
          <p>{{ course.startDate }}</p>
          <label class="label">End Date</label>
          <p>{{ course.endDate }}</p>
          <label class="label">Agenda</label>
          <a>View Agenda</a>
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

          <label class="label">Poster</label>
          <a>View Poster</a>
          <div class="columns">
            <div class="column">
              <button class="button is-link">View Participants</button>
            </div>
            <div class="column">
              <button class="button is-link">Edit</button>
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
import { child, get, ref } from "firebase/database";
import { cloneDeep } from "lodash";
export default {
  name: "ViewShortCourse",
  data() {
    return {
      course: "",
    };
  },
  created() {
    const courseID = this.$route.params.id;
    console.log(courseID);
    const dbRef = ref(database);
    console.log(dbRef);
    const fetchCourse = async () => {
      get(child(dbRef, `courses/${courseID}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            this.course = cloneDeep(cloneDeep(snapshot.val()));
            console.log(this.course);
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchCourse();
  },
};
</script>

<style scoped>
:disabled {
  background-color: white;
  /* font: black; */
}
</style>