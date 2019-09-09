<template>
  <div id="app">    
    <header-nav></header-nav>
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<script>
import headerNav from './components/common/headerNav'
import myFooter from './components/common/footer'
export default {
  name: 'App',
    components:{
        headerNav,
        myFooter
    }    
}
</script>

<style>
html,body,ul,li{
  margin: 0;
  padding: 0;
}
a,a:hover,a:active,a:visited{
  text-decoration: none;
  color: #333;
}
#app {
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  margin: 0;
  padding: 0;
}
</style>
