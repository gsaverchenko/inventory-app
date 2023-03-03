import { Inventory } from './../components/models';
import { defineStore } from 'pinia'

export const useInventoriesStore = defineStore('inventories', () => {
    const { data: inventories } = useFetch<Inventory[]>('http://localhost:5013/api/Inventories');
    const inventory = ref<Inventory>();

    return { inventories, inventory }
})
