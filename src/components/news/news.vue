<template>
  <div class="newsWrap">
    <div class="news">
      <div>
        <p @click="changeNews">资讯全览</p>
        <i></i>
      </div>
      <div>
        <p @click="changeNews">政策解读</p>
        <i></i>
      </div>
      <div>
        <p @click="changeNews">访校观察</p>
        <i></i>
      </div>
      <div>
        <p @click="changeNews">行业分析</p>
        <i></i>
      </div>
      <div>
        <p @click="changeNews">人物访谈</p>
        <i></i>
      </div>
      <div>
        <p @click="changeNews">历史文章</p>
        <i></i>
      </div>
    </div>
    <router-view :objNews=objNews.list></router-view>
  </div>
</template>
<script>
import { article } from "@/api/news";
export default {
  name: "news",
  data(){
    return {
      objNews:''
    }
  },
  async mounted() {
    this.objNews = await article({
      pageNum: 1,
      pageSize: 16
    });
  },
  methods: {
    async changeNews(e){
      let text=e.target.innerText;
      this.objNews = await article({
        pageNum: 1,
        pageSize: 16,
        articleCat: text
      });
    }
  },
};
</script>
<style lang="scss">
.newsWrap{
  background: #fafafa;
}
.news {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
  p {
    color: #999;
    font-size: 22px;
    cursor: pointer;
    padding: 20px 0;
    margin: 0;
  }
  i {
    display: block;
    width: 100%;
    height: 3px;
    background: #333;
    transition: all 0.5s ease;
    transform: rotateY(90deg);
  }
  div:hover {
    i {
      transform: rotateY(0deg);
    }
    p {
      color: #333;
    }
  }
}
</style>
