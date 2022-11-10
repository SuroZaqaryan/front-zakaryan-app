export default {
    actions: {
        openCategory({ commit }, payload) {
            commit("OPEN_CATEGORY", payload);
        }
    },

    mutations: {
        OPEN_CATEGORY(state, payload) {
            state.categories.forEach((item, idx) => {
                if(payload === idx) {
                    item.open = !item.open;
                } else {
                    item.open = false
                }
            });
        }
    },

    state: {
        categories: [
            {
                title: "Обязательное поле для всех",
                open: false,
                elems: [{ title: "Passport" }, { title: "IIn" }],
            },
            {
                title: "Обязательное поле для всех",
                open: false,
                elems: [{ title: "Passport" }, { title: "IIn" }],
            },
        ],
    },

    getters: {
        categories(state) {
            return state.categories
        }
    }
}