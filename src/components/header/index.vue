<template>
  <div class="container" @click="heandleChange">
    {{ stateDay.title }}
    {{ data.a }}
    {{ data.b }}
    {{ refdata }}
    {{ newObj }}
    <button @click="changeName">change</button>
  </div>
</template>
<script>
import { computed, reactive, toRef, getCurrentInstance, ref, toRefs } from 'vue'
import { useStore, mapGetters } from 'vuex'
import { handle } from './handle'
export default {
  name: 'Header',
  setup() {
    /**
     * 使用vuex里面state的数据
     */
    const store = useStore()
    const state = store.state
    /**
     * 这种使用方法相当有之前vuex里面getters方法获取动态响应数据
     */
    const stateDay = reactive(computed(() => state.day).value)
    /**
     * 这样更符合js的写法规范
     */
    const { data, heandleChange, refdata } = handle()
    /**
     * 创建一个函数
     * 区别ref,reactive,toRef,toRefs
     * 创建一个普通的对象 let obj = {name: "小明"}
     * let newObj = toRef(obj, "name")
     * newObj.value = "小红"   {{ newObj }} 数据发生变化了，但是视图还是没有更新，显示小明
     * toRef是把对象中的某一个key变成响应式的数据，toRefs是把整个对象变成响应式的引用数据
     */
    let msgdata = {
      name: 'lqm',
      age: 28,
    }
    let newObj = toRef(msgdata, 'name')
    let msgres = toRefs(msgdata)
    const changeName = () => {
      setTimeout(() => {
        newObj.value = 'Tome'
        // msgres.name = 'hello'
        console.log(newObj, 'msgdata')
        console.log(msgres, 'msgres')
        console.log(msgdata, 'msgdata')
      }, 2000)
    }
    /**
     * 在template模板里面使用的数据要在这里进行返回
     */
    return {
      stateDay,
      heandleChange,
      data,
      refdata,
      changeName,
      newObj,
      msgdata,
    }
  },
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
