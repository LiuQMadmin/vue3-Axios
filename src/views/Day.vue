<template>
    <div class="container" @click="handleClick">
        Day page
    </div>
</template>
<script>
// 现在需要从vue里面解构出来以前的生命周期函数
import { onMounted } from 'vue'
// import getDate from "../services";
import { getData } from "../services/request";
export default {
    name: "DayPage",
    /**
     * 
     */
    setup () {
        // 相当于之前的mounted钩子函数
        onMounted(() => {})
        /**
         * 相当于在methods里面定义的函数
         */
        const handleClick = async () => {
            console.log("handleClick");
            await getData({ date: "2015-1-1" }, (result) => {console.log(result)})
        }
        return {
            /**
             * 但是定义了方法之后要return出去这个函数，在template模板里面才能使用
             */
            handleClick
        }
    }
}
</script>
<style scoped lang="scss">

</style>