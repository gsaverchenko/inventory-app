<script lang="ts" setup>
const store = useInventoriesStore();

const dialog = ref(false);
const name = ref('');
const createItem = async () => {
  dialog.value = false;
  let formData = new FormData();
  formData.append('name', name.value);

  await $fetch('http://localhost:5013/api/Inventories', {
    method: 'POST',
    body: formData
  });
}
</script>

<template>
  <v-card flat>
    <v-row>
      <v-col cols="12">
        <v-card flat title="Select an Inventory"></v-card>
        <v-card v-for="(inventory, index) in store.inventories" :key="index" color="teal" class="ma-2" rounded="xl"
          :to="'inventory/' + inventory.id">
          <v-card-title>{{ inventory.name }}</v-card-title>
          <v-card-subtitle>{{ inventory.id }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <div class="fixed">
      <v-btn icon color="green">
        <v-icon>mdi-plus</v-icon>
        <v-dialog v-model="dialog" activator="parent">
          <v-card>
            <v-card-title>Create Item</v-card-title>
            <v-card-text class="px-5">
              <v-text-field label="Title" v-model="name" />
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" @click="createItem">create</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-btn>
    </div>
  </v-card>
</template>

<style scoped>
/* This can be removed when fab is fixed. */
div.fixed {
  position: fixed;
  bottom: 30px;
  right: 30px;
}
</style>
