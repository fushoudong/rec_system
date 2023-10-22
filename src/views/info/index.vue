<template>
    <div>
        <side-bar/>
        <div class="right-content">
			<router-view/>
		</div>
    </div>
</template>
<script>
import SideBar from '../../components/SideBar'
export default {
    name: 'RateHistory',
    components: {
        SideBar
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
<style scoped></style>