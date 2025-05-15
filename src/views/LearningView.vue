<template>
  <div class="Learning">
    <div class="card">
      <div>
        <img src="../assets/learning/image1.png" alt="" />
        <a href="https://space.bilibili.com/34786453/lists/268989?type=season">课程入口</a>
      </div>
      <div>
        <p>课程：Re01系列-从零开始的编程之路</p>
        <p>
          简介：以为什么和怎么学为先导课，从html开始教学，可以一步步看到自己搭建出来的网页，而且还讲解了如何将静态网页挂载在GitHub中。
        </p>
        <p>
          感受：非常适合非科班初学者入门，前期学习正反馈十足，能激发对编程的热情。但后期JS和小程序太过省略，让人云里雾里。
        </p>
      </div>
    </div>
    <div class="card">
      <div>
        <img src="../assets/learning/image2.png" alt="" />
        <a
          href="https://www.bilibili.com/video/BV1et411b73Z/?spm_id_from=333.1387.homepage.video_card.click&vd_source=b934a9595fc814278fbded130ba2beb0"
          >课程入口</a
        >
      </div>
      <div>
        <p>课程：从0到1入门C++</p>
        <p>
          简介：黑马程序员的经典之作，内容涵盖C++基础知识，讲解通俗易懂深入浅出，有适量的实战项目进行练习。
        </p>
        <p>
          感受：个人非常喜欢这套C++课程，讲解的很仔细，实战也恰到好处，适用于打牢C++基础，但对于考试而言还是少了些练习。
        </p>
      </div>
    </div>
    <div class="card">
      <div>
        <img src="../assets/learning/image3.png" alt="" />
        <a
          href="https://www.bilibili.com/video/BV1vkRAYVExJ/?spm_id_from=333.1387.homepage.video_card.click&vd_source=b934a9595fc814278fbded130ba2beb0"
          >课程入口</a
        >
      </div>
      <div>
        <p>课程：一天学会vue3！从基础到精通</p>
        <p>
          简介：课程精简凝练，快速讲解了vue3的一些基本语法、事件传参、利用模板语法产生动态效果等。（作者存疑，B站上有不止一套相同作品）
        </p>
        <p>感受：入门确实可以，一天想精通还是太夸张了。</p>
      </div>
    </div>
    <div class="card">
      <div>
        <img src="../assets/learning/image4.png" alt="" /><a
          href="https://www.bilibili.com/video/BV1qbNJeWEBz/?spm_id_from=333.1387.homepage.video_card.click&vd_source=b934a9595fc814278fbded130ba2beb0"
          >课程入口</a
        >
      </div>
      <div>
        <p>课程：2025新版小程序开发教程</p>
        <p>
          简介：采用小程序开发者工具进行原生开发，先用了十节课左右讲解小程序基础语法和API的使用，后面以智慧社区为案例进行小程序实战
        </p>
        <p>
          感受：采用的是微信开发者工具进行原生开发，环境配置方便，前面课程讲解语法清晰全面，而且会传授如何自主查阅文档。但后面案例使用了python的django框架，没有提前学过的话无法跟上。
        </p>
      </div>
    </div>
    <div class="card">
      <div>
        <img src="../assets/learning/image5.png" alt="" /><a
          href="https://www.bilibili.com/video/BV1Ls6BYkEGk/?spm_id_from=333.1387.homepage.video_card.click&vd_source=b934a9595fc814278fbded130ba2beb0"
          >课程入口</a
        >
      </div>
      <div>
        <p>课程：CS50</p>
        <p>
          简介：哈佛大学推出的一门计算机科学入门课程。对初学者极为友好，讲解通俗，涵盖范围广，是入门的不二之选
        </p>
        <p>
          感受：0基础也能轻松跟上，但是是纯英语授课（有字幕，但是有的翻译的不好），当同时练习英语听力了
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.Learning {
  display: flex;
  flex-direction: column;
}
.Learning .card {
  display: flex;
  border: 1px solid black;
  background-color: aliceblue;
  height: 200px;
  width: auto;
  padding: 10px;
  margin: 50px 50px 0px 50px;

  box-shadow:
    2px 2px 4px rgba(0, 0, 0, 0.1),
    -1px -1px 3px rgba(255, 255, 255, 0.8);
  border-radius: 4px;
}
.Learning .card img {
  height: 180px;
  width: auto;
  margin-right: 50px;
}
</style>
