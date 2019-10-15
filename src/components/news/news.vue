<template>
  <div class="newsWrap">
    <el-tabs v-model="activeName" @tab-click="handleClick" class="news" :stretch="true">
      <!-- <el-tab-pane label="资讯全览" name="first">
        <Latest :objNews="objNews.list"></Latest>
      </el-tab-pane>
      <el-tab-pane label="政策解读" name="second">
        <Latest :objNews="objNews.list"></Latest>
      </el-tab-pane>
      <el-tab-pane label="访校观察" name="third">
        <Latest :objNews="objNews.list"></Latest>
      </el-tab-pane>
      <el-tab-pane label="行业分析" name="fourth">
        <Latest :objNews="objNews.list"></Latest>
      </el-tab-pane>
      <el-tab-pane label="人物访谈" name="fifth">
        <Latest :objNews="objNews.list"></Latest>
      </el-tab-pane>
      <el-tab-pane label="历史文章" name="sixth">
        <Latest :objNews="objNews.list"></Latest>
      </el-tab-pane> -->
      <el-tab-pane label="资讯全览" name="first"></el-tab-pane>
      <el-tab-pane label="政策解读" name="second"></el-tab-pane>
      <el-tab-pane label="访校观察" name="third"></el-tab-pane>
      <el-tab-pane label="行业分析" name="fourth"></el-tab-pane>
      <el-tab-pane label="人物访谈" name="fifth"></el-tab-pane>
      <el-tab-pane label="历史文章" name="sixth"></el-tab-pane>
      <router-view :objNews="objNews.list"></router-view>
      <div class="more">
        <span @click="getMore">加载更多</span>
      </div>
    </el-tabs>
  </div>
</template>
<script>
import { article } from "@/api/news";
// import Latest from "./latest";
export default {
  name: "news",
  data() {
    return {
      objNews: "",
      activeName: "first",
      curText: "",
      curPageNum: 2
    };
  },
  async mounted() {
    this.objNews = await article({
      pageNum: 1,
      pageSize: 16
    });
  },
  methods: {
    async handleClick(tab, event) {
      let text = tab.label == "历史文章" ? "资讯全览" : tab.label;
      this.curText = text;
      this.objNews = await article({
        pageNum: 1,
        pageSize: 16,
        articleCat: text
      });
      this.curPageNum=2;
    },
    async getMore() {
      let text = this.curText;
      let objNews = await article({
        pageNum: this.curPageNum,
        pageSize: 16,
        articleCat: text
      });
      let curIndex = (this.curPageNum - 2) * this.objNews.size;
      if (objNews.list.length > 0) {
        if (this.objNews.list[curIndex].id != objNews.list[0].id) {
          this.objNews.list.push(...objNews.list);
          this.curPageNum++;
        }
      }
      console.log(this.objNews);
    }
  },
  // components: {
  //   Latest
  // }
};
</script>
<style lang="scss">
.newsWrap {
  background: #fafafa;
}
.news {
  margin: 20px 0;
  padding: 20px 0;
  .el-tabs__item {
    color: #969696;
    font-size: 18px;
  }
  .el-tabs__item.is-active {
    color: #333;
  }
  .el-tabs__active-bar {
    background: #333;
  }
  .more {
    text-align: center;
    span {
      display: inline-block;
      padding: 0 40px;
      height: 40px;
      line-height: 40px;
      border: 1px solid #4790e5;
      background-image: linear-gradient(-180deg, #4790e5, #52a5f4);
      box-shadow: 0 5px 30px #ccc;
      color: #fff;
      border-radius: 20px;
      cursor: pointer;
    }
  }
}
</style>
