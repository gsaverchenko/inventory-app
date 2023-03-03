export interface Group {
    id: string,
    name: string
    items: Item[]
}

export interface Item extends Group {
    count?: number,
    color: string
}

export interface Inventory {
    id: string,
    name: string,
    groups: Group[],
    items: Item[]
}
