import {uuid} from "vue-uuid";

export default {
    actions: {
        updateElements: ({commit}, payload) => {
            commit("updateElements", payload);
        },

        editCategory({commit}, payload) {
            commit("EDIT_CATEGORY", payload)
        },

        deleteCategory({commit}, payload) {
            commit("DELETE_CATEGORY", payload)
        },

        updateSearch({commit}, payload) {
            commit("UPDATE_SEARCH", payload)
        }
    },

    mutations: {
        updateElements: (state, payload) => {
            state.items = payload;
        },

        EDIT_CATEGORY(state, payload) {
            switch (payload.type) {
                case 'category':
                    state.items.forEach(item => {
                        if (item.id === payload.item.id) {
                            return item.edit = false
                        } else {
                            return item.edit = true
                        }
                    })
                    break

                case 'child':
                    state.items.forEach((item) => item.children.forEach((subItem) => {
                        if (subItem.id === payload.item.id) {
                            return subItem.edit = false
                        } else {
                            return subItem.edit = true
                        }
                    }))
            }
        },

        DELETE_CATEGORY(state, payload) {
            let parentIdx = state.items.indexOf(payload.item);

            switch (payload.type) {
                case 'category':
                    state.items.splice(parentIdx, 1);
                    break

                case 'child':
                    state.items.forEach((item) => item.children.forEach((subItem, index) => {
                        if (subItem.id === payload.item.id) {
                            return item.children.splice(index, 1);
                        }
                    }));
            }
        },

        UPDATE_SEARCH(state, payload) {
            state.searchValue = payload
        }
    },

    state: {
        searchValue: "",

        items: [
            {
                id: uuid.v1(),
                name: "Central League",
                icon: "fa-solid fa-chevron-down",
                type: "category",
                edit: true,
                children: [
                    {id: uuid.v1(), name: "Dragons", type: "child", edit: true,},
                    {id: uuid.v1(), name: "Tigers", type: "child", edit: true,},
                ],
            },
            {
                id: uuid.v1(),
                name: "Pacific League",
                icon: "fa-solid fa-chevron-down",
                type: "category",
                edit: true,
                children: [
                    {id: uuid.v1(), name: "1", type: "child", edit: true,},
                    {id: uuid.v1(), name: "2", type: "child", edit: true,},
                    {id: uuid.v1(), name: "3", type: "child", edit: true,},
                    {id: uuid.v1(), name: "4", type: "child", edit: true,},
                ],
            },
        ],
    },

    getters: {
        search(state) {
            return state.searchValue
        },

        items(state) {
            return state.items.filter(item => {
                return item.name.toLowerCase().includes(state.searchValue.toLowerCase()) ||
                    item.children.some(e => e.name.toLowerCase().includes(state.searchValue.toLowerCase()))
            })
        }
    }
}

