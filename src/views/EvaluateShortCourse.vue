<template>
  <h1 class="title is-3 has-text-centered">Create Short Course</h1>
  <div class="container">
    <div class="box">
      <h2 class="title is-4 has-text-centered">Content</h2>
      <label class="label">The programme content is interesting</label>
      <div class="control">
        <div class="select">
          <select v-model="report.contentInteresting">
            <option>Select rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
      <label class="label"
        >The programme content meets my professional needs</label
      >
      <div class="control">
        <div class="select">
          <select v-model="report.contentProfessionalNeeds">
            <option>Select rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
      <label class="label"
        >The programme content provides new perspective/knowledge</label
      >
      <div class="control">
        <div class="select">
          <select v-model="report.contentNewPerspective">
            <option>Select rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
      <label class="label">The content material provided are helpful</label>
      <div class="control">
        <div class="select">
          <select v-model="report.contentMaterialsHelpful">
            <option>Select rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
      <h2 class="title is-4 has-text-centered">Facilitator</h2>
      <div class="control">
        <label class="label">The speaker is effective</label>
        <div class="select">
          <select v-model="report.facilitatorEffective">
            <option>Select rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
      <div class="control">
        <label class="label">The speaker is engaging</label>
        <div class="select">
          <select v-model="report.facilitatorEngaging">
            <option>Select rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
      <div class="control">
        <label class="label">The speaker understands my need</label>
        <div class="select">
          <select v-model="report.facilitatorUnderstandsNeed">
            <option>Select rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
      <h2 class="title is-4 has-text-centered">Venue and Facilities</h2>
      <div class="control">
        <label class="label">The venue for this programme is suitable</label>
        <div class="select">
          <select v-model="report.venueSuitable">
            <option>Select rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
      <div class="control">
        <label class="label">The venue for this programme is strategic</label>
        <div class="select">
          <select v-model="report.venueStrategic">
            <option>Select rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
      <div class="control">
        <label class="label"
          >The multimedia facilities meet my expected quality standards (e.g.
          microphone, audio speaker, LCD projector)</label
        >
        <div class="select">
          <select v-model="report.venueFacilitiesStandard">
            <option>Select rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
      <div class="control">
        <label class="label"
          >Other facilities are adequate (e.g. prayer room, washroom,
          etc)</label
        >
        <div class="select">
          <select v-model="report.venueFacilitiesAdequate">
            <option>Select rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
      <h2 class="title is-4 has-text-centered">Organising Committee</h2>
      <label class="label"
        >The refreshment/meals provided are satisfactory</label
      >
      <div class="control">
        <div class="select">
          <select v-model="report.committeeRefreshmentSatisfactory">
            <option>Select rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
      <label class="label">The organizing committee is helpful</label>
      <div class="control">
        <div class="select">
          <select v-model="report.committeeHelpful">
            <option>Select rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
      <label class="label">The organizing committee is efficient</label>
      <div class="control">
        <div class="select">
          <select v-model="report.committeeEfficient">
            <option>Select rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
      <h2 class="title is-4 has-text-centered">TLC Programmes</h2>
      <label class="label"
        >I would like to participate in more TLC programmes</label
      >
      <div class="control">
        <div class="select">
          <select v-model="report.tlcParticipateMore">
            <option>Select rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
      <label class="label">I will recommend this TLC programme to others</label>
      <div class="control">
        <div class="select">
          <select v-model="report.tlcRecommend">
            <option>Select rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
      <label class="label"
        >I would like to see improvements in TLC programmes</label
      >
      <div class="control">
        <div class="select">
          <select v-model="report.tlcSeeImprovements">
            <option>Select rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>

      <button class="button is-link" @click="submitEvaluation">Submit</button>
    </div>
  </div>
</template>

<script>
import database from "../database";
import { ref, get, set, child } from "firebase/database";
export default {
  name: "EvaluateShortCourse",
  data() {
    return {
      course: {},
      report: {
        contentInteresting: "Select rating",
        contentProfessionalNeeds: "Select rating",
        contentNewPerspective: "Select rating",
        contentMaterialsHelpful: "Select rating",

        facilitatorEffective: "Select rating",
        facilitatorEngaging: "Select rating",
        facilitatorUnderstandsNeed: "Select rating",

        venueSuitable: "Select rating",
        venueStrategic: "Select rating",
        venueFacilitiesStandard: "Select rating",
        venueFacilitiesAdequate: "Select rating",

        committeeRefreshmentSatisfactory: "Select rating",
        committeeHelpful: "Select rating",
        committeeEfficient: "Select rating",

        tlcParticipateMore: "Select rating",
        tlcRecommend: "Select rating",
        tlcSeeImprovements: "Select rating",
      },
    };
  },
  methods: {
    //TODO: field validation
    //TODO: total costs calculation
    submitEvaluation() {
      console.log(this.report);
      // console.log(localStorage.getItem("ID"));
      const evaluationRef = ref(
        database,
        "evaluations/" + this.$route.params.id + "/" + this.report.userID
      );
      set(evaluationRef, this.report);
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