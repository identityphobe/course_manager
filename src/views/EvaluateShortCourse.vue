<template>
  <h1 class="title is-3 has-text-centered">Evaluate {{ course.name }}</h1>
  <div class="container">
    <div class="box">
      <table class="table">
        <thead>
          <tr>
            <th>Question</th>
            <th class="has-text-centered">Poor</th>
            <th>Average</th>
            <th>Good</th>
            <th>Excellent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>Content</b></td>
          </tr>
          <tr v-for="(el, index) in questionList.content" :key="el.question">
            <td>{{ el.question }}</td>
            <td>
              <div class="columns">
                <div class="column"></div>
                <div class="column">
                  <input
                    type="radio"
                    value="1"
                    v-model="questionList.content[index].rating"
                  />
                </div>
                <div class="column"></div>
              </div>
            </td>
            <td>
              <div class="columns">
                <div class="column"></div>
                <div class="column">
                  <input
                    type="radio"
                    value="2"
                    v-model="questionList.content[index].rating"
                  />
                </div>
                <div class="column"></div>
              </div>
            </td>
            <td>
              <div class="columns">
                <div class="column"></div>
                <div class="column">
                  <input
                    type="radio"
                    value="3"
                    v-model="questionList.content[index].rating"
                  />
                </div>
                <div class="column"></div>
              </div>
            </td>
            <td>
              <div class="columns">
                <div class="column"></div>
                <div class="column">
                  <input
                    type="radio"
                    value="4"
                    v-model="questionList.content[index].rating"
                  />
                </div>
                <div class="column"></div>
              </div>
            </td>
          </tr>

          <tr>
            <td><b>Facilitator</b></td>
          </tr>
          <tr
            v-for="(el, index) in questionList.facilitator"
            :key="el.question"
          >
            <td>
              {{ el.question }}
            </td>
            <td>
              <div class="columns">
                <div class="column"></div>
                <div class="column">
                  <input
                    type="radio"
                    value="1"
                    v-model="questionList.facilitator[index].rating"
                  />
                </div>
                <div class="column"></div>
              </div>
            </td>
            <td>
              <div class="columns">
                <div class="column"></div>
                <div class="column">
                  <input
                    type="radio"
                    value="2"
                    v-model="questionList.facilitator[index].rating"
                  />
                </div>
                <div class="column"></div>
              </div>
            </td>
            <td>
              <div class="columns">
                <div class="column"></div>
                <div class="column">
                  <input
                    type="radio"
                    value="3"
                    v-model="questionList.facilitator[index].rating"
                  />
                </div>
                <div class="column"></div>
              </div>
            </td>
            <td>
              <div class="columns">
                <div class="column"></div>
                <div class="column">
                  <input
                    type="radio"
                    value="4"
                    v-model="questionList.facilitator[index].rating"
                  />
                </div>
                <div class="column"></div>
              </div>
            </td>
          </tr>

          <tr>
            <td><b>Venue</b></td>
          </tr>
          <tr v-for="(el, index) in questionList.venue" :key="el.question">
            <td>
              {{ el.question }}
            </td>
            <td>
              <div class="columns">
                <div class="column"></div>
                <div class="column">
                  <input
                    type="radio"
                    value="1"
                    v-model="questionList.venue[index].rating"
                  />
                </div>
                <div class="column"></div>
              </div>
            </td>
            <td>
              <div class="columns">
                <div class="column"></div>
                <div class="column">
                  <input
                    type="radio"
                    value="2"
                    v-model="questionList.venue[index].rating"
                  />
                </div>
                <div class="column"></div>
              </div>
            </td>
            <td>
              <div class="columns">
                <div class="column"></div>
                <div class="column">
                  <input
                    type="radio"
                    value="3"
                    v-model="questionList.venue[index].rating"
                  />
                </div>
                <div class="column"></div>
              </div>
            </td>
            <td>
              <div class="columns">
                <div class="column"></div>
                <div class="column">
                  <input
                    type="radio"
                    value="4"
                    v-model="questionList.venue[index].rating"
                  />
                </div>
                <div class="column"></div>
              </div>
            </td>
          </tr>

          <tr>
            <td><b>Committee</b></td>
          </tr>
          <tr v-for="(el, index) in questionList.committee" :key="el.question">
            <td>
              {{ el.question }}
            </td>
            <td>
              <div class="columns">
                <div class="column"></div>
                <div class="column">
                  <input
                    type="radio"
                    value="1"
                    v-model="questionList.committee[index].rating"
                  />
                </div>
                <div class="column"></div>
              </div>
            </td>
            <td>
              <div class="columns">
                <div class="column"></div>
                <div class="column">
                  <input
                    type="radio"
                    value="2"
                    v-model="questionList.committee[index].rating"
                  />
                </div>
                <div class="column"></div>
              </div>
            </td>
            <td>
              <div class="columns">
                <div class="column"></div>
                <div class="column">
                  <input
                    type="radio"
                    value="3"
                    v-model="questionList.committee[index].rating"
                  />
                </div>
                <div class="column"></div>
              </div>
            </td>
            <td>
              <div class="columns">
                <div class="column"></div>
                <div class="column">
                  <input
                    type="radio"
                    value="4"
                    v-model="questionList.committee[index].rating"
                  />
                </div>
                <div class="column"></div>
              </div>
            </td>
          </tr>

          <tr>
            <td><b>TLC Programmes</b></td>
          </tr>
          <tr v-for="(el, index) in questionList.tlc" :key="el.question">
            <td>
              {{ el.question }}
            </td>
            <td>
              <div class="columns">
                <div class="column"></div>
                <div class="column">
                  <input
                    type="radio"
                    value="1"
                    v-model="questionList.tlc[index].rating"
                  />
                </div>
                <div class="column"></div>
              </div>
            </td>
            <td>
              <div class="columns">
                <div class="column"></div>
                <div class="column">
                  <input
                    type="radio"
                    value="2"
                    v-model="questionList.tlc[index].rating"
                  />
                </div>
                <div class="column"></div>
              </div>
            </td>
            <td>
              <div class="columns">
                <div class="column"></div>
                <div class="column">
                  <input
                    type="radio"
                    value="3"
                    v-model="questionList.tlc[index].rating"
                  />
                </div>
                <div class="column"></div>
              </div>
            </td>
            <td>
              <div class="columns">
                <div class="column"></div>
                <div class="column">
                  <input
                    type="radio"
                    value="4"
                    v-model="questionList.tlc[index].rating"
                  />
                </div>
                <div class="column"></div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="columns">
        <div class="column"></div>
        <div class="column has-text-centered">
          <button class="button is-link" @click="submitEvaluation">
            Submit
          </button>
        </div>

        <div class="column"></div>
      </div>
    </div>
  </div>
