<template>
  <div>
    <button @click="popAddBox">Add</button>
  </div>
</template>

<script>
export default {
  name: "AddButton",
  setup() {
    const popAddBox = () => {
      const addBox = document.querySelector(".add-box");
      addBox.style.display = "block";
    };
    return { popAddBox };
  },
};
</script>

<style lang="less" scoped>
div {
  width: 1000px;
  margin-top: 20px;
  text-align: right;
  button {
    display: inline-block;
    width: 120px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border: 0;
    background-color: #00689b;
    color: #fff;
    &:hover {
      background-color: #5db2dc;
    }
  }
}
</style>