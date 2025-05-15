/// <reference types="vite/client" />

//声明所有.vue文件都是一个vue组件，防止TS类型检查报错
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
