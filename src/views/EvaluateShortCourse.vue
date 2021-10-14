<template>
  <h1 class="title is-3 has-text-centered">Create Short Course</h1>
  <div class="container">
    <div class="box">
      <label class="label">The venue for this programme is suitable</label>
      <div class="control">
        <div class="select">
          <select>
            <option>Select rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
      <label class="label">The venue for this programme is strategic</label>
      <div class="control">
        <div class="select">
          <select>
            <option>Select rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
      <label class="label"
        >The multimedia facilities (e.g. microphone, audio speaker, etc) meet my
        expected quality standards</label
      >
      <div class="control">
        <div class="select">
          <select>
            <option>Select rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
      <label class="label"
        >Other facilities are adequate (e.g. prayer room, washroom, etc)</label
      >
      <div class="control">
        <div class="select">
          <select>
            <option>Select rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
      <div class="columns is-gapless">
        <div class="column">
          <div class="box has-text-centered">Content</div>
        </div>
        <div class="column">
          <div class="box has-text-centered">Facilitator</div>
        </div>
        <div class="column">
          <div class="box has-text-centered">Facilities</div>
        </div>
        <div class="column">
          <div class="box has-text-centered">Organisation</div>
        </div>
        <div class="column">
          <div class="box has-text-centered">Programme</div>
        </div>
      </div>
      <button class="button is-link">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EvaluateShortCourse",
};
</script>