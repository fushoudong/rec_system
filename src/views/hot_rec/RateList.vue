<template>
    <div class="list-main">
        <el-row align="middle" type="flex" style="flex-wrap: wrap">
            <el-col v-for="(movie) in movieList" :lg="{ span: 4 }" :key="movie.id" style="padding-right: 5px;">
                <rate-item :imageUrl="movie.url" :score="movie.score" :name="movie.name"></rate-item>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import RateItem from '@/views/hot_rec/RateItem'

export default {
    name: 'RateList',
    components: {
        RateItem
    },
    props: {
        movieList: Array,
    },
    data() {
        return {
        }
    },
    methods: {

    },
    created() {
    }
}
</script>
<style scoped>
.list-main {
    width: 100%;
    height: calc(100vh - 120px);
    overflow: scroll;
}

.list-item {
    width: 210px;
    padding: 5px;
}

.image {
    display: block;
    width: 200px;
    cursor: pointer;
}

.info_row {
    padding-left: 20px;
    padding-top: 5px;
    margin-bottom: -10px;
}
</style>