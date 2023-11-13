<template>
    <div class="test-main">
        <side-bar/>
        <test-main-page></test-main-page>
    </div>
</template>
<script>
import SideBar from '../../components/SideBar'
import TestMainPage from "./TestMainPage.vue"
export default {
    name: 'TestRouter',
    components: {
        SideBar,
        TestMainPage
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
.test-main {
    height: 100%;
    display: flex;
}
</style>