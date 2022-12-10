<template>
  <div class="tip iconfont icon-09jingshifill" ref="tip">
    <span>Do you want to delete this note?</span>
    <div class="buts">
      <button @click="noDisplay" class="no">No</button>
      <button @click="sendDeleteDire" class="yes">Yes</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Tip",
  setup(props, ctx) {
    const tip = ref(null);
    const noDisplay = () => {
      tip.value.style.display = "none";
    };
    const sendDeleteDire = () => {
      noDisplay();
      ctx.emit("sendDelete");
    };
    return { tip, sendDeleteDire, noDisplay };
  },
};
</script>

<style lang="less" scoped>
.tip {
  display: none;
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 700px;
  height: 40px;
  line-height: 30px;
  color: #fff;
  background-color: #ff0000;
  border-radius: 5px;
  padding: 5px;
  span {
    display: inline-block;
    margin-left: 5px;
  }
  .buts {
    float: right;
    width: 150px;
    height: 100%;
    button {
      width: 70px;
      height: 100%;
      text-align: center;
      line-height: 100%;
      border-radius: 5px;
      &:nth-child(1) {
        color: #fff;
        background-color: transparent;
        border: 1px solid #fff;
        margin-right: 10px;
      }
      &:nth-child(2) {
        color: #ff0000;
        border: none;
        background-color: #fff;
      }
    }
  }
}
</style>