<script lang="ts" setup>
import { Item } from '../models';

interface ItemIndex {
  item: Item
}

const Props = defineProps<ItemIndex>();
const emit = defineEmits(['useItem', 'addItem'])
const useClicked = () => { emit('useItem') };
const addClicked = () => { emit('addItem') };

const itemColor = computed(() => {
  let result = 'teal'

  if (Props.item.count < 1) result = 'red'
  else if (Props.item.count < 2) result = 'orange'
  else if (Props.item.count < 3) result = 'blue'

  return result;
});
</script>

<template>
  <v-card border rounded="xl" class="ma-2" active-color="green" @click="useClicked">
    <template v-slot:prepend>
      <v-avatar :color="itemColor">
        <v-icon>mdi-food</v-icon>
      </v-avatar>
    </template>
    <template v-slot:title>{{ item.count }} - {{ item.name }}</template>
    <template v-slot:subtitle>{{ item.id }}</template>
    <template v-slot:append>
      <v-btn icon="mdi-plus" @click.stop="addClicked" variant="text" />
      <v-btn icon="mdi-pencil" variant="text" />
    </template>
  </v-card>
</template>

<style scoped>

</style>
