<template>
    <div class="hot-page-main">
        热门推荐页面
        <div>
            
        </div>
    </div>
</template>
<script>
export default {
    name: 'HotMainPage',
    data() {
        return {
            menuList: [],
            fullPath: ''
        }
    },
    methods: {
        getSiderBarList() {
            const routes = this.$router.options.routes
            console.log("routes", routes)
            let children = []
            let path = ''

            routes.forEach((item) => {
                if (item.meta != undefined && !item.meta.hidden) {
                    children.push(item)
                }
                if (item.name === this.pathName) {
                    path = item.path
                }
            })
            this.fullPath = path
            this.menuList = children

        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }

    },
    created() {
        console.log('OnCreated')
    },
    mounted() {
        this.getSiderBarList()
    }
}
</script>
<style scoped>
.hot-page-main {
    padding: 10px;
}
</style>