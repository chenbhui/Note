<template>
  <Statistics></Statistics>
  <List @sendDeleteData="getDeleteData" :isDelete="isDelete"></List>
  <AddButton></AddButton>
  <AddFrame @changeData="addData"></AddFrame>
  <Tip @sendDelete="deleteData"></Tip>
</template>

<script>
import Statistics from "@/components/items/Statistics.vue";
import List from "@/components/items/List.vue";
import AddFrame from "@/components/items/AddFrame.vue";
import Tip from "@/components/items/Tip.vue";
import AddButton from "@/components/items/AddButton.vue";
import { provide, reactive, ref } from "vue";
import { v4 as uuidv4 } from "uuid";
export default {
  name: "Items",
  components: {
    Statistics,
    List,
    AddFrame,
    Tip,
    AddButton,
  },
  setup() {
    let maxLen = 3;
    const data = reactive([
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
    ]);
    provide("data", data);
    // 添加数据
    const addData = (title, content) => {
      data.push({
        id: ++maxLen,
        title: title,
        content: content,
        string: "New",
      });
    };
    // 需要删除的数据
    let delData = reactive([]);
    // 是否执行了删除操作
    const isDelete = ref(false);
    const getDeleteData = (del) => {
      isDelete.value = false;
      delData = del;
    };
    // 删除数据
    const deleteData = () => {
      if (delData.length == data.length) {
        data.length = 0;
      } else {
        for (const d of delData) {
          for (let i = 0; i < data.length; i++) {
            if (d == data[i].id) {
              data.splice(i, 1);
            }
          }
        }
      }
      isDelete.value = true;
    };
    return { data, addData, getDeleteData, deleteData, isDelete };
  },
};
</script>

<style>
</style>