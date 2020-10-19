<template>
    <div class="container" @click="heandleChange">
        {{ stateDay.title }}
        {{ data.a }}
        {{ data.b }}
        {{ refdata }}
    </div>
</template>
<script>
import { computed, reactive, getCurrentInstance, ref } from 'vue';
import { useStore, mapGetters } from "vuex";
import { handle } from "./handle";
export default {
    name: "Header",
    setup () {
        /**
         * 使用vuex里面state的数据
         */
        const store = useStore();
        const state = store.state;
        /**
         * 这种使用方法相当有之前vuex里面getters方法获取动态响应数据
         */
        const stateDay = reactive(computed(() => state.day).value);
        /**
         * 这样更符合js的写法规范
         */
        const { data, heandleChange, refdata } = handle();
        /**
         * 在template模板里面使用的数据要在这里进行返回
         */
        return {
            stateDay,
            heandleChange,
            data,
            refdata
        }
    }
}
</script>
<style scoped lang="scss">
.container {
    height: 50px;
    width: 100%;
    line-height: 50px;
    text-align: center;
    background: orangered;
    border-bottom: 1px solid #e3e3e3;
}
</style>