<template>
  <h1 class="title is-3 has-text-centered">
    Report for {{ this.course.name }}
  </h1>
  <div class="container">
    <div class="box" v-if="Object.keys(evaluations).length">
      <table class="table">
        <tr>
          <td>Content</td>
          <td>{{ averageContentScore }}</td>
        </tr>
        <tr>
          <td>Facilitator</td>
          <td>{{ averageFacilitatorScore }}</td>
        </tr>
        <tr>
          <td>Venue & Facilities</td>
          <td>{{ averageVenueScore }}</td>
        </tr>
        <tr>
          <td>Organizing Committee</td>
          <td>{{ averageCommitteeScore }}</td>
        </tr>
        <tr>
          <td>Programmes</td>
          <td>{{ averageProgrammeScore }}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>{{ averageTotalScore }}</td>
        </tr>
      </table>

      <table class="table">
        <thead>
          <tr>
            <th>No</th>
            <th>
              CQ1<span
                class="question"
                title="The programme content is interesting"
                >(?)</span
              >
            </th>
            <th>
              CQ2<span
                class="question"
                title="The programme content meets my professional needs"
                >(?)</span
              >
            </th>
            <th>
              CQ3<span
                class="question"
                title="The programme content provides new perspective/knowledge"
                >(?)</span
              >
            </th>
            <th>
              CQ4<span
                class="question"
                title="The content material provided are helpful"
                >(?)</span
              >
            </th>
            <th>
              FQ1<span class="question" title="The speaker is effective"
                >(?)</span
              >
            </th>
            <th>
              FQ2<span class="question" title="The speaker is engaging"
                >(?)</span
              >
            </th>
            <th>
              FQ3<span class="question" title="The speaker understands my needs"
                >(?)</span
              >
            </th>
            <th>
              VQ1<span
                class="question"
                title="The venue for this programme is suitable"
                >(?)</span
              >
            </th>
            <th>
              VQ2<span
                class="question"
                title="The venue for this programme is strategic"
                >(?)</span
              >
            </th>
            <th>
              VQ3<span
                class="question"
                title="The multimedia facilities meet my expected quality standards (e.g. microphone, audio speaker, LCD projector)"
                >(?)</span
              >
            </th>
            <th>
              VQ4<span
                class="question"
                title="Other facilities are adequate (e.g. prayer room, washroom, etc)"
                >(?)</span
              >
            </th>
            <th>
              OQ1<span
                class="question"
                title="The refreshment/meals provided are satisfactory"
                >(?)</span
              >
            </th>
            <th>
              OQ2<span
                class="question"
                title="The organizing committee is helpful"
                >(?)</span
              >
            </th>
            <th>
              OQ3<span
                class="question"
                title="The organizing committee is efficient"
                >(?)</span
              >
            </th>

            <th>
              TQ1<span
                class="question"
                title="I would like to participate in more TLC programmes"
                >(?)</span
              >
            </th>
            <th>
              TQ2<span
                class="question"
                title="I will recommend this TLC programme to others"
                >(?)</span
              >
            </th>
            <th>
              TQ3<span
                class="question"
                title="I would like to see improvements in TLC programmes"
                >(?)</span
              >
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(evaluation, index) in evaluations" :key="index">
            <td class="has-text-centered">{{ index }}</td>
            <td class="has-text-centered">
              {{ evaluation["contentInteresting"] }}
            </td>
            <td class="has-text-centered">
              {{ evaluation["contentProfessionalNeeds"] }}
            </td>
            <td class="has-text-centered">
              {{ evaluation["contentNewPerspective"] }}
            </td>
            <td class="has-text-centered">
              {{ evaluation["contentMaterialsHelpful"] }}
            </td>
            <td class="has-text-centered">
              {{ evaluation["facilitatorEffective"] }}
            </td>
            <td class="has-text-centered">
              {{ evaluation["facilitatorEngaging"] }}
            </td>
            <td class="has-text-centered">
              {{ evaluation["facilitatorUnderstandsNeed"] }}
            </td>
            <td class="has-text-centered">{{ evaluation["venueSuitable"] }}</td>
            <td class="has-text-centered">
              {{ evaluation["venueStrategic"] }}
            </td>
            <td class="has-text-centered">
              {{ evaluation["venueFacilitiesStandard"] }}
            </td>
            <td class="has-text-centered">
              {{ evaluation["venueFacilitiesAdequate"] }}
            </td>
            <td class="has-text-centered">
              {{ evaluation["committeeRefreshmentSatisfactory"] }}
            </td>
            <td class="has-text-centered">
              {{ evaluation["committeeHelpful"] }}
            </td>
            <td class="has-text-centered">
              {{ evaluation["committeeEfficient"] }}
            </td>
            <td class="has-text-centered">
              {{ evaluation["tlcParticipateMore"] }}
            </td>
            <td class="has-text-centered">{{ evaluation["tlcRecommend"] }}</td>
            <td class="has-text-centered">
              {{ evaluation["tlcSeeImprovements"] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else class="has-text-centered">No evaluations available</p>
  </div>
</template>

<script>
import database from "../database";
import { ref, get, child } from "firebase/database";
export default {
  name: "EvaluationReport",
  data() {
    return {
      evaluations: {},
      averageCommitteeScore: 0,
      averageContentScore: 0,
      averageFacilitatorScore: 0,
      averageVenueScore: 0,
      averageProgrammeScore: 0,
      averageTotalScore: 0,
      course: {},
    };
  },
  created() {
    const courseID = this.$route.params.id;

    const dbRef = ref(database);
    const fetchEvaluations = async () => {
      get(child(dbRef, `evaluations/${courseID}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            // this.course = snapshot.val();
            console.log(snapshot.val());
            this.evaluations = snapshot.val();
            let evaluationNum = 0;
            let totalCommitteeScore = 0;
            let totalContentScore = 0;
            let totalFacilitatorScore = 0;
            let totalTLCScore = 0;
            let totalVenueScore = 0;

            for (const evaluation in this.evaluations) {
              evaluationNum += 1;
              totalCommitteeScore +=
                Number(this.evaluations[evaluation].committeeEfficient) +
                Number(this.evaluations[evaluation].committeeHelpful) +
                Number(
                  this.evaluations[evaluation].committeeRefreshmentSatisfactory
                );

              totalContentScore +=
                Number(this.evaluations[evaluation].contentInteresting) +
                Number(this.evaluations[evaluation].contentMaterialsHelpful) +
                Number(this.evaluations[evaluation].contentNewPerspective) +
                Number(this.evaluations[evaluation].contentProfessionalNeeds);

              totalFacilitatorScore +=
                Number(this.evaluations[evaluation].facilitatorEffective) +
                Number(this.evaluations[evaluation].facilitatorEngaging) +
                Number(this.evaluations[evaluation].facilitatorUnderstandsNeed);

              totalTLCScore +=
                Number(this.evaluations[evaluation].tlcParticipateMore) +
                Number(this.evaluations[evaluation].tlcRecommend) +
                Number(this.evaluations[evaluation].tlcSeeImprovements);

              totalVenueScore +=
                Number(this.evaluations[evaluation].venueFacilitiesAdequate) +
                Number(this.evaluations[evaluation].venueFacilitiesStandard) +
                Number(this.evaluations[evaluation].venueStrategic) +
                Number(this.evaluations[evaluation].venueSuitable);
              // +
              // evaluation["committeeHelpful"] +
              // evaluation["committeeRefreshmentSatisfactory"];
            }
            console.log(totalCommitteeScore);
            this.averageCommitteeScore =
              totalCommitteeScore / 3 / evaluationNum;
            this.averageContentScore = totalContentScore / 4 / evaluationNum;
            this.averageFacilitatorScore =
              totalFacilitatorScore / 3 / evaluationNum;
            this.averageProgrammeScore = totalTLCScore / 3 / evaluationNum;
            this.averageVenueScore = totalVenueScore / 4 / evaluationNum;
            this.averageTotalScore =
              (this.averageCommitteeScore +
                this.averageContentScore +
                this.averageFacilitatorScore +
                this.averageProgrammeScore +
                this.averageVenueScore) /
              5;
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
    fetchEvaluations();

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
  },
};
</script>

<style scoped>
.question {
  color: blue;
  cursor: pointer;
}
</style>