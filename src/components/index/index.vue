<template>
  <div class="index">
    <div class="nav">
      <div class="left">
        <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/layoutImg/logo.png">
      </div>
      <div class="right">
        <div class="search">
          <i class="el-icon-search"></i>
        </div>
        <div>
          <el-dropdown  @command="changeL">
            <span class="el-dropdown-link">{{languageText}}<i class="el-icon-arrow-down el-icon--right"></i></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="ch">中文</el-dropdown-item>
              <el-dropdown-item command="en">English</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div>
          <router-link to="/login">登录</router-link>
          <router-link to="/login">注册</router-link>
        </div>
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
    <div class="m-menu">
      <el-menu :default-active="mActiveIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">
          <Language link='' Chinese='首页' English="Home" :language="language"></Language>
        </el-menu-item>
        <el-menu-item index="2">
          <Language link='' Chinese='关于我们' English="About Us" :language="language"></Language>
        </el-menu-item>
        <el-menu-item index="3">
          <Language link='' Chinese='资讯中心' English="News" :language="language"></Language>
        </el-menu-item>
        <el-menu-item index="4">
          <Language link='' Chinese='会议活动' English="Events" :language="language"></Language>
        </el-menu-item>
        <el-submenu index="5">
          <template slot="title">
            <Language link='' Chinese='查看其他' English="Other" :language="language"></Language>
          </template>
          <el-menu-item index="5-1">
            <Language link='' Chinese='研究院' English="Research" :language="language"></Language>
          </el-menu-item>
          <el-menu-item index="5-2">
            <Language link='' Chinese='咨询服务' English="Service" :language="language"></Language>
          </el-menu-item>
          <el-menu-item index="5-3">
            <Language link='' Chinese='G E S' English="G E S" :language="language"></Language>
          </el-menu-item>
          <el-menu-item index="5-4">
            <Language link='' Chinese='会 员' English="V I P" :language="language"></Language>
          </el-menu-item>
          <el-menu-item index="5-5">
            <Language link='' Chinese='国际学校四库全书' English="DataBase" :language="language"></Language>
          </el-menu-item>
          <el-menu-item index="5-6">
            <Language link='' Chinese='在线课堂' English="Class" :language="language"></Language>
          </el-menu-item>
        </el-submenu>
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
    <div class="news">
      <el-divider>
        <p>行业动态</p>
        <p>What’s New</p>
      </el-divider>
      <div class="newsList1">
        <div v-for="v in article.article1" :key="v.id">
          <div>
            <img :src="v.coverImage">
          </div>
          <div>
            <p>{{v.title}}</p>
            <p>{{v.summary}}</p>
          </div>
        </div>
      </div>
      <ul class="newsList2">
        <li v-for="v in article.article2" :key="v.id">
          <p>{{v.title}}</p>
        </li>
      </ul>
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
        article:{
          article1:[],
          article2:[]
        },
        activeIndex: '1',
        mActiveIndex:'1',
        language:'ch',
        languageText:'中文'
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
      this.article.article2=this.article.list; 
      this.article.article1=[];
      this.article.article1.push(this.article.article2[0])
      this.article.article1.push(this.article.article2[1])
      this.article.article2.splice(0,1)    
      this.article.article2.splice(0,1)
    },
    components:{
      Language
    },
    methods:{
      changeL(command){
        console.log(command)
        this.language=command;
        this.languageText=command=='ch'?'中文':'English'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.nav{
  display: flex;
  justify-content: space-between;
  margin: 18px auto;
  .left img{
    width: 220px;
    height: 45px;
  }
  .right{
    display: flex;
    align-items: center;
    justify-content: space-around;
    &>div{
      margin:0 10px;
    }
  }
}
.menu{
  box-shadow: 0 4px 8px rgba(0,0,0,.28);
  display: none;
}
.m-menu{
  box-shadow: 0 4px 8px rgba(0,0,0,.28);
  display:block;
}
.aside{
  display: none;
}
.el-menu--horizontal>.el-submenu .el-submenu__title,.el-menu--horizontal>.el-menu-item{
  height: 53px;
  line-height: 53px;
}
.carousel{
  img{width: 100%;}
  .el-carousel__button{
    width: 10px;
    height: 10px;
    border-radius: 10px;
  }
}
.m-menu .router-link-exact-active.router-link-active{
  color: #909399;
}
.banner{
  display:flex;
  margin: 30px auto 0;
  padding:10px;
  box-shadow: 0 12px 24px 0 rgba(7,17,27,.2);
  .carousel{
    flex:1;
  }
}
.search{
  display: none;
}
.news{
  margin: 30px auto 0;
  text-align: left;
  .el-divider--horizontal{
    margin: 84px 0;
    p{
      font-size: 20px;
      margin: 10px 0;
    }
  }
  .newsList1{
    display:flex;
    &>div{
      width: 50%;
      display: flex;
      align-items: flex-start;
      &>div{
        flex: 1;
        img{
          width: 100%;
        }
        p{
          margin-top: 0px;
          padding-left:10px; 
        }
      }
    }
  }
  .newsList2{
    display:flex;
    flex-wrap: wrap;
    &>li{
      width: 50%;
    }
  }
}
@media screen and (min-width:480px){
  
}
@media screen and (min-width:768px){
  .nav,.banner,.news{
    width: 750px;
  }
}
@media screen and (min-width:992px){
  .nav,.banner,.news{
    width: 970px;
  }
  .m-menu{
    display:none;
  }
  .menu{
    display: block;
    width: 100%;
    background: #20528f;
    .el-menu{
      width: 800px;
      margin: 0 auto;      
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
  .aside{
    display: flex;
    div{
      flex:1
    }
  }  
  .el-menu--horizontal .router-link-exact-active,.router-link-active{
    text-decoration: none;
    color: #fff;
  }  
  .search{
    display: block;
  }
}
@media screen and (min-width:1200px){
  .nav,.news{
    width: 1170px;
  }
  
  .menu{
    display: block;
    width: 100%;
    background: #20528f;
    .el-menu{
      width: 1170px;
      margin: 0 auto;      
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
  .banner{
    width: 1170px;
    .carousel{
      flex:3;
    }
    .aside{
      flex: 1;
      display: block;
      img{
        height: 148px;
      }
    }
  }
  .m-menu{
    display:none;
  }  
  .el-menu--horizontal .router-link-exact-active,.router-link-active{
    text-decoration: none;
    color: #fff;
  }
  .search{
    display: block;
  }
}
</style>
