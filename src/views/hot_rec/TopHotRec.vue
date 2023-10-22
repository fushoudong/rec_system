<template>
    <div class="top-main">
        <div class="top-header">
            <h2 class="header">Top</h2>
            <span class="more"><a style="text-decoration: none;">查看完整榜单 ></a></span>
        </div>
        <div class="most-pop">
            <el-card class="top-card">
                <span class="num-tag">1</span>
                <div class="most-pop-row">
                    <img src="https://p0.pipi.cn/mmdb/fb73863306dddd178902ff87c2a463233f891.jpg?imageView2/1/w/140/h/194">
                    <div style="padding: 14px;">
                        <div class="top1-name">{{ top1Info.name }}</div>
                        <div class="top1-time">{{ top1Info.show_time }}</div>
                        <div class="like_num">{{ top1Info.like_num }}喜欢</div>
                    </div>
                </div>
            </el-card>
        </div>
        <el-row align="middle" type="flex" style="flex-wrap: wrap">
            <el-col :span="12" v-for="(item, index) in secondList" :key="'second' + item.like_num">
                <el-card :body-style="{ padding: '0px' }" style="display: relative; margin-right: 20px;" shadow="hover">
                    <span class="num-tag">{{ index + 2 }}</span>
                    <img :src="item.url" class="image">
                    <div style="font-size: 18px; margin:10px;">{{ item.name }}</div>
                    <div style="margin: 0px 0px 10px 10px" class="like_num">{{ item.like_num }}喜欢</div>
                </el-card>
            </el-col>
        </el-row>
        <div class="left-row">
            <div class="left-item" v-for="(item, index) in otherInfo" :key="'other' + index">
                <span class="left-index">{{ index + 4 }}</span>
                <span class="left-name">{{ item.name}}</span>
                <span class="left-num">{{ item.like_num }}喜欢</span>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'TopHotRec',
    data() {
        return {
            top1Info: {
                name: '一闪一闪亮晶晶',
                show_time: '上映时间 2023-12-30',
                like_num: 472588
            },
            secondList: [{
                url: 'https://p0.pipi.cn/mmdb/fb73863311edddf0ee50152f90f72a31af565.jpeg?imageView2/1/w/170/h/118',
                name: '惊奇队长2',
                like_num: 275359
            }, {
                url: 'https://p0.pipi.cn/friday/fbf5e4e7ba18bc21eeb447e9e5284f1c.jpg?imageView2/1/w/170/h/118',
                name: '拯救嫌疑人',
                like_num: 133603
            }],
            otherInfo: [
                {
                    name: '涉过愤怒的海',
                    like_num: 123080
                },
                {
                    name: '我本是高山',
                    like_num: 113583
                },
                {
                    name: '金手指',
                    like_num: 96652
                }, {
                    name: '再见，李可乐',
                    like_num: 87342
                }, {
                    name: '二手杰作',
                    like_num: 64234
                }
                , {
                    name: '照明商店',
                    like_num: 315153
                }, {
                    name: '熊出没.逆转时空',
                    like_num: 26677
                },
            ]
        }
    }
}
</script>

<style scoped>
.top-main {
    margin-left: 15px;
    width: 100%;
    height: calc(100vh - 100px);
}

.top-header {
    color: orange;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.header {
    text-align: left;
    padding-left: 5px;
}

.more {
    width: 200px;
}

.top-card {
    padding: 0px;
    margin-right: 20px;
}

.most-pop-row {
    display: flex;
}

.top1-name {
    margin-top: 35px;
    font-size: 20px;
    line-height: 30px;
}

.top1-time {
    font-size: 16px;
    line-height: 40px;
    color: gray;
}

.like_num {
    color: orange;
    font-size: 14px;
}

.image {
    width: 170px;
}

.num-tag {
    background-color: orange;
    display: block;
    position: absolute;
    width: 20px;
    color: white;
    font-weight: bold;
    text-align: center;
    line-height: 20px;
    height: 20px;
}
.left-row {
    margin-top: 0px;
}
.left-item {
    display: flex;
    line-height: 48px;
    margin-left: 0px;
    cursor: pointer;
}
.left-index{
    color: darkolivegreen;
    width: 40px;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
}
.left-name{
    width: 170px;
}
.left-num{
    font-size: 14px;
    color: orange;
    width: 100px;
    text-align: right;
}
</style>