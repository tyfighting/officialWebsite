<template>
  <div v-loading="loading" :data="objNews" style="width: 100%">
    <div v-if ="objNews" class="news-list">
      <div v-for="v in objNews" :key="v.id">
        <img :src="v.coverImage" />
        <p>{{ v.title }}</p>
        <p><span></span></p>
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
  display: flex;
  flex-wrap: wrap;
  div {
    width: 23%;
    margin: 20px 1%;
    box-sizing: border-box;
    background: #fff;
    img {
      width: 100%;
    }
  }
}
</style>