</template>

<script>
import database from "../database";
import { ref, get, set, child } from "firebase/database";
import router from "../router/index.js";

export default {
  name: "EvaluateShortCourse",
  data() {
    return {
      course: {},
      courseID: this.$route.params.id,

      questionList: {
        content: [
          {
            question: "The programme content is interesting",
            rating: 0,
          },
          {
            question: "The programme content meets my professional need",
            rating: 0,
          },
          {
            question:
              "The programme content provides new perspective/knowledge",
            rating: 0,
          },
          {
            question: "The content material provided are helpful",
            rating: 0,
          },
        ],
        facilitator: [
          {
            question: "The speaker is effective",
            rating: 0,
          },
          {
            question: "The speaker is engaging",
            rating: 0,
          },
          {
            question: "The speaker understands my need",
            rating: 0,
          },
        ],
        venue: [
          {
            question: "The venue for this programme is suitable",
            rating: 0,
          },
          {
            question: "The venue for this programme is strategic",
            rating: 0,
          },
          {
            question:
              "The multimedia facilities meet my expected quality standards (e.g. microphone, audio speaker, LCD projector)",
            rating: 0,
          },
          {
            question:
              "Other facilities are adequate (e.g. prayer room, washroom, etc)",
            rating: 0,
          },
        ],
        committee: [
          {
            question: "The refreshment/meals provided are satisfactory",
            rating: 0,
          },
          {
            question: "The organizing committee is helpful",
            rating: 0,
          },
          {
            question: "The organizing committee is efficient",
            rating: 0,
          },
        ],
        tlc: [
          {
            question: "I would like to participate in more TLC programmes",
            rating: 0,
          },
          {
            question: "I will recommend this TLC programme to others",
            rating: 0,
          },
          {
            question: "I would like to see improvements in TLC programmes",
            rating: 0,
          },
        ],
      },

      // report: {
      //   contentInteresting: "Select rating",
      //   contentProfessionalNeeds: "Select rating",
      //   contentNewPerspective: "Select rating",
      //   contentMaterialsHelpful: "Select rating",

      //   facilitatorEffective: "Select rating",
      //   facilitatorEngaging: "Select rating",
      //   facilitatorUnderstandsNeed: "Select rating",

      //   venueSuitable: "Select rating",
      //   venueSthategic: "Select rating",
      //   venueFacilitiesStandard: "Select rating",
      //   venueFacilitiesAdequate: "Select rating",

      //   committeeRefreshmentSatisfactory: "Select rating",
      //   committeeHelpful: "Select rating",
      //   committeeEfficient: "Select rating",

      //   tlcParticipateMore: "Select rating",
      //   tlcRecommend: "Select rating",
      //   tlcSeeImprovements: "Select rating",
      // },
    };
  },
  methods: {
    //TODO: field validation
    //TODO: total costs calculation
    submitEvaluation() {
      // console.log(this.report);
      // console.log(localStorage.getItem("ID"));
      // console.log(
      //   "evaluations/" +
      //     this.$route.params.id +
      //     "/" +
      //     localStorage.getItem("ID")
      // );

      const evaluationRef = ref(
        database,
        "evaluations/" +
          this.$route.params.id +
          "/" +
          localStorage.getItem("ID")
      );

      let report = {
        contentInteresting: this.questionList.content[0].rating,
        contentProfessionalNeeds: this.questionList.content[1].rating,
        contentNewPerspective: this.questionList.content[2].rating,
        contentMaterialsHelpful: this.questionList.content[3].rating,

        facilitatorEffective: this.questionList.facilitator[0].rating,
        facilitatorEngaging: this.questionList.facilitator[1].rating,
        facilitatorUnderstandsNeed: this.questionList.facilitator[2].rating,

        venueSuitable: this.questionList.venue[0].rating,
        venueStrategic: this.questionList.venue[1].rating,
        venueFacilitiesStandard: this.questionList.venue[2].rating,
        venueFacilitiesAdequate: this.questionList.venue[3].rating,

        committeeRefreshmentSatisfactory: this.questionList.committee[0].rating,
        committeeHelpful: this.questionList.committee[1].rating,
        committeeEfficient: this.questionList.committee[2].rating,

        tlcParticipateMore: this.questionList.tlc[0].rating,
        tlcRecommend: this.questionList.tlc[1].rating,
        tlcSeeImprovements: this.questionList.tlc[2].rating,
      };
      console.log(report);
      set(evaluationRef, report);
      router.push("/courses/" + this.courseID);
    },
    test() {
      set("", "");
      router.push("", "");
    },
  },

  created() {
    const courseID = this.$route.params.id;
    const userID = localStorage.getItem("ID");

    const dbRef = ref(database);

    const fetchCourse = async () => {
      get(child(dbRef, `courses/${courseID}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            this.course = snapshot.val();
            fetchEvaluation();
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const fetchEvaluation = async () => {
      get(child(dbRef, `evaluations/${courseID}/${userID}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            // this.course = snapshot.val();
            let report = snapshot.val();
            this.questionList.content[0].rating = report.contentInteresting;
            this.questionList.content[1].rating =
              report.contentProfessionalNeeds;
            this.questionList.content[2].rating = report.contentNewPerspective;
            this.questionList.content[3].rating =
              report.contentMaterialsHelpful;

            this.questionList.facilitator[0].rating =
              report.facilitatorEffective;
            this.questionList.facilitator[1].rating =
              report.facilitatorEngaging;
            this.questionList.facilitator[2].rating =
              report.facilitatorUnderstandsNeed;

            this.questionList.venue[0].rating = report.venueSuitable;
            this.questionList.venue[1].rating = report.venueStrategic;

            this.questionList.venue[2].rating = report.venueFacilitiesStandard;
            this.questionList.venue[3].rating = report.venueFacilitiesAdequate;

            this.questionList.committee[0].rating =
              report.committeeRefreshmentSatisfactory;
            this.questionList.committee[1].rating = report.committeeHelpful;
            this.questionList.committee[2].rating = report.committeeEfficient;

            this.questionList.tlc[0].rating = report.tlcParticipateMore;
            this.questionList.tlc[1].rating = report.tlcRecommend;
            this.questionList.tlc[2].rating = report.tlcSeeImprovements;
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