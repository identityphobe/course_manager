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
          </div>

          <div class="columns">
            <div class="column is-one-third">
              <label class="label">Venue</label>
              <div class="control">
                <div class="select">
                  <select>
                    <option>Venue</option>
                    <option>Meeting room A</option>
                    <option>Auditorium</option>
                    <option>Hall</option>
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
                      <input class="input" type="text" />
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
                  <input class="input" type="date" />
                </div>
              </div>
            </div>

            <div class="column is-one-third">
              <div class="field">
                <label class="label">Date End</label>
                <div class="control">
                  <input class="input" type="date" />
                </div>
              </div>
            </div>
          </div>

          <label class="label">Venue</label>
          <div class="control">
            <div class="select">
              <select>
                <option>Speaker</option>
                <option>Mr. Ahmad Bin Dollah</option>
                <option>Mr. Zikry Bin Hamid</option>
                <option>Ertugrul Bey</option>
              </select>
            </div>
          </div>

          <div class="columns">
            <div class="column">
              <div class="file mt-5">
                <label class="file-label">
                  <input class="file-input" type="file" name="resume" />
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
                  <input class="file-input" type="file" name="resume" />
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
                  <input class="input" type="text" placeholder="-" />
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
                  <input class="input" type="text" placeholder="-" />
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
                  <input class="input" type="text" placeholder="-" />
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
                  <input class="input" type="text" placeholder="-" />
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
                  <input class="input" type="text" placeholder="-" />
                </div>
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column">
              <div class="file mt-5">
                <label class="file-label">
                  <input class="file-input" type="file" name="resume" />
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
                  <input class="file-input" type="file" name="resume" />
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
              <button type="submit" class="button is-link">Submit</button>
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
  name: "CreateShortCourse",
};
</script>