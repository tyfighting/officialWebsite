<template>
    <router-link :to="link">
        <span v-if="language=='ch'">{{Chinese}}</span>
        <span v-if="language=='en'">{{English}}</span>
    </router-link>
</template>
<script>
export default {
    props:['link','Chinese','English','language']
}
</script>

