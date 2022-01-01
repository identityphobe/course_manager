<template>
  <h1 class="title is-3 has-text-centered">Edit Short Course</h1>

  <div class="columns">
    <div class="column"></div>
    <div class="column is-three-fifths">
      <div class="container">
        <div class="box">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input v-model="course.name" class="input" type="text" />
            </div>
          </div>

          <div class="field">
            <label class="label">Objective</label>
            <div class="control">
              <input v-model="course.objective" class="input" type="text" />
            </div>
          </div>

          <label class="label">Department</label>
          <div class="control">
            <div class="select">
              <select v-model="course.department" id="departmentSelect">
                <option disabled value="">Department</option>
                <option value="CCI">CCI</option>
                <option value="COE">COE</option>
              </select>
            </div>
          </div>
          <label class="label mt-3">Certificate</label>
          <div class="columns">
            <div class="column">
              <div class="control">
                <div class="select">
                  <select v-model="course.certificate" id="certificateSelect">
                    <option disabled value="">Certificate</option>
                    <option value="PEP3">PEP3</option>
                    <option value="None">None</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="control">
                <div class="select">
                  <select v-model="course.certificateModule" id="moduleSelect">
                    <option disabled value="">Module</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="None">None</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="column is-half"></div>
          </div>

          <label class="label">Target Audience</label>
          <div class="columns is-multiline">
            <div class="column is-half">
              <label class="checkbox">
                <input
                  type="checkbox"
                  v-model="course.targetAudience"
                  value="Academic"
                />
                Academic
              </label>
            </div>

            <div class="column is-half">
              <label class="checkbox">
                <input
                  type="checkbox"
                  v-model="course.targetAudience"
                  value="Non-Academic"
                />
                Non-Academic
              </label>
            </div>
            <div class="column is-half">
              <label class="checkbox">
                <input
                  type="checkbox"
                  v-model="course.targetAudience"
                  value="External"
                />
                External
              </label>
            </div>
          </div>
          <div
            class="field has-addons"
            v-if="course.targetAudience.includes('External')"
          >
            <p class="control">
              <a class="button is-static">RM</a>
            </p>
            <div class="control">
              <input
                v-model="course.externalCost"
                class="input"
                type="text"
                placeholder="Fee per person
                "
              />
              <p class="is-size-7">
                *entry fee per external participant (optional)
              </p>
            </div>
          </div>

          <div class="columns">
            <div class="column is-one-third">
              <label class="label">Venue</label>
              <div class="control">
                <div class="select">
                  <select v-model="course.venue" id="venueSelect">
                    <option value="" disabled>Venue</option>
                    <option value="Meeting Room A">Meeting room A</option>
                    <option value="Auditorium">Auditorium</option>
                    <option value="Hall">Hall</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="column is-one-third">
              <div class="field">
                <label class="label">Capacity</label>
                <div class="control">
                  <div class="columns">
                    <div class="column">
                      <input
                        v-model="course.capacity"
                        class="input"
                        type="number"
                      />
                    </div>
                  </div>
                </div>
                <p class="help is-danger" v-if="!course.capacity">required</p>
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column is-one-third">
              <div class="field">
                <label class="label">Start Date</label>
                <div class="control">
                  <input
                    v-model="course.dateStart"
                    class="input"
                    type="date"
                    @change="changeDate"
                  />
                </div>
              </div>
            </div>

            <div class="column is-one-third">
              <div class="field">
                <label class="label">End Date</label>
                <div class="control">
                  <input v-model="course.dateEnd" class="input" type="date" />
                </div>
              </div>
            </div>
          </div>

          <label class="label">Speaker</label>
          <div class="control">
            <div class="select">
              <select v-model="course.speaker">
                <option disabled value="">Speaker</option>
                <option v-for="(speaker, index) in speakers" :key="index">
                  {{ speaker.fullName }}
                </option>
              </select>
            </div>
          </div>

          <div class="columns mt-4">
            <div class="column">
              <label class="label">Agenda</label>
              <div class="file mt-5 has-name">
                <label class="file-label">
                  <input
                    class="file-input"
                    type="file"
                    name="resume"
                    id="agenda"
                    @change="uploadFile"
                  />
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label"> Upload (optional) </span>
                  </span>
                  <span v-if="oldUploads['agenda']" class="file-name">
                    <a :href="oldUploads['agenda']" target="_blank">{{
                      fileNames["agenda"]
                    }}</a>
                  </span>
                  <span v-else-if="newUpload['agenda']" class="file-name">
                    <a :href="fileTempURLs['agenda']" target="_blank">{{
                      fileNames["agenda"]
                    }}</a>
                  </span>
                  <span v-else class="file-name"
                    >{{ fileNames["agenda"] }}
                  </span>
                </label>
              </div>
            </div>
            <div class="column">
              <label class="label">Poster</label>
              <div class="file mt-5 has-name">
                <label class="file-label">
                  <input
                    class="file-input"
                    type="file"
                    name="resume"
                    id="poster"
                    @change="uploadFile"
                  />
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label"> Upload (optional) </span>
                  </span>
                  <span v-if="oldUploads['poster']" class="file-name">
                    <a :href="oldUploads['poster']" target="_blank">{{
                      fileNames["poster"]
                    }}</a>
                  </span>
                  <span v-else-if="newUpload['poster']" class="file-name">
                    <a :href="fileTempURLs['poster']" target="_blank">{{
                      fileNames["poster"]
                    }}</a>
                  </span>
                  <span v-else class="file-name"
                    >{{ fileNames["poster"] }}
                  </span>
                </label>
              </div>
            </div>
          </div>

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
                    v-model="course.costFB"
                    class="input"
                    type="text"
                    placeholder="-"
                    @change="updateTotal"
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
                    v-model="course.costInstructor"
                    class="input"
                    type="text"
                    placeholder="-"
                    @change="updateTotal"
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
                    v-model="course.costModule"
                    class="input"
                    type="text"
                    placeholder="-"
                    @change="updateTotal"
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
                    v-model="course.costOthers"
                    class="input"
                    type="text"
                    placeholder="-"
                    @change="updateTotal"
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
                    v-model="course.costTotal"
                    class="input"
                    type="text"
                    placeholder="-"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column">
              <label class="label">Speaker Appointment Letter</label>
              <div class="file mt-5">
                <label class="file-label">
                  <input
                    class="file-input"
                    type="file"
                    name="resume"
                    id="speakerLetter"
                    @change="uploadFile"
                  />
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label"> Upload (optional) </span>
                  </span>

                  <span v-if="oldUploads['speakerLetter']" class="file-name">
                    <a :href="oldUploads['speakerLetter']" target="_blank">{{
                      fileNames["speakerLetter"]
                    }}</a>
                  </span>
                  <span
                    v-else-if="newUpload['speakerLetter']"
                    class="file-name"
                  >
                    <a :href="fileTempURLs['speakerLetter']" target="_blank">{{
                      fileNames["speakerLetter"]
                    }}</a>
                  </span>
                  <span v-else class="file-name"
                    >{{ fileNames["speakerLetter"] }}
                  </span>
                </label>
              </div>
            </div>
            <div class="column">
              <label class="label">Course Approval Letter</label>

              <div class="file mt-5">
                <label class="file-label">
                  <input
                    class="file-input"
                    type="file"
                    name="resume"
                    id="approvalLetter"
                    @change="uploadFile"
                  />
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label"> Upload (optional) </span>
                  </span>
                  <span v-if="oldUploads['approvalLetter']" class="file-name">
                    <a :href="oldUploads['approvalLetter']" target="_blank">{{
                      fileNames["approvalLetter"]
                    }}</a>
                  </span>
                  <span
                    v-else-if="newUpload['approvalLetter']"
                    class="file-name"
                  >
                    <a :href="fileTempURLs['approvalLetter']" target="_blank">{{
                      fileNames["approvalLetter"]
                    }}</a>
                  </span>
                  <span v-else class="file-name"
                    >{{ fileNames["approvalLetter"] }}
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="columns">
              <div class="control column has-text-centered">
                <button
                  @click="editCourse"
                  type="submit"
                  class="button is-link"
                >
                  Save
                </button>
              </div>
              <div class="column has-text-centered">
                <button
                  @click="cancelEdit"
                  type="submit"
                  class="button is-danger"
                >
                  Cancel
                </button>
              </div>
              <!-- <div class="column has-text-centered">
                <router-link class="button is-danger"> Cancel </router-link>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column"></div>
  </div>
  <div :class="{ modal: true, 'is-active': isModalActive }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          Missing information in one or more fields
        </p>
        <button class="delete" @click="toggleModal" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <p>Please fill the following fields:</p>
        <ol>
          <li v-if="!course.name">Name</li>
          <li v-if="!course.department">Department</li>
          <li v-if="!course.capacity">Capacity</li>
          <li v-if="!course.dateStart">Start date</li>
          <li v-if="!course.dateEnd">End date</li>
        </ol>
      </section>
    </div>
  </div>
