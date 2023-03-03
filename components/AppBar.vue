<script lang="ts" setup>
const emit = defineEmits(["nav"]);
const navClicked = () => { emit("nav") };
</script>

<template>
  <v-app-bar-nav-icon @click="navClicked"></v-app-bar-nav-icon>
  <v-app-bar-title>Inventory App</v-app-bar-title>
  <v-btn icon="mdi-magnify"></v-btn>
  <v-btn icon="mdi-account"></v-btn>
  <v-btn icon="mdi-dots-vertical"></v-btn>
</template>

<style scoped>

</style>
