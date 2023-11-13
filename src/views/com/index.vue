<template>
    <div class="com-main">
        <side-bar/>
        <com-main-page></com-main-page>
    </div>
</template>
<script>
import SideBar from '../../components/SideBar'
import ComMainPage from "./ComMainPage.vue"
export default {
    name: 'comRouter',
    components: {
        SideBar,
        ComMainPage
    },
    data() {
        return {

        }
    },
    created() {
        console.log('OnCreated')
    },
    mounted() {
        console.log('OnMounted')
    }
}
</script>
<style scoped>
.com-main {
    height: 100%;
    display: flex;
}
</style>