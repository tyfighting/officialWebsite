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
  import {business} from '../../api/index'
  import {article} from '../../api/news'
  import {timeFormat} from '../../utils/common'
  export default {
    name:'first',
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.aside{
  display: none;
}
.carousel{
  img{width: 100%;}
  .el-carousel__button{
    width: 10px;
    height: 10px;
    border-radius: 10px;
  }
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
  .banner,.news{
    width: 750px;
  }
}
@media screen and (min-width:992px){
  .banner,.news{
    width: 970px;
  }
  .aside{
    display: flex;
    div{
      flex:1
    }
  }
}
@media screen and (min-width:1200px){
  .news{
    width: 1170px;
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
}
</style>
