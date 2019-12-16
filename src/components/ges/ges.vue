<template>
  <div class="ges">
    <input placeholder="lazy" v-model.number="msg" @input="input" @change="change">
    <input placeholder="防抖" v-model="debounceMsg" @input="debounce(sayHi)" ref="debounce">
    <input placeholder="节流" v-model="throttleMsg" @input="throttle(sayNo)" ref="throttle">
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
      console.log(this.$refs.debounce)
      if (this.fun !== null) {
        clearTimeout(this.fun);
      }
      this.fun = setTimeout(() => {
        // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
        fn.apply(this, arguments);
      }, 1000);
    },
    throttle(fn) {
      if (!this.canRun) return; // 在函数开头判断标记是否为true，不为true则return
      this.canRun = false; // 立即设置为false
      setTimeout(() => {
        // 将外部传入的函数的执行放在setTimeout中
        fn.apply(this, arguments);
        // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
        this.canRun = true;
      }, 500);
    },
    sayHi() {
      console.log("防抖成功");
    },
    sayNo() {
      console.log("节流成功");
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
</style>
