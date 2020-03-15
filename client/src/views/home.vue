<template>
  <div id="app">
    <onav></onav>
    <div class="container">
    <br>
      <b-card bg-variant="dark" text-variant="white" class="text-left">
        <h3>Welcome, Admin01</h3>
      </b-card>
    </div>
  </div>
</template>


<script>
import onavbar from "@/components/onavbar.vue";

export default {
  name: "home",
  components: {
    onav: onavbar
  }
};
</script>

<style lang="scss" scoped>
</style>