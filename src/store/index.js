import { createStore } from 'vuex'
export default createStore({
    state: {
        maxLen: 3,
        data: [
            {
                id: 1,
                title: "delectus aut autem",
                content: "Lorem ipsum",
                status: "New",
            },
            {
                id: 2,
                title: "quis ut nam facilis et officia qui",
                content: "Lorem ipsum",
                status: "Completed",
            },
            {
                id: 3,
                title: "fugiat veniam minus",
                content: "Lorem ipsum",
                status: "Not completed",
            },
        ]
    },
    actions: {
        // 添加数据
        addData({ state }, value) {
            state.data.push({
                id: ++state.maxLen,
                title: value[0],
                content: value[1],
                string: "New",
            });
        },
        // 删除数据
        deleteData({ state }, value) {
            const data = state.data;
            console.log(data);
            console.log(value);
            if (value.length == data.length) {
                data.length = 0;
            } else {
                for (const d of value) {
                    for (let i = 0; i < data.length; i++) {
                        if (d == data[i].id) {
                            data.splice(i, 1);
                        }
                    }
                }
            }
        }
    }
})