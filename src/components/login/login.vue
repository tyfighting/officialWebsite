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
    </div>
</template>
<script>
import {login} from '../../api/login'
export default {
    name:'Login',
    data(){
        return {
            userName:'',
            passWord:''
        }
    },
    methods:{
        async loginCheck(){
            if(this.userName==''||this.passWord==''){
                return;
            } 
            // 调用store的mutations通过commit
            // this.$store.commit('add');
            //调用store里的action通过dispatch
            //1.调用action的login方法，返回是否登录的接口
            //2.把返回的数据通过mutation存储在state中
            //3.在state中初始化所有的登录信息返回值
            await this.$store.dispatch('login',{userName: this.userName,passWord: this.passWord});
            // 根据id判断是否登录
            let data=this.$store.getters.isLogin;
            console.log(data)
            if(data){
                this.$router.push('/')
            }
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
