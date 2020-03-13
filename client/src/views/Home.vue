<template>
  <div>
    <b-container>
      <b-row>
        <dash></dash>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import dashboard from "@/components/dashboard.vue";

export default {
  name: "Home",
  components: {
    dash: dashboard
  }
};
</script>
