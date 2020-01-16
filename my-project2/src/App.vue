<template>
  <div id="app">
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
    <!-- <button @click="test">点我</button> -->
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  methods: {
    async test () {
      let res = await this.$api.student.list()
      console.log(res)
    }
  },
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
