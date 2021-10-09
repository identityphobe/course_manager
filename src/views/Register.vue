<template>
  <Page title="Register" />
  <section class="container">
    <div class="columns">
      <div class="column"></div>
      <div class="column mx-6">
        <div class="field">
          <label class="label">ID</label>
          <div class="control">
            <input class="input" type="text" placeholder="ID" />
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input
              class="input is-success"
              type="password"
              placeholder="Password"
            />
          </div>
          <p class="help is-success">This username is available</p>
          <p class="help is-danger">This username is unavailable</p>
        </div>

        <div class="field">
          <label class="label">Subject</label>
          <div class="control">
            <div class="select">
              <select>
                <option>Computing</option>
                <option>Informatics</option>
                <option>Foundation and Diploma Studies</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field is-grouped is-grouped-centered">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
          </div>
        </div>
      </div>

      <div class="column"></div>
    </div>
  </section>
</template>


<script>
import Page from "../components/Page.vue";
export default {
  name: "Register",
  components: {
    Page,
  },
};
</script>