</template>

<script>
import database from "../database";
import { ref, get, set, child } from "firebase/database";
import { storage } from "../database";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import router from "../router/index.js";

export default {
  name: "EditShortCourse",
  data() {
    return {
      speakers: {},
      isModalActive: false,
      newUpload: {},
      oldUploads: {
        speakerLetter: false,
        approvalLetter: false,
        agenda: false,
        poster: false,
      },
      fileNames: {
        agenda: "NA",
        speakerLetter: "NA",
        approvalLetter: "NA",
        poster: "NA",
      },
      fileTempURLs: {
        agenda: "",
        speakerLetter: "",
        approvalLetter: "",
        poster: "",
      },
      courseID: this.$route.params.id,
      course: {
        name: "",
        objective: "",
        department: "",
        certificate: "",
        certificateModule: "",
        targetAudience: [],
        externalCost: "",
        venue: "",
        capacity: "",
        dateStart: "",
        dateEnd: "",
        speaker: "",
        costFB: "",

        costInstructor: "",
        costModule: "",
        costOthers: "",
        costTotal: "",

        //TODO: Files
        // for files, no need for bindings
        // just store in firebase storage
      },
    };
  },
  methods: {
    toggleModal() {
      this.isModalActive = !this.isModalActive;
    },
    changeDate() {
      console.log(this.course.dateStart);
    },
    updateTotal() {
      let total = 0;
      if (this.course.costFB) {
        total += Number(this.course.costFB);
      }
      if (this.course.costInstructor) {
        total += Number(this.course.costInstructor);
      }
      if (this.course.costModule) {
        total += Number(this.course.costModule);
      }
      if (this.course.costOthers) {
        total += Number(this.course.costOthers);
      }
      console.log(total);
      this.course.costTotal = total;
    },
    //TODO: field validation
    //TODO: total costs calculation
    editCourse() {
      console.log(this.course);
      const courseID = this.$route.params.id;
      const courseRef = ref(database, `courses/${courseID}`);
      if (
        this.course.capacity == "" ||
        this.course.name == "" ||
        this.course.department == "" ||
        this.course.dateStart == "" ||
        this.course.dateEnd == ""
      ) {
        this.toggleModal();
        return;
      }
      set(courseRef, this.course);
      for (let index in this.newUpload) {
        const fileRef = storageRef(storage, courseID + "/" + index);
        uploadBytes(fileRef, this.newUpload[index]);
      }
      router.push("/courses/" + this.courseID);
    },
    cancelEdit() {
      router.push("/courses/" + this.courseID);
    },

    uploadFile(event) {
      this.newUpload[event.target.id] = event.target.files[0];
      this.fileNames[event.target.id] = event.target.files[0].name;
      const tempFilePath = "temp" + "/" + event.target.files[0].name;
      const fileRef = storageRef(storage, tempFilePath);
      uploadBytes(fileRef, this.newUpload[event.target.id])
        .then(() => {
          getDownloadURL(storageRef(storage, tempFilePath))
            .then((url) => {
              console.log(url);
              this.fileTempURLs[event.target.id] = url;
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });

      console.log(this.newUpload);
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

            if (
              this.course.targetAudience === false ||
              this.course.targetAudience == undefined
            ) {
              this.course.targetAudience = [];
              console.log(this.course);
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

    const fetchUploads = async () => {
      let availableFiles = [];
      listAll(storageRef(storage, courseID))
        .then((res) => {
          // res.prefixes.forEach((folderRef) => {
          //   console.log(folderRef);
          //   // All the prefixes under listRef.
          //   // You may call listAll() recursively on them.
          // });
          res.items.forEach((itemRef) => {
            const fileName = itemRef.fullPath.split("/").pop();

            availableFiles.push(fileName);
            // All the items under listRef.
          });
        })
        .then(() => {
          availableFiles.forEach((fileName) => {
            getDownloadURL(storageRef(storage, courseID + "/" + fileName))
              .then((url) => {
                this.oldUploads[fileName] = url;
                this.fileNames[fileName] = fileName;
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

    const fetchUsers = async () => {
      get(child(dbRef, "users"))
        .then((snapshot) => {
          if (snapshot.exists()) {
            this.users = snapshot.val();
            for (const id in this.users) {
              if (this.users[id].role === "Speaker") {
                this.speakers[id] = this.users[id];
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

    fetchUsers();

    fetchUploads();
  },
};
</script>

<style scoped>
#moduleSelect:focus option:first-of-type {
  display: none;
}

#departmentSelect:focus option:first-of-type {
  display: none;
}

#certificateSelect:focus option:first-of-type {
  display: none;
}

#venueSelect:focus option:first-of-type {
  display: none;
}
</style>