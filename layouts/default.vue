<script lang="ts" setup>
const showDrawer = ref(false);
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="showDrawer" temporary>
      <SideBar />
    </v-navigation-drawer>
    <v-app-bar density="compact">
      <AppBar @nav="showDrawer = !showDrawer" />
    </v-app-bar>
    <v-main style="height: 250px">
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>

</style>
