<template>
    <div class="history-main">
        <side-bar/>
        <history-main-page></history-main-page>
    </div>
</template>
<script>
import SideBar from '../../components/SideBar'
import HistoryMainPage from "./HistoryMainPage.vue"
export default {
    name: 'RateHistoryRouter',
    components: {
        SideBar,
        HistoryMainPage
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
.history-main {
    height: 100%;
    display: flex;
}
</style>