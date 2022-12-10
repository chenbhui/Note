<template>
  <ul>
    <li>
        <p>Total</p>
        <p>{{ state.total }}</p>
    </li>
    <li>
        <p>Completed</p>
        <p>{{ state.completed }}</p>
    </li>
    <li>
        <p>Not completed</p>
        <p>{{ state.nocompleted }}</p>
    </li>
  </ul>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core';
import { useStore } from "vuex"
export default {
    name: 'Statistics',
    setup() {
        const data = useStore().state.data;
        const state = reactive({
            'total': 18,
            'completed': 12,
            'nocompleted': 7
        });
        // 计算状态
        const computedStateSum = (flag) => {
            let compSum = 0;
            let noCompSum = 0;
            for (const d of data) {
                if (d.status == 'Completed') {
                    compSum++;
                }
                if (d.status == 'Not completed') {
                    noCompSum++;
                }
            }
            if (flag) {
                return compSum;
            } else {
                return noCompSum;
            } 
        }
        state.completed = computed(() => {
            return computedStateSum(true)
        })
        state.nocompleted = computed(() => {
            return computedStateSum(false)
        })
        state.total = computed(() => {
            return data.length;
        })
        return {
            state
        }
    }
}
</script>

<style lang="less" scoped>
    ul {
        display: flex;
        width: 600px;
        height: 100px;
        background-color: #fff;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, .3);
        li {
            display: flex;
            flex-direction: column;
            width: calc(100% / 3);
            height: 100%;
            justify-content: center;
            flex-wrap: wrap;
            p {
                width: 100%;
                text-align: center;
                &:nth-child(1) {
                    color: #d0d0d0;
                    font-weight: 700;
                }
                &:nth-child(2) {
                    color: #8e8e8e;
                    font-size: 20px;
                }
            }
        }
    }
</style>