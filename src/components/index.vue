<template>
  <div class="hello"></div>
</template>

<script>
import {business} from '../api/index'
import {timeFormat} from '../utils/common'
export default {
  data () {
    return {
      
    }
  },
  mounted(){
    business({
      type: '官网首页活动'
    })
    .then(res=>{
      console.log(res)
    })
    console.log(timeFormat(new Date().getTime()))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
