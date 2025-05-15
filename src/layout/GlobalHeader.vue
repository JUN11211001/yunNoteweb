<template>
  <div class="globalheader">
    <div @click="goto('/')">
      <img src="../assets/logo.png" alt="" style="height: 100px" />
    </div>
    <div class="route">
      <button @click="goto('/learning')">基础知识</button>
      <button @click="goto('/tools')">好用工具</button>
      <button @click="goto('/websites')">宝藏网站</button>
      <button @click="goto('/skills')">实用技巧</button>
      <button @click="goto('/knowledge')">一些资料</button>
    </div>
    <div class="search"></div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goto = (link: string) => {
  router.push(link)
}
</script>

<style scoped>
.globalheader {
  display: flex;

  height: 100px;
  justify-content: center;
  align-content: center;
  background-color: #35acdb;
  background-image: linear-gradient(135deg, #35acdb 37%, #8bc6ec 98%);
}

.globalheader .route {
  display: flex;
  flex: auto;

  margin: 50px;
  align-items: center;
  justify-content: space-evenly;
}
.globalheader .route button {
  margin: 10px;
  background: none;
  border: none;
  font-size: 23px;
}
.globalheader .search {
  width: 200px;
}
</style>
