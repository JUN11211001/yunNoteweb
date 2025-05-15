<template>
  <div class="Learning">
    <div class="card">
      <div>
        <img src="../assets/tools/image1.png" alt="" />
        <a href="https://visualstudio.microsoft.com/zh-hans/free-developer-offers/">下载入口</a>
      </div>
      <div>
        <p>工具：Visual Studio Community（社区版免费）</p>
        <p>
          简介：适用于 Windows 上 .NET 和 C++ 开发人员的最佳综合 IDE。
          完整打包了一系列丰富的工具和功能，可提升和增强软件开发的每个阶段。
        </p>
        <p>
          评价：如果初学c/c++必入手这一款啊，只需下载安装好软件，无需再进行复杂的配置。缺点是比较笨重，占内存大，跨平台开发不如Clion
        </p>
      </div>
    </div>
    <div class="card">
      <div>
        <img src="../assets/tools/image2.png" alt="" />
        <a href="https://visualstudio.microsoft.com/zh-hans/free-developer-offers/">下载入口</a>
      </div>
      <div>
        <p>工具：Visual Studio Code</p>
        <p>
          简介：在 Windows、macOS 和 Linux 上运行的独立源代码编辑器。 JavaScript 和 Web
          开发人员的最佳选择，具有几乎可支持任何编程语言的扩展。
        </p>
        <p>
          评价：码代码神器！有海量的扩展可以下载。缺点是虽然几乎可以支持任何编程语言，但配置的难度不一
        </p>
      </div>
    </div>
    <div class="card">
      <div>
        <img src="../assets/tools/image3.png" alt="" style="margin-right: 83px" />
        <a href="https://obsidian.md">下载入口</a>
      </div>
      <div>
        <p>工具：Obsidian</p>
        <p>
          简介：功能非常强大的笔记软件，支持markdown语法，能创建双向链接，而且可以查看笔记之间的关系图谱
        </p>
        <p>评价：功能强大，但是使用有一定门槛，可以视使用需求学习。（国内下载较慢，耐心等待）</p>
      </div>
    </div>
    <div class="card">
      <div>
        <img src="../assets/tools/image4.png" alt="" style="margin-right: 60px" /><a
          href="https://www.bilibili.com/video/BV1qbNJeWEBz/?spm_id_from=333.1387.homepage.video_card.click&vd_source=b934a9595fc814278fbded130ba2beb0"
          >下载入口</a
        >
      </div>
      <div>
        <p>工具：Window Top</p>
        <p>简介：一个简单实用的窗口置顶工具</p>
        <p>评价：工具虽小，但用起来好啊，可以完美的享受到一边看课一边打代码，再无切屏之忧。</p>
      </div>
    </div>
    <div class="card">
      <div>
        <img src="../assets/learning/image5.png" alt="" /><a
          href="https://github.com/aeagean/WindowTop"
          >下载入口</a
        >
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
