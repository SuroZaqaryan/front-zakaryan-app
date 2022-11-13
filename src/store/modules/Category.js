export default {
    actions: {
        updateElements: ({ commit }, payload) => {
            commit("updateElements", payload);
        },

        openCategory({ commit }, payload) {
            commit("OPEN_CATEGORY", payload);
        },

        editCategory({ commit }, payload) {
            commit("EDIT_CATEGORY", payload)
        },

        deleteCategory({ commit }, payload) {
            commit("DELETE_CATEGORY", payload)
        },

        updateSearch({ commit }, payload) {
            commit("UPDATE_SEARCH", payload)
        }
    },

    mutations: {
        updateElements: (state, payload) => {
            state.categories = payload;
        },

        OPEN_CATEGORY(state, payload) {
            state.categories.forEach((item, idx) => {
                if (payload === idx) {
                    item.open = !item.open;
                } else {
                    item.open = false
                }
            });
        },

        EDIT_CATEGORY(state, payload) {
            console.log(state)
            switch (payload.type) {
                case 'category':
                    payload.item.edit = false
                    break
                case 'elem':
                    payload.itemChild.edit = false
            }
        },

        DELETE_CATEGORY(state, payload) {
            let parentIdx = state.categories.indexOf(payload.item);
            let childIdx = payload.item.elems.indexOf(payload.itemChild)

            switch (payload.type) {
                case 'category':
                    state.categories.splice(parentIdx, 1);
                    break
                case 'elem':
                    payload.item.elems.splice(childIdx, 1);
            }
        },

        UPDATE_SEARCH(state, payload) {
            state.searchValue = payload
        }
    },

    state: {
        searchValue: "",

        categories: [
            {
                id: 0,
                title: "about",
                open: false,
                edit: true,

                elems: [{
                    title: "1",

                },
                {
                    title: "2",

                }],
            },
            {
                id: 1,
                title: "services",
                open: false,
                edit: true,

                elems: [{
                    title: "3",
                },
                {
                    title: "4",
                }],
            },
        ],
    },

    getters: {
        categories(state) {
            return state.categories.filter(item => {
                return item.title.toLowerCase().includes(state.searchValue.toLowerCase()) ||
                    item.elems.some(e => e.title.toLowerCase().includes(state.searchValue.toLowerCase()))
            })
        }
    }
}