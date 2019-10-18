<template>
  <div class="">

  </div>
</template>

<script>
export default {
  name: "ges",
  data() {
    return {};
  },
  mounted() {
    setTimeout(() => (window.onresize = () => {
      console.log("mounted");
    }), 200);
  },
  destroyed() {
    window.onresize=()=>console.log("destroyed");
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>
