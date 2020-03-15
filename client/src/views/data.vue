<template>
  <div>
    <onav></onav>
    <dat></dat>
  </div>
</template>

<script>
import datas from "@/components/datas.vue";
import onavbar from "@/components/onavbar.vue";

export default {
  name: "data",
  components: {
    dat: datas,
    onav: onavbar
  }
};
</script>

<style lang="scss" scoped>
</style>