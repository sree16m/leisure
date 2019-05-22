<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <app-servers-list></app-servers-list>
      <app-server-status></app-server-status>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/shared/Header.vue";
import ServersList from "./components/server/ServersList.vue";
import ServerStatus from "./components/server/ServerStatus.vue";
import Footer from "./components/shared/Footer.vue";

export default {
  components: {
    "app-header": Header,
    "app-servers-list": ServersList,
    "app-server-status": ServerStatus,
    "app-footer": Footer
  }
};
</script>

<style>
</style>
