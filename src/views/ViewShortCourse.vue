<template>
  <h1 class="title is-3 has-text-centered">Short Course</h1>

  <div class="columns">
    <div class="column"></div>
    <div class="column is-three-fifths">
      <div class="container">
        <div class="box">
          <label class="label">Name</label>
          <p>Short Course</p>
          <label class="label">Objective</label>
          <p>To be better</p>
          <label class="label">Certificate</label>
          <p>SPM: Module 1</p>
          <label class="label">Target Audience</label>
          <p>Academic</p>
          <label class="label">Venue</label>
          <p>Hallway</p>
          <label class="label">Capacity</label>
          <p>30</p>
          <label class="label">Start Date</label>
          <p>12/10/2021</p>
          <label class="label">End Date</label>
          <p>14/10/2021</p>
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
                  <input class="input" type="text" disabled placeholder="-" />
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
                  <input class="input" type="text" disabled placeholder="-" />
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
                  <input class="input" type="text" disabled placeholder="-" />
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
                  <input class="input" type="text" disabled placeholder="-" />
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
                  <input class="input" type="text" disabled placeholder="-" />
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
export default {
  name: "ViewShortCourse",
};
</script>