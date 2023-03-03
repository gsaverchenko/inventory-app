<script lang="ts" setup>
import { Group } from '../models';

interface ItemIndex {
  item: Group
}

defineProps<ItemIndex>();
const store = useInventoriesStore();
</script>

<template>
  <v-card border rounded="xl" class="ma-2" :to="store.inventory.id + '/group/' + item.id">
    <template v-slot:prepend>
      <v-avatar color="grey-lighten-1">
        <v-icon>mdi-folder</v-icon>
      </v-avatar>
    </template>
    <template v-slot:title>{{ item.name }}</template>
    <template v-slot:subtitle>{{ item.id }}</template>
    <template v-slot:append>
      <v-btn icon="mdi-pencil" variant="text" />
    </template>
  </v-card>
</template>

<style scoped>

</style>
