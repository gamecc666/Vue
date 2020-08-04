<template>
    <div id='app'>
        <img src="./assets/logo.png" alt="Vue logo">
        <HelloWorld msg="welcome to your vue.js App"/>
    </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue';
export default{
    name:'App',
    components:{
        HelloWorld
    }
}
</script>
<style>
#app {
  /* 设置字体 */
  font-family: Avenir, Helvetica, Arial, sans-serif;  
  /* 
  该属性仅适用于Mac OS X /macOS
  webkit---属于苹果浏览器引擎
  3个属性值:
  none----对低像素的文本比较好
  auto----让浏览器决定 默认值
  antialiased----抗锯齿很好 */
  -webkit-font-smoothing: antialiased;
/*Firefox实现了类似的属性，但具有不同的值；
  该属性只适用于Mac OS X /macox
  2个属性值：
  auto----允许浏览器选择一种优化字体平滑的方法，通常是grayscale
  grayscale----与子像素相反，使用灰度抗锯齿渲染文本（效果是使其看起来更加亮）
   */
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>