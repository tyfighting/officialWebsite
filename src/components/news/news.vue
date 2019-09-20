<template>
  <div class="newsWrap">
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
      class="news"
      :stretch=true
    >
      <el-tab-pane label="资讯全览" name="first">
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
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { article } from "@/api/news";
import Latest from "./latest";
export default {
  name: "news",
  data() {
    return {
      objNews: "",
      activeName: "first"
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
      console.log(tab.label, event);
      let text = tab.label;
      this.objNews = await article({
        pageNum: 1,
        pageSize: 16,
        articleCat: text
      });
    }
  },
  components: {
    Latest
  }
};
</script>
<style lang="scss">
.newsWrap {
  background: #fafafa;
}
.news {
  margin: 20px 0;
  padding:20px 0;
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
}
</style>
