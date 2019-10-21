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
    this.$_split();
    setTimeout(() => (window.onresize = () => {
      console.log("mounted");
    }), 200);
  },
  destroyed() {
    window.onresize=()=>console.log("destroyed");
  },
  methods: {
    $_split(){
      let data = '12345678910.00120';
      let [a, b] = data.split('.');
      let reverseB=b.split('').reverse().join('');
      reverseB=Number(reverseB).toString();
      let B=reverseB.split('').reverse().join('');
      let arr=[];
      let length=Math.ceil(a.length/3)
      for(let i=0;i<length;i++){
        arr.push(a/1000>0?a%1000:a/1000)
        a=parseInt(a/1000);
      }
      let A=arr.reverse().join(',');
      let NewNumber=A+'.'+B;
      console.log(data)
      console.log(NewNumber)
      return NewNumber;
    },
    $_change(){
      let data = '12321321312.001';
      data < 0 ? (data = -data) : data;
      let [a, b] = data.split('.');
      b = Number('.' + b);
      !b ? (b = '') : (b = '.' + b.toString().split('.')[1]);
      let c = a.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,') + b;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
