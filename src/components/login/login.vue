<template>
    <div class="login">
        <form>
            <div>
                <label>邮箱：</label>
                <input type="text" v-model="userName">
            </div>
            <div>
                <label>密码：</label>
                <input type="password" v-model="passWord">
            </div>
        </form>
        <el-button type="success" @click="loginCheck">成功按钮</el-button>
        <p>state:{{this.$store.state.user.count}}</p>
        <p>getters:{{this.$store.getters.getStateCount}}</p>
        <p>mutations:{{this.$store.state.user.count}}</p>
        <button @click="addFun">+</button>
        <button @click="reduceFun">-</button>
    </div>
</template>
<script>
import {login} from '../../api/login'
export default {
    data(){
        return {
            userName:'',
            passWord:''
        }
    },
    mounted(){
        console.log(this.$store)
    },
    methods:{
        // async loginCheck(){
        //     let data=await login({
        //         userName: this.userName,
        //         passWord: this.passWord
        //     })
        //     console.log(data)
        // },
        loginCheck(){
            //调用store里的action
            this.$store.dispatch('login',{userName: this.userName,passWord: this.passWord});
        },
        // addFun(){
        //     // 调用store的mutations
        //     this.$store.commit('add');
        // },
        // reduceFun(){
        //     // 调用store的mutations
        //     this.$store.commit('reduce');
        // },
        addFun(){
            // 调用store的actions
            this.$store.dispatch('addFun');
        },
        reduceFun(){
            // 调用store的actions
            this.$store.dispatch('reduceFun');
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
