<template>
    <div class="rate-list">
        <el-tabs v-model="activeType" type="card" @tab-click="handleClick">
            <el-tab-pane v-for="(tag, index) in tags" :label="tag" :name="'tag' + index">
                <rate-list :movie-list="divides[tag]" />
            </el-tab-pane>
        </el-tabs>

    </div>
</template>

<script>
import RateList from '@/views/hot_rec/RateList'
import Papa from 'papaparse'
import axios from 'axios'
export default {
    name: 'RateBoard',
    components: {
        RateList
    },
    data() {
        return {
            activeType: 'tag0',
            csvPath: '../../../static/data/movies.csv',
            tags: [],
            divides: {
            },
            // tmp: {
            //     '周六夜现场：贝蒂·怀特/Jay-Z': 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2362999490.webp',
            //     '银魂剧场版：新译红樱篇': 'https://bkimg.cdn.bcebos.com/pic/1e30e924b899a90122aac1471d950a7b0208f520?x-bce-process=image/resize,m_lfit,w_354,limit_1/format,f_auto',
            //     '迪兰·莫兰：是什么？',
            //     '平方根：海绵宝宝的故事': 'https://www.baidu.com/link?url=iDyMvpXTx6nfzAkTYM1hEeinjjZE4vwU4uenoM4llt9-k8MPb7J3NlmIEkHxk37lozVSThLWjOx9h2WILiElqa&wd=&eqid=b005e1f500634ff70000000265354651',
            //     '日本之形': 'https://bkimg.cdn.bcebos.com/pic/5ab5c9ea15ce36d3c074f49638f33a87e950b127?x-bce-process=image/resize,m_lfit,w_536,limit_1/format,f_auto',
            //     '周六夜现场',
            //     '欢乐树的朋友们',
            //     '欢乐树的朋友们：滑雪巡逻救生队',
            //     '迪兰·莫兰：怪兽',
            //     '欢乐树的朋友们：第二发球',
            //     '罪恶魔头',
            //     'Jam',
            //     '乔治 卡林：王者归来',
            //     '阿德曼动画精选：超级无敌掌门狗',
            //     '冠军理发师',
            //     '克拉姆一家2',

            // }
        }
    },

    methods: {
        handleClick(tab, event) {
            console.log(tab, event)
        },
        loadCsv() {
            const _this = this;
            axios.get(this.csvPath).then(res => {
                console.log(res)
                this.$papa.parse(res.data, {
                    header: true,
                    complete: function (results) {
                        console.log(results.data);
                        results.data.forEach(item => {
                            if (item.COVER !== "" && item.GENRES != undefined) {
                                const type = item.GENRES.split("/")[0]
                                if (_this.tags.indexOf(type) == -1) {
                                    _this.tags.push(type)
                                }
                                if (_this.divides[type] === undefined) {
                                    _this.divides[type] = []
                                }
                                if (_this.divides[type].length <= 300 && parseFloat(item.DOUBAN_SCORE) === 9.0) {
                                    _this.divides[type].push({
                                        id: item.MOVIE_ID,
                                        score: (parseFloat(item.DOUBAN_SCORE)/2).toFixed(1),
                                        url: item.COVER,
                                        name: item.NAME
                                    })
                                }
                            }
                        })
                    }
                });
            })
        }
    },
    created() {
        this.loadCsv()
    }
}
</script>
<style scoped>
.rate-list {
    width: 100%;
}
</style>