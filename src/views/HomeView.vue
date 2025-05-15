<script setup lang="ts"></script>

<template>
  <div class="Home border">
    <p style="font-size: 30px">这是一个笔记网站</p>
    <p>用来记录一些 <del>摸鱼</del> 自学过程中学习过的课程和一些宝藏资源</p>
    <p>（感谢B站大学和互联网开源精神）</p>
    <img src="../assets/image.png" alt="" style="height: 300px" />
  </div>
</template>

<style scoped>
.border {
  border: 1px solid black;
}
.Home {
  display: flex;
  width: 100%;
  height: 800px;
  flex-direction: column;
  padding-top: 150px;
  align-items: center;
}
</style>
