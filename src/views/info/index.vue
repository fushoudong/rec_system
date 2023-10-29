<template>
    <div class="info-main">
        <side-bar/>
        <info-main-page></info-main-page>
    </div>
</template>
<script>
import InfoMainPage from '@/views/info/InfoMainPage'
import SideBar from '../../components/SideBar'
export default {
    name: 'RateHistoryRouter',
    components: {
        SideBar,
        InfoMainPage
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
.info-main {
    height: 100%;
    display: flex;
}
</style>