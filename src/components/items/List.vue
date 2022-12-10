<template>
  <table>
    <thead>
      <tr>
        <th v-for="(k, idx) of keys" :key="idx">
          <input
            type="checkbox"
            v-model="checkedAll"
            value="all"
            v-if="k == 'Id'"
          />
          <span>{{ k }}</span>
          <div class="buts">
            <button
              @click="upSort(k)"
              :class="
                atn == 'up' + k
                  ? 'iconfont icon-jiantoushang atn'
                  : 'iconfont icon-jiantoushang'
              "
            ></button>
            <button
              @click="downSort(k)"
              :class="
                atn == 'down' + k
                  ? 'iconfont icon-jiantouxia atn'
                  : 'iconfont icon-jiantouxia'
              "
            ></button>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="d of data" :key="d.id">
        <td v-for="(v, k) of d" :key="v">
          <input
            type="checkbox"
            :value="v"
            v-model="checkedArr"
            v-if="k == 'id'"
          />{{ v }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { onUnmounted, ref, watch } from "@vue/runtime-core";
import * as sort from "@/utils/sort.js";
import emitter from "@/utils/eventbus.js";
import { useStore } from "vuex"
export default {
  name: "List",
  setup() {
    const data = useStore().state.data;
    const keys = ["Id", "Title", "Content", "Status"];
    // 按钮颜色
    const atn = ref("upId");
    // 选中的数据 即待删除数据
    const checkedArr = ref([]);
    // 全选
    const checkedAll = ref(false);
    watch(checkedArr, () => {
      const tip = document.querySelector(".tip");
      // 删除后
      emitter.emit("getDelData", checkedArr.value);
      // 当全部选择时，把全选勾上
      if (data.length == checkedArr.value.length) {
        checkedAll.value = true;
      } else {
        checkedAll.value = false;
      }
      // 为0时展示
      if (checkedArr.value.length == 0) {
        tip.style.display = "none";
      } else {
        tip.style.display = "block";
      }
    });
    watch(checkedAll, () => {
      const tip = document.querySelector(".tip");
      // 全选勾上，全部选择
      if (checkedAll.value) {
        if (data.length != checkedArr.value.length) {
          checkedArr.value.length = 0;
          for (const d of data) {
            checkedArr.value.push(d.id);
          }
          tip.style.display = "block";
          emitter.emit("sendDeleteData", checkedArr.value);
        }
      }
    });
    // 升序
    const upSort = (val) => {
      val = "up" + val;
      atn.value = val;
      sort[val](data);
    };
    // 降序
    const downSort = (val) => {
      val = "down" + val;
      atn.value = val;
      sort[val](data);
    };
    // 事件函数
    const clearCheckedArr = () => {
      checkedArr.value.length = 0;
    } 
    // 绑定事件 Tip组件告诉此组件 已将内容删除 应该将checkedArr清空
    emitter.on('deleted', clearCheckedArr);
    // 删除事件
    onUnmounted(() => {
      emitter.on('deleted', clearCheckedArr);
    })
    return {
      keys,
      data,
      checkedArr,
      checkedAll,
      upSort,
      downSort,
      atn,
    };
  },
};
</script>

<style lang="less" scoped>
table {
  width: 1000px;
  margin-top: 50px;
  tr {
    height: 40px;
    th {
      position: relative;
      background-color: #989898;
      color: #fff;
      text-align: left;
      padding: 0 20px;
      .buts {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        position: absolute;
        right: 25px;
        top: 0;
        width: 12px;
        height: 100%;
        button {
          border: 0;
          background-color: transparent;
          font-size: 10px;
          color: #bebcbc;
          &.atn {
            color: #fff;
          }
        }
      }
    }
    input {
      width: 15px;
      height: 15px;
      margin-right: 15px;
      border-radius: 5px;
    }
  }
  tbody {
    tr {
      background-color: #fff;
      border-bottom: 1px solid #999;
      td {
        padding: 0 20px;
        &:nth-child(1) {
          font-weight: 700;
          color: #46a2c2;
        }
      }
    }
  }
}
</style>