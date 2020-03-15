<template>
  <div>
    <b-card
      border-variant="primary"
      class="text-left"
      header-bg-variant="primary"
      text-variant="white"
      header="Welcome to Dashboard"
    >
      <div>
        <b-button block variant="danger" style="width: 1000px">
          <b-icon-bar-chart-fill></b-icon-bar-chart-fill>
          <br />Line
        </b-button>
        <b-button block variant="warning" style="width: 1000px; color: white">
          <b-icon-pie-chart-fill></b-icon-pie-chart-fill>
          <br />Pie
        </b-button>
        <b-button block variant="primary" style="width: 1000px" href="/bar">
          <i class="fa fa-bar-chart"></i>
          <br />Bar
        </b-button>
        <b-button block variant="success" style="width: 1000px">
          <i class="fa fa-globe"></i>
          <br />Maps
        </b-button>
        <b-button block variant="info" style="width: 1000px" href="/login">
          <i class="fa fa-user"></i> Admin Panel
        </b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "dashboard"
};
</script>

<style lang="scss" scoped>
</style>