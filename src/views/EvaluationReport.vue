<template>
  <h1 class="title is-3 has-text-centered">Report for Short Course 1</h1>
  <div class="container">
    <div class="box">
      <p>Content:</p>
      <p>Facilitator:</p>
      <p>Venue & Facilities:</p>
      <p>Organizing Committee:</p>
      <p>Programmes:</p>
      <p>Total:</p>
    </div>
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
            FQ2<span class="question" title="The speaker is engaging">(?)</span>
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
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "EvaluationReport",
};
</script>

<style scoped>
.question {
  color: blue;
  cursor: pointer;
}
</style>