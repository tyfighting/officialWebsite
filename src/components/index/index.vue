<template>
  <div class="index">
    <div class="nav">
      <div></div>
      <div>
        <router-link to="/login">登录</router-link>
        <router-link to="/login">注册</router-link>
      </div>
    </div>
    <div class="menu">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"        
        background-color="#20528f"
        text-color="#fff"
        active-text-color="#fff">
        <el-menu-item index="1">
          <Language link='' Chinese='首页' English="Home" :language="language"></Language>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <Language link='' Chinese='关于我们' English="About Us" :language="language"></Language>
          </template>
          <el-menu-item index="2-1">          
            <Language link='' Chinese='加入我们' English="Home" :language="language"></Language>
          </el-menu-item>
          <el-menu-item index="2-2">          
            <Language link='' Chinese='联系我们' English="Home" :language="language"></Language>
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="3">        
          <Language link='' Chinese='资讯中心' English="News" :language="language"></Language>
        </el-menu-item>
        <el-submenu index="4">
          <template slot="title">
            <Language link='' Chinese='会议活动' English="Events" :language="language"></Language>
          </template>
          <el-menu-item index="4-1">          
            <Language link='' Chinese='VIS国际学校发展大会' English="Home" :language="language"></Language>
          </el-menu-item>        
          <el-menu-item index="4-2">          
            <Language link='' Chinese='地区/专题研讨会' English="Home" :language="language"></Language>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <Language link='' Chinese='研究院' English="Research" :language="language"></Language>
          </template>
          <el-menu-item index="5-1">          
            <Language link='' Chinese='国际学校高级管理研修班' English="Home" :language="language"></Language>
          </el-menu-item>        
          <el-menu-item index="5-2">          
            <Language link='' Chinese='国际学校职能岗位课程' English="Home" :language="language"></Language>
          </el-menu-item>
          <el-menu-item index="5-3">          
            <Language link='' Chinese='研究报告' English="Home" :language="language"></Language>
          </el-menu-item>        
          <el-menu-item index="5-4">          
            <Language link='' Chinese='国际学校内参' English="Home" :language="language"></Language>
          </el-menu-item>
          <el-menu-item index="5-5">          
            <Language link='' Chinese='专家智库' English="Home" :language="language"></Language>
          </el-menu-item>  
        </el-submenu>
        <el-menu-item index="6">        
          <Language link='' Chinese='咨询服务' English="Service" :language="language"></Language>
        </el-menu-item>
        <el-menu-item index="7">        
          <Language link='' Chinese='G E S' English="G E S" :language="language"></Language>
        </el-menu-item>
        <el-menu-item index="8">        
          <Language link='' Chinese='会 员' English="V I P" :language="language"></Language>
        </el-menu-item>
        <el-menu-item index="9">        
          <Language link='' Chinese='国际学校四库全书' English="DataBase" :language="language"></Language>
        </el-menu-item>
        <el-menu-item index="10">        
          <Language link='' Chinese='在线课堂' English="Class" :language="language"></Language>
        </el-menu-item>
      </el-menu>
    </div>
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
  import {business,article} from '../../api/index'
  import {timeFormat} from '../../utils/common'
  import Language from './language'
  export default {
    data () {
      return {
        business:[],
        banner:{
          banner1:[],
          banner2:[]
        },
        article:[],
        activeIndex: '1',
        language:'ch'
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
    },
    components:{
      Language
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.menu{
  width: 100%;
  background: #20528f;
  .el-menu{
    border-bottom: solid 1px #20528f;
    .el-menu-item.is-active{
      border-bottom-color: #20528f;
    }
    .router-link-exact-active,.router-link-active{
      text-decoration: none;
      color: #fff;
    }
    .el-submenu__title i{
      color: #fff;
    }
  }
}
.el-menu--horizontal{
  .router-link-exact-active,.router-link-active{
    text-decoration: none;
    color: #fff;
  }
}
.carousel{
  img{width: 100%;}
  .el-carousel__button{
    width: 10px;
    height: 10px;
    border-radius: 10px;
  }
}
.aside{display: none;}
@media screen and (min-width:1200px){
  .el-menu{    
    width: 1200px;
    margin: 0 auto;
  }
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
  .aside{
    display: flex;
    div{
      flex:1
    }
  }
}
@media screen and (min-width:768px){

}
@media screen and (min-width:480px){

}
</style>
