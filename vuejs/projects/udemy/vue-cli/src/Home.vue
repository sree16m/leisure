<template>
  <div>
    <app-status v-for="server in 5"></app-status>
  </div>
</template>

<script>
import Status from "./Status.vue";

export default {
  components: {
    "app-status": Status
  }
};
</script>

<style>
</style>