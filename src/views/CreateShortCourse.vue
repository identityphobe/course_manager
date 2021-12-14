<template>
  <h1 class="title is-3 has-text-centered">Create Short Course</h1>

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
            <p class="help is-danger" v-if="!course.name">required</p>
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
              <select v-model="course.department">
                <option disabled value="">Department</option>
                <option value="CCI">CCI</option>
                <option value="COE">COE</option>
              </select>
              <p class="help is-danger" v-if="!course.department">required</p>
            </div>
          </div>
          <label class="label mt-5">Certificate</label>
          <div class="columns">
            <div class="column">
              <div class="control">
                <div class="select">
                  <select v-model="course.certificate">
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
                  <select v-model="course.certificateModule">
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
                placeholder="Cost per person
                "
              />
            </div>
          </div>

          <div class="columns">
            <div class="column is-one-third">
              <label class="label">Venue</label>
              <div class="control">
                <div class="select">
                  <select v-model="course.venue">
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
                        type="text"
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
                <label class="label">Date Start</label>
                <div class="control">
                  <input v-model="course.dateStart" class="input" type="date" />
                  <p class="help is-danger" v-if="!course.dateStart">
                    required
                  </p>
                </div>
              </div>
            </div>

            <div class="column is-one-third">
              <div class="field">
                <label class="label">Date End</label>
                <div class="control">
                  <input v-model="course.dateEnd" class="input" type="date" />
                  <p class="help is-danger" v-if="!course.dateEnd">required</p>
                </div>
              </div>
            </div>
          </div>

          <label class="label">Speaker</label>
          <div class="control">
            <div class="select">
              <select v-model="course.speaker">
                <option disabled value="">Speaker</option>
                <option value="Mr. Ahmad Bin Dollah">
                  Mr. Ahmad Bin Dollah
                </option>
                <option value="Mr. Zikry Bin Hamid">Mr. Zikry Bin Hamid</option>
                <option value="Ertugrul Bey">Ertugrul Bey</option>
              </select>
            </div>
          </div>

          <div class="columns">
            <div class="column">
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
                    <span class="file-label">
                      Upload course agenda (optional)
                    </span>
                  </span>
                  <span v-if="newUpload['agenda']" class="file-name">
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
                    <span class="file-label"> Upload poster (optional) </span>
                  </span>
                  <span v-if="newUpload['poster']" class="file-name">
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
                    @change="updateTotal"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column">
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
                    <span class="file-label">
                      Upload approval letter (optional)
                    </span>
                  </span>
                  <span v-if="newUpload['approvalLetter']" class="file-name">
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
            <div class="column">
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
                    <span class="file-label">
                      Upload speaker appointment letter (optional)
                    </span>
                  </span>
                  <span v-if="newUpload['speakerLetter']" class="file-name">
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
          </div>
          <div class="columns">
            <div class="column"></div>
            <div class="field column">
              <div class="control has-text-centered">
                <button
                  @click="createCourse"
                  type="submit"
                  class="button is-link"
                >
                  Create
                </button>
              </div>
            </div>
            <div class="column"></div>
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
          <li v-if="!course.startDate">Start date</li>
          <li v-if="!course.startEnd">End date</li>
        </ol>
      </section>
      <!-- <footer class="modal-card-foot">
        <button class="button is-success">Save changes</button>
        <button class="button">Cancel</button>
      </footer> -->
    </div>
  </div>
</template>

<script>
import database from "../database";
import { storage } from "../database";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

import { ref, push } from "firebase/database";
import router from "../router/index.js";

export default {
  name: "CreateShortCourse",
  data() {
    return {
      isModalActive: false,
      newUpload: {},
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
    //TODO: field validation
    //TODO: total costs calculation
    toggleModal() {
      this.isModalActive = !this.isModalActive;
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
    createCourse() {
      console.log(this.course);
      let courseID;
      const courseRef = ref(database, "courses/");
      // let mark = true;
      if (
        this.course.capacity == "" ||
        this.course.name == "" ||
        this.course.department == "" ||
        this.course.dateStart == "" ||
        this.course.dateEnd == ""
      ) {
        this.toggleModal();
        return;
      } else {
        push(courseRef, this.course)
          .then((ref) => {
            courseID = ref.key;
            for (let index in this.newUpload) {
              const fileRef = storageRef(storage, courseID + "/" + index);
              uploadBytes(fileRef, this.newUpload[index]);
            }
          })
          .then(() => {
            router.push("/courses?createdCourse=true&newCourseID=" + courseID);
          });
      }
    },
  },
};
</script>