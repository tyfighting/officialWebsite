<template>
  <div class="index">
    <div class="banner">
      <div class="carousel">
        <el-carousel :interval="3000" arrow="never">
          <el-carousel-item v-for="v in banner.banner1" :key="v.id">
            <img :src="v.content01">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="aside">
        <div v-for="v in banner.banner2" :key="v.id">
          <img :src="v.content01">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {business,article} from '../api/index'
import {timeFormat} from '../utils/common'
export default {
  data () {
    return {
      business:[],
      banner:{
        banner1:[],
        banner2:[]
      },
      article:[]
    }
  },
  async mounted(){
    this.business=await business({
      type: '官网首页活动'
    })
    let banner=await business({
      type:'官网首页banner'
    })
    this.article=await article({
      pageNum: '1',
      pageSize: '8'
    })
    banner.forEach(v => {
      if(v.content03!=0){
        this.banner.banner1.push(v)
      }
    });
    this.banner.banner2.push(this.banner.banner1[4])
    this.banner.banner2.push(this.banner.banner1[5])
    this.banner.banner1.splice(4,1)    
    this.banner.banner1.splice(4,1)
    console.log(this.banner)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.carousel{
  img{width: 100%;}
}
@media screen and (min-width:1200px){
  .banner{
    display:flex;
    width: 1170px;
    margin: 30px auto 0;
    padding:10px;
    box-shadow: 0 12px 24px 0 rgba(7,17,27,.2);
    .carousel{
      flex:3;
    }
    .aside{
      flex: 1;
      img{
        height: 148px;
      }
    }
  }
}
@media screen and (min-width:992px){

}
@media screen and (min-width:768px){

}
@media screen and (min-width:480px){

}
</style>
