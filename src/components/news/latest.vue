<template>
  <div v-loading="loading" :data="objNews" style="width: 100%">
    <div v-if="objNews" class="news-list">
      <div v-for="v in objNews" :key="v.id">
        <img :src="v.coverImage" />
        <div>
          <p>{{ v.title }}</p>
          <p>
            <span>{{ v.summary }}</span>
          </p>
        </div>
      </div>
    </div>
    <div v-if="!objNews">
      <p>暂时没有相应内容</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "latest",
  props: {
    objNews: {
      type: Array,
      dafault: function() {
        return [];
      }
    }
  },
  watch: {
    objNews: {
      handler: function(val, oldVal) {
        if (val.length >= 0) {
          this.loading = false;
        }
      },
      deep: true
    }
  },
  data() {
    return {
      loading: true
    };
  }
};
</script>
<style lang="scss">
.news-list {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  & > div {
    width: 23%;
    margin: 20px 1%;
    padding: 10px;
    box-sizing: border-box;
    img {
      width: 100%;
    }
    div {
      background: #fff;
      p {
        margin: 0;
        font-size: 14px;
        text-align: left;
        padding: 0 5px 10px 5px;
      }
      span {
        color: #999;
        font-size: 12px;
      }
    }
    &:hover {
      box-shadow: 0 15px 15px 0 rgba(15, 37, 64, 0.1);
      border-radius: 2px;
      background: #fff;
    }
  }
}
@media screen and (max-width: 992px) {
  .news-list {
    & > div {
      display: flex;
      width: 100%;
      margin: 10px 1%;
      justify-content: flex-start;
      img {
        width: 30%;
      }
      div {
        padding: 10px;
        p:first-child {
          margin-bottom: 10px;
        }
        span {
          color: #999;
        }
      }
    }
  }
}
</style>
