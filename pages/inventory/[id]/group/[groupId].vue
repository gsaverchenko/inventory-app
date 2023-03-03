<script lang="ts" setup>
const route = useRoute();
const store = useInventoriesStore();
const groupId = route.params.groupId;
const inventory = store.inventory;
const group = inventory.groups.find((i) => i.id == groupId);

const dialog = ref(false);
const name = ref("");
const count = ref(0);
const checkbox = ref(false);

const useItem = (item) => {
    if (item.count > 0) item.count--;
};
const addItem = (item) => {
    item.count++;
};
const createItem = () => {
    dialog.value = false;
};
</script>

<template>
    <v-card flat>
        <v-row>
            <v-col cols="12">
                <v-card flat :title="inventory.name + ' > ' + group.name" />
                <v-card subtitle="Items" flat>
                    <InventoryItem v-for="(item, index) in group.items" :key="index" :item="item"
                        @useItem="useItem(item)" @addItem="addItem(item)" />
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
                            <v-text-field label="Count" v-model="count" />
                            <v-text-field label="Count" :disabled="checkbox" />
                            <v-checkbox label="Folder" v-model="checkbox" />
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
