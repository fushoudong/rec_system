<template>
    <div class="login_main">
        这是登录页面
        <div style="margin-left: 15px; width: 30%">
            <el-input v-model="search_text" placeholder="请输入要搜索的内容">
                <template slot="append">
                    <el-button type="primary" icon="el-icon-search">搜索</el-button>
                </template>
            </el-input>
        </div>
    </div>
</template>
<script>
import ELSlPanel from 'element-ui/packages/color-picker/src/components/sv-panel'
export default {
    name: 'Login',
    components: {
        ELSlPanel
    },
    data() {
        return {

        }
    },
    computed: {

    },
    created() {

    },
    methods: {
        submitForLogin() {

        }
    }

}
</script>

<style scoped>

</style>