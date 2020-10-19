<template>
    <div class="container">
        <div class="container-item" v-for="(item, index) of tapData" :key="index">
            <router-link :to="item.path">
                {{ item.tabText }}
            </router-link>
        </div>
    </div>
</template>
<script>
import { tapData } from "./tapData";
export default {
    name: "Tap",
    setup () {
        return {
            tapData
        }
    }
}
</script>
<style lang="scss" scoped>
.container {
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    display: flex;
    border-top: 1px solid #e3e3e3;
    background: #ffffff;
    &-item {
        flex: 1;
        // background: fuchsia;
        line-height: 50px;
        text-align: center;
        font-size: 22px;
    }
    &-item1 {
        flex: 1;
        // background: red;
        line-height: 50px;
        text-align: center;
        font-size: 22px;
    }
    .router-link-active {
        color: red;
    }
}
</style>