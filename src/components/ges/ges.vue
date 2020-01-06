<template>
  <div class="ges">
    <input placeholder="lazy" v-model.number="msg" @input="input" @change="change">
    <input placeholder="防抖" v-model="debounceMsg" @input="debounce(sayHi)" ref="debounce">
    <input placeholder="节流" v-model="throttleMsg" @input="throttle(sayNo)" ref="throttle">
    <div class="content">
      <div @click="_show">12345</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ges",
  data() {
    return {
      msg: "",
      debounceMsg: "",
      throttleMsg:'',
      fun: null,
      canRun: true
    };
  },
  mounted() {
    this.$_split();
  },
  methods: {
    $_split() {
      let data = "12345678910.00120";
      let [a, b] = data.split(".");
      let reverseB = b
        .split("")
        .reverse()
        .join("");
      reverseB = Number(reverseB).toString();
      let B = reverseB
        .split("")
        .reverse()
        .join("");
      let arr = [];
      let length = Math.ceil(a.length / 3);
      for (let i = 0; i < length; i++) {
        arr.push(a / 1000 > 0 ? a % 1000 : a / 1000);
        a = parseInt(a / 1000);
      }
      let A = arr.reverse().join(",");
      let NewNumber = A + "." + B;
      console.log(data);
      console.log(NewNumber);
      return NewNumber;
    },
    $_change() {
      let data = "12321321312.001";
      data < 0 ? (data = -data) : data;
      let [a, b] = data.split(".");
      b = Number("." + b);
      !b ? (b = "") : (b = "." + b.toString().split(".")[1]);
      let c = a.replace(/\d{1,3}(?=(\d{3})+$)/g, "$&,") + b;
    },
    $_compact() {
      arr => arr.filter(Boolean);
      compact([0, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34]);
      // [ 1, 2, 3, 'a', 's', 34 ]
      // https://juejin.im/post/5da1a04ae51d45783d6122bf
    },
    input() {
      console.log(typeof this.msg);
    },
    change() {
      console.log("change" + this.msg);
    },
    debounce(fn) {
      //触发之后1s内无操作才会执行fn函数，多次触发根据最后一次开始计时
      console.log(this.$refs.debounce)
      if (this.fun !== null) {
        clearTimeout(this.fun);
      }
      this.fun = setTimeout(() => {
        fn.apply(this, arguments);
      }, 1000);
    },
    throttle(fn) {
      //触发就执行fn函数，多次触发每经过1s就执行一次fn函数
      console.log(this.$refs.throttle)
      if (!this.canRun) return;
      this.canRun = false; 
      setTimeout(() => {
        fn.apply(this, arguments);
        this.canRun = true;
      }, 1000);
    },
    sayHi() {
      console.log("防抖成功");
    },
    sayNo() {
      console.log("节流成功");
    },
    _show(e){
      console.log(e.target.innerText)
    }
  }
};
</script>

<style lang="scss" scoped>
.ges input {
  display: block;
  margin: 10px auto;
  border: none;
  background: #f4f4f4;
  line-height: 40px;
  padding: 0 10px;
}
.content{
  font-size: 0;
    text-align: center;
    &::before {
        content: "";
        display: inline-block;
        width: 0;
        height: 100%;
        vertical-align: middle;
    }
  // text-align: center;
}
</style>
