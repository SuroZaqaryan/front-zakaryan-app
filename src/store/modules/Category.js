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
        },

        createCategory({commit}) {
            commit("CREATE_CATEGORY")
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
                    state.items?.forEach((item, index) => {
                        if (item.id === payload.item.id) {
                            return state.items.splice(index, 1);
                        } else {
                            item.children?.forEach((subItem, index) => {
                                if (subItem.id === payload.item.id) {
                                    return item.children.splice(index, 1);
                                }
                            })
                        }
                    });
            }
        },

        UPDATE_SEARCH(state, payload) {
            state.searchValue = payload
        },

        CREATE_CATEGORY(state) {
            state.items.push({
                    id: uuid.v1(),
                    name: "Новая категория",
                    icon: "fa-solid fa-chevron-down",
                    type: "category",
                    edit: true,
                    children: [
                        {id: uuid.v1(), name: "Документ 1", type: "child", edit: true,},
                        {id: uuid.v1(), name: "Документ 2", type: "child", edit: true,},
                        {id: uuid.v1(), name: "Документ 3", type: "child", edit: true,},
                        {id: uuid.v1(), name: "Документ 4", type: "child", edit: true,},
                    ],
                },
            )
        }
    },

    state: {
        searchValue: "",

        items: [
            {
                id: uuid.v1(),
                name: "Обязательные для всех",
                subName: "Документы, обязательные для всех сотрудников без исключения",
                icon: "fa-solid fa-chevron-down",
                type: "category",
                edit: true,
                colors: ['pink', 'yellow', 'orange'],
                children: [
                    {
                        id: uuid.v1(),
                        name: "Паспорт",
                        subName: "Для всех",
                        status: true,
                        type: "child",
                        colors: ['blue'],
                        edit: true,
                    },
                    // {id: uuid.v1(), name: "ИНН", subName: "Для всех", status: true, type: "child", edit: true,},
                ],
            },
            // {
            //     id: uuid.v1(),
            //     name: "Обязательные для трудоустройства",
            //     subName: "Документы, без которых невозможно трудоустройство человека на какую бы то ни было должность в компании вне зависимости от гргаждан",
            //     icon: "fa-solid fa-chevron-down",
            //     type: "category",
            //     edit: true,
            //     children: [
            //         {id: uuid.v1(), name: "Документ 1", subName: "Для всех", status: false, type: "child", edit: true,},
            //         {id: uuid.v1(), name: "Документ 2", subName: "Для всех", status: false, type: "child", edit: true,},
            //         {id: uuid.v1(), name: "Документ 3", subName: "Для всех", status: false, type: "child", edit: true,},
            //         {id: uuid.v1(), name: "Документ 4", subName: "Для всех", status: false, type: "child", edit: true,},
            //     ],
            // },
            // {
            //     id: uuid.v1(),
            //     name: "Специальные",
            //     icon: "fa-solid fa-chevron-down",
            //     type: "category",
            //     edit: true,
            //     children: [
            //         {id: uuid.v1(), name: "Документ 1", type: "child", edit: true,},
            //         {id: uuid.v1(), name: "Документ 2", type: "child", edit: true,},
            //         {id: uuid.v1(), name: "Документ 3", type: "child", edit: true,},
            //         {id: uuid.v1(), name: "Документ 4", type: "child", edit: true,},
            //     ],
            // },
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

