<template>
  <div id="app">
    <Header />
    <router-view />
    <Tap />
  </div>
</template>
<script>
import { watch } from "vue";
import Header from "./components/header";
import Tap from "./components/tap";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  name: 'App',
  components: {
    Header,
    Tap
  },
  setup () {
    let store = useStore();
    let router = useRouter();
    /**
     * watch的使用
     */
    watch(() => {
      return router.currentRoute.value.name;
    }, (valueName) => {
      let data = null;
      switch(valueName) {
        case "DayPage": data = "当天信息"; break;
        case "MonthPage": data = "当月信息"; break;
        case "YearPage": data = "当年信息"; break;
        default: break;
      }
      /**
       * 触发分包之后的mutations函数
       */
      store.commit("day/changeTitle", data);
    })
  }
}
</script>
<style lang="scss">
</style>
