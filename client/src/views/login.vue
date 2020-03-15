<template>
  <div class="container">
    <b-card class="text-center">
      <b-tabs
        content-class="mt-6"
        align="center"
        active-nav-item-class="font-weight-bold text-uppercase text-primary"
        active-tab-class="font-weight-bold text-success"
      >
        <b-tab title="Login">
          <b-row class="justify-content-md-center mt-3">
            <b-col sm="10">
              <b-form-input
                align="center"
                type="email"
                id="input-large"
                size="lg"
                placeholder="Email"
              ></b-form-input>
            </b-col>
          </b-row>

          <b-row class="justify-content-md-center mt-3">
            <b-col sm="10">
              <b-form-input type="password" id="input-large" size="lg" placeholder="Password"></b-form-input>
            </b-col>
          </b-row>

          <b-row class="mt-3">
            <b-col sm="12"></b-col>
          </b-row>

          <div class="text-center mt-6">
            <b-button
              size="lg"
              variant="info"
              style="align:justify"
              align="center"
              href="/home"
            >LOG IN</b-button>
          </div>
        </b-tab>

        <b-tab title="Register" lazy>
          <b-row class="justify-content-md-center mt-3">
            <b-col sm="10">
              <b-form-input id="input-large" size="lg" placeholder="Email"></b-form-input>
            </b-col>
          </b-row>

          <b-row class="justify-content-md-center mt-3">
            <b-col sm="10">
              <b-form-input id="input-large" size="lg" placeholder="Password"></b-form-input>
            </b-col>
          </b-row>

          <b-row class="justify-content-md-center mt-3">
            <b-col sm="10">
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