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
import { ref,onUnmounted, reactive } from "vue";
import { useStore } from "vuex"
import emitter from "@/utils/eventbus.js";
export default {
  name: "Tip",
  setup() {
    const store = useStore();
    const tip = ref(null);
    // 删除的数据
    let delData = reactive([]);
    const noDisplay = () => {
      tip.value.style.display = "none";
    };
    const sendDeleteDire = () => {
      noDisplay();
      store.dispatch("deleteData", delData);
      // 告诉List组件已删除
      emitter.emit('deleted');
    };
    const saveDelData = (d) => {
      delData = d;
    }
    // 注册事件
    emitter.on('getDelData',saveDelData)
    // 注销事件
    onUnmounted(() => {
      emitter.off('getDelData',saveDelData)
    })
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