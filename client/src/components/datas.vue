<template>
  <div class="container" align="left">
    <br />
    <b-button v-b-toggle.collapse-1 variant="primary">Add</b-button>
    <b-collapse id="collapse-1" class="mt-2">
      <b-card>
        <b-form inline>
          <label for="inline-form-input-name" class="font-weight-bold">
            Letter
            <b-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0" placeholder="A"></b-input>
          </label>
          <label for="inline-form-input-username" class="font-weight-bold">Frequency</label>
          <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
            <b-input id="inline-form-input-username" placeholder="0.0000"></b-input>
          </b-input-group>
          <b-button type="submit" variant="primary">Save</b-button>
        </b-form>
      </b-card>
    </b-collapse>
    <h5 class="mt-4">Search</h5>
    <hr />

    <b-form inline>
      <label for="inline-form-input-name" class="font-weight-bold">
        Letter
        <b-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0" placeholder="A"></b-input>
      </label>
      <label for="inline-form-input-username" class="font-weight-bold">Frequency</label>
      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
        <b-input id="inline-form-input-username" placeholder="0.0000"></b-input>
      </b-input-group>
    </b-form>
    <br />
    <div>
      <div>
        <b-table :items="items" :fields="fields" striped responsive="sm">
          <template v-slot:cell(show_details)="row">
            <b-button
              size="sm"
              @click="row.toggleDetails"
              class="mr-2"
              variant="success"
            >{{ row.detailsShowing ? 'Cancel' : 'Update'}}</b-button>
            <template>
              <b-button size="sm" variant="danger">Delete</b-button>
            </template>

            <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
          </template>

          <template v-slot:row-details="row">
            <b-card>
              <b-form inline>
                <label for="inline-form-input-name" class="font-weight-bold">
                  Letter
                  <b-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0" placeholder="A"></b-input>
                </label>
                <label for="inline-form-input-username" class="font-weight-bold">Frequency</label>
                <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                  <b-input id="inline-form-input-username" placeholder="0.0000"></b-input>
                </b-input-group>
              </b-form>
              <br />
              <b-button size="sm" @click="row.toggleDetails" variant="primary">Save</b-button>
            </b-card>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "datas",
  data() {
    return {
      fields: ["letter", "frequency", "show_details"],
      items: [
        {
          isActive: true,
          age: 40,
          letter: "B",
          frequency: "12.3"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>