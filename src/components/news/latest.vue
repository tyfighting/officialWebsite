<template>
    
</template>
<script>
import {article} from '../../api/news'
export default {
    name:'latest',
    data(){
        return{
            list1:[],
            list2:[]
        }
    },
    async mounted(){
        let res=await article({
            pageNum: 1,
            pageSize: 16
        })
        console.log(res)
    }
}
</script>
<style lang="scss">

</style>
