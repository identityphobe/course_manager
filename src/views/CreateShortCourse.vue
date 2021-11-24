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
            </div>
          </div>
          <label class="label mt-3">Certificate</label>
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
          <div class="field has-addons">
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
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column is-one-third">
              <div class="field">
                <label class="label">Date Start</label>
                <div class="control">
                  <input v-model="course.dateStart" class="input" type="date" />
                </div>
              </div>
            </div>

            <div class="column is-one-third">
              <div class="field">
                <label class="label">Date End</label>
                <div class="control">
                  <input v-model="course.dateEnd" class="input" type="date" />
                </div>
              </div>
            </div>
          </div>

          <label class="label">Venue</label>
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
              <div class="file mt-5">
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
                    id="poster"
                    @change="uploadFile"
                  />
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label"> Upload poster (optional) </span>
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
                </label>
              </div>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <button
                @click="createCourse"
                type="submit"
                class="button is-link"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column"></div>
  </div>
</template>

<script>
import database from "../database";
import { storage } from "../database";
import { ref as storageRef, uploadBytes } from "firebase/storage";

import { ref, push } from "firebase/database";

export default {
  name: "CreateShortCourse",
  data() {
    return {
      upload: {},
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

    uploadFile(event) {
      this.upload[event.target.id] = event.target.files[0];
    },
    createCourse() {
      console.log(this.course);

      const courseRef = ref(database, "courses/");
      push(courseRef, this.course).then((ref) => {
        const courseID = ref.key;
        for (let index in this.upload) {
          const fileRef = storageRef(storage, courseID + "/" + index);
          uploadBytes(fileRef, this.upload[index]);
        }
      });
    },
  },
};
</script>