import { createStore } from 'vuex'

export default createStore({
    state: {
        lists: [
            {
                id: 0,
                name: 'List 1',
                items: [
                    {
                        id: 0,
                        name: 'Item 1',
                        amount: 10,
                        color: "#CD5C5C",
                        active: true
                    },
                    {
                        id: 1,
                        name: 'Item 2',
                        amount: 23,
                        color: "#F08080",
                        active: true
                    },
                    {
                        id: 2,
                        name: 'Item 3',
                        amount: 4,
                        color: "#FA8072",
                        active: false
                    },
                    {
                        id: 3,
                        name: 'Item 4',
                        amount: 6,
                        color: "#E9967A",
                        active: false
                    },
                    {
                        id: 4,
                        name: 'Item 5',
                        amount: 18,
                        color: "#FFA07A",
                        active: true
                    },
                ],
                isRandomSort: false,
                isActiveItems: true,
                show: false
            },
            {
                id: 1,
                name: 'List 2',
                items: [
                    {
                        id: 0,
                        name: 'Item 1',
                        amount: 16,
                        color: "#FFA07A",
                        active: true
                    },
                    {
                        id: 1,
                        name: 'Item 2',
                        amount: 5,
                        color: "#F08080",
                        active: true
                    },
                    {
                        id: 2,
                        name: 'Item 3',
                        amount: 11,
                        color: "#FA8072",
                        active: false
                    },
                    {
                        id: 3,
                        name: 'Item 4',
                        amount: 13,
                        color: "#E9967A",
                        active: false
                    },
                    {
                        id: 4,
                        name: 'Item 5',
                        amount: 26,
                        color: "#DC143C",
                        active: true
                    },
                    {
                        id: 5,
                        name: 'Item 6',
                        amount: 12,
                        color: "#CD5C5C",
                        active: false
                    },
                    {
                        id: 6,
                        name: 'Item 7',
                        amount: 20,
                        color: "#FF0000",
                        active: false
                    },
                    {
                        id: 7,
                        name: 'Item 8',
                        amount: 16,
                        color: "#B22222",
                        active: true
                    },
                ],
                isRandomSort: false,
                isActiveItems: true,
                show: false
            },
            {
                id: 2,
                name: 'List 3',
                items: [
                    {
                        id: 0,
                        name: 'Item 1',
                        amount: 7,
                        color: "#8B0000",
                        active: false
                    },
                    {
                        id: 1,
                        name: 'Item 2',
                        amount: 14,
                        color: "#F08080",
                        active: false
                    },
                    {
                        id: 2,
                        name: 'Item 3',
                        amount: 10,
                        color: "#FFC0CB",
                        active: false
                    },
                    {
                        id: 3,
                        name: 'Item 4',
                        amount: 2,
                        color: "#E9967A",
                        active: false
                    },
                    {
                        id: 4,
                        name: 'Item 5',
                        amount: 11,
                        color: "#FFA07A",
                        active: false
                    },
                ],
                isRandomSort: false,
                isActiveItems: false,
                show: false
            },
            {
                id: 3,
                name: 'List 4',
                items: [
                    {
                        id: 0,
                        name: 'Item 1',
                        amount: 19,
                        color: "#FFB6C1",
                        active: false
                    },
                    {
                        id: 1,
                        name: 'Item 2',
                        amount: 3,
                        color: "#FF69B4",
                        active: false
                    },
                    {
                        id: 2,
                        name: 'Item 3',
                        amount: 21,
                        color: "#FA8072",
                        active: false
                    },
                    {
                        id: 3,
                        name: 'Item 4',
                        amount: 17,
                        color: "#F08080",
                        active: false
                    },
                    {
                        id: 4,
                        name: 'Item 5',
                        amount: 9,
                        color: "#FFA07A",
                        active: false
                    },
                    {
                        id: 5,
                        name: 'Item 6',
                        amount: 7,
                        color: "#FF1493",
                        active: false
                    },
                    {
                        id: 6,
                        name: 'Item 7',
                        amount: 24,
                        color: "#C71585",
                        active: false
                    },
                ],
                isRandomSort: false,
                isActiveItems: false,
                show: false
            },
            {
                id: 4,
                name: 'List 5',
                items: [
                    {
                        id: 0,
                        name: 'Item 1',
                        amount: 6,
                        color: "#DC143C",
                        active: true
                    },
                    {
                        id: 1,
                        name: 'Item 2',
                        amount: 12,
                        color: "#CD5C5C",
                        active: true
                    },
                    {
                        id: 2,
                        name: 'Item 3',
                        amount: 24,
                        color: "#FA8072",
                        active: false
                    },
                    {
                        id: 3,
                        name: 'Item 4',
                        amount: 15,
                        color: "#8B0000",
                        active: false
                    },
                ],
                isRandomSort: false,
                isActiveItems: true,
                show: false
            },
        ],
        sortedArrays: {}
    },
    getters: {
        lists(state) {
            return state.lists
        },
        sortedArrays(state) {
            return state.sortedArrays
        }
    },
    mutations: {
        setListShow(state, { listId, val }) {
            state.lists.find(l => l.id === listId).show = val
        },
        setItemAmount(state, { listId, itemId, amount }) {
            let currentItems = state.lists.find(l => l.id === listId).items
            currentItems.find(i => i.id === itemId).amount = amount
        },
        setItemColor(state, { listId, itemId, color }) {
            let currentItems = state.lists.find(l => l.id === listId).items
            currentItems.find(i => i.id === itemId).color = color
        },
        setItemActive(state, { listId, itemId, val }) {
            let currentItems = state.lists.find(l => l.id === listId).items
            currentItems.find(i => i.id === itemId).active = val
        },
        checkListActive(state, listId) {
            let currentList = state.lists.find(l => l.id === listId)

            let activeItem = currentList.items.find(i => i.active === true)

            if (!activeItem) {
                currentList.isActiveItems = false
            } else {
                currentList.isActiveItems = true
            }
        },
        setListActive(state, { listId, val }) {
            let currentList = state.lists.find(l => l.id === listId)
            currentList.isActiveItems = val


            currentList.items.forEach(item => {
                if (val === true) {
                    item.active = true
                } else {
                    item.active = false
                }
            })

        },
        setItemsSort(state, { listId, val }) {
            let currentList = state.lists.find(l => l.id === listId)
            currentList.isRandomSort = val
        },
        deleteItemSort(state, { list, color }) {
            let currentList = state.lists.find(l => l.id === list.id)
            let currentItems = currentList.items.find(i => i.color === color)

            currentItems.amount--
        },
        setSort(state, list) {
            if (list.isRandomSort) {
                let targetArray = [];

                for (let i = 0; i < list.items.length; i++) {
                    if (list.items[i].active && list.items[i].amount) {
                        for (let j = 0; j < list.items[i].amount; j++) {
                            targetArray.push(list.items[i].color);
                        }
                    }
                }

                for (let i = targetArray.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    [targetArray[i], targetArray[j]] = [targetArray[j], targetArray[i]];
                }

                state.sortedArrays[list.id] = targetArray;
            }
        },
    },
})
