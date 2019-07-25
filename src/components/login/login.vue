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
    data(){
        return {
            userName:'',
            passWord:''
        }
    },
    methods:{
        async loginCheck(){
            let data=await login({
                userName: this.userName,
                passWord: this.passWord
            })
            console.log(data)
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
