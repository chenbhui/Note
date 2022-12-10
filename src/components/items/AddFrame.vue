<template>
  <div class="add-box" ref="addBox">
    <h1>Add note</h1>
    <input v-model="title" type="text" placeholder="Add note" />
    <textarea v-model="content"></textarea>
    <button @click="save" class="save atn">Save</button>
    <button @click="cancel" class="cancel">Cancel</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "AddFrame",
  setup() {
    const addBox = ref(null);
    const title = ref("");
    const content = ref("");
    const store = useStore();
    function save() {
      if (title.value != "" && content.value != "") {
        cancel();
        store.dispatch("addData", [ title.value, content.value ]);
      }
    }
    function cancel() {
      addBox.value.style.display = "none";
    }
    return { addBox, save, cancel, title, content };
  },
};
</script>

<style lang="less" scoped>
.add-box {
  display: none;
  position: fixed;
  bottom: 30px;
  left: 30px;
  width: 400px;
  height: 300px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  h1 {
    font-size: 20px;
    font-weight: 400;
  }
  input {
    width: 100%;
    height: 40px;
    padding: 8px;
    margin-top: 15px;
    border: 2px solid #999;
  }
  textarea {
    width: 100%;
    height: 100px;
    padding: 8px;
    margin-top: 20px;
    margin-bottom: 16px;
    resize: none;
    border: 2px solid #999;
  }
  button {
    display: inline-block;
    width: 120px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border: 0;
    &:hover {
      background-color: #5db2dc;
    }
  }
  .save {
    margin-right: 20px;
    background-color: #00689b;
    color: #fff;
  }
  .cancel {
    color: #00689b;
    background-color: #fff;
  }
}
</style>