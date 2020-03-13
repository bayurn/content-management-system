<template>
  <div class="container">
    <b-card>
      <b-tabs content-class="mt-3">
        <!-- This tabs content will always be mounted -->
        <b-tab title="Login">
          <b-row class="my-3">
            <b-col sm="12">
              <b-form-input id="input-large" size="lg" placeholder="Email"></b-form-input>
            </b-col>
          </b-row>

          <b-row class="mt-3">
            <b-col sm="12">
              <b-form-input id="input-large" size="lg" placeholder="Password"></b-form-input>
            </b-col>
          </b-row>

          <div class="text-center mt-3">
            <b-button size="lg" variant="info" style="align:justify" align="center">LOG IN</b-button>
          </div>
        </b-tab>

        <!-- This tabs content will not be mounted until the tab is shown -->
        <!-- and will be un-mounted when hidden -->
        <b-tab title="Register" lazy>
          <b-row class="my-3">
            <b-col sm="12">
              <b-form-input id="input-large" size="lg" placeholder="Email"></b-form-input>
            </b-col>
          </b-row>

          <b-row class="mt-3">
            <b-col sm="12">
              <b-form-input id="input-large" size="lg" placeholder="Password"></b-form-input>
            </b-col>
          </b-row>

          <b-row class="mt-3">
            <b-col sm="12">
              <b-form-input id="input-large" size="lg" placeholder="Confirm Password"></b-form-input>
            </b-col>
          </b-row>

          <div class="text-center mt-3" style="align: center">
            <b-button
              size="lg"
              variant="success"
              style="align:justify"
              align="text-center"
            >REGISTER NOW</b-button>
          </div>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "login"
};
</script>

<style lang="scss" scoped>
</style>