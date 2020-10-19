import { computed, reactive, ref } from 'vue';
const handle = () => {
    let data = reactive({
        a: 1,
        b: computed(() => data.a)
    })
    /**
     * ref一个基本类型变量的赋值
     */
    let refdata = ref(0);
    const heandleChange = () => {
        // 基本类型数据赋值
        refdata.value = 10;
        data.a++;
    }
    return {
        data,
        heandleChange,
        refdata
    }
}
export {
    handle
}