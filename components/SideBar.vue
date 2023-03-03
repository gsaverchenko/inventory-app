<script lang="ts" setup>
</script>

<template>
    <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg" title="Greg Saverchenko">
    </v-list-item>
    <v-divider></v-divider>
    <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home" to="/">
        </v-list-item>
        <v-list-item prepend-icon="mdi-forum" title="About" value="about" to="/about">
        </v-list-item>
    </v-list>
</template>

<style scoped>

</style>
