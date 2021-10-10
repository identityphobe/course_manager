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
              <input class="input" type="text" />
            </div>
          </div>

          <div class="field">
            <label class="label">Objective</label>
            <div class="control">
              <input class="input" type="text" />
            </div>
          </div>
          <label class="label">Certificate</label>
          <div class="columns">
            <div class="column">
              <div class="control">
                <div class="select">
                  <select>
                    <option>Certificate</option>
                    <option>PEP3</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="control">
                <div class="select">
                  <select>
                    <option>Module</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
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
                <input type="checkbox" />
                Academic
              </label>
            </div>

            <div class="column is-half">
              <label class="checkbox">
                <input type="checkbox" />
                Non-Academic
              </label>
            </div>
            <div class="column is-half">
              <label class="checkbox">
                <input type="checkbox" />
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
                class="input"
                type="text"
                placeholder="Cost per person
                "
              />
            </div>

            <!-- <p class="control">
              <a class="button is-static"> @gmail.com </a>
            </p>
            <div class="control">
              <div class="columns">
                <div class="column">
                  <input class="input" type="text" />
                </div>
                <div class="column is-four-fifths"></div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="column"></div>
  </div>
</template>

<script>
export default {
  name: "CreateShortCourse",
};
</script>