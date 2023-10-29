<template>
    <div class="login_main page-outer loginBackground">
        <div id="particles-js">
            <canvas class="particles-js-canvas-el"></canvas>
        </div>
        <div class="mainBody">
            <h1 class="title">推荐系统登录界面</h1>
            <div class="loginBody">
                <el-form :rules="rules" :model="ruleForm" class="loginForm" ref="ruleForm" label-width="100px" status-icon>
                    <el-form-item prop="uid" label="账号">
                        <el-input v-model="ruleForm.uid" placeholder="请输入账号" suffix-icon="el-icon-user-solid"
                            clearable></el-input>
                    </el-form-item>
                    <el-form-item prop="password" label="密码">
                        <el-input v-model="ruleForm.password" placeholder="请输入密码" type="password" suffix-icon="el-icon-lock"
                            clearable></el-input>
                    </el-form-item>
                    <el-row>
                        <el-button :disabled="ruleForm.password === '' || ruleForm.uid === ''" @click="submitForLogin('ruleForm')"
                            type="primary">登录</el-button>
                        <span class="spanAccount">
                            <a @click.prevent="toResetPassword">忘记密码?</a>&nbsp;|&nbsp;
                            <a @click.prevent="toRigester">注册</a>
                        </span>
                    </el-row>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
import ELSlPanel from 'element-ui/packages/color-picker/src/components/sv-panel'
import { SessionStorage } from 'wii-fe-utils'
import {
    setCanvas
} from "@/libs/login/login.js";
import {
    setCanvasApp
} from "@/libs/login/loginApp.js";
export default {
    name: 'Login',
    components: {
        ELSlPanel
    },
    data() {
        let checkAccount = (rule, value, callback) => {
            if (String(value) === "") {
                return callback(new Error("请输入账号"));
            }
            return callback();
        };
        let checkPassword = (rule, value, callback) => {
            if (String(value) === "") {
                return callback(new Error("请输入密码"));
            }
            return callback();
        };
        return {
            ruleForm: {
                uid: "",
                password: "",
            },
            rules: {
                uid: [{
                    validator: checkAccount,
                    trigger: "blur",
                },],
                password: [{
                    validator: checkPassword,
                    trigger: "blur",
                },],

            },
        }
    },
    computed: {

    },
    created() {

    },
    mounted() {
        setCanvas();
        setCanvasApp();
    },
    methods: {
        // 登录方法
        submitForLogin(formName) {
            const _this = this;
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    _this.$message.success('爱我家斐斐');
                    // 这里点击登录后调用API，根据API返回结果跳转登录界面
                    _this.$router.push("/index")

                } else {
                    _this.$message.warning('请按照要求填写')
                }
            })
        },
        // 注册方法
        toRigester() {
            this.$router.push("/register")
        },
        // 忘记密码
        toResetPassword() {
            this.$router.push("/password")
        }
    }

}
</script>

<style lang="less" scoped>
canvas {
    width: 100%;
    height: 100%;
    display: block;
}

#particles-js {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: url(../../assets/images/login/login.jpg);
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
}

.mainBody {
    width: fit-content;
    height: fit-content;
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);

    .title {
        color: white;
        text-align: center;
        font-size: 40px;
        margin-left: 0px;
    }

    .loginBody {
        margin-top: 30px;

        .loginForm {
            background: radial-gradient(rgba(255, 255, 255, 0.01),
                    rgba(143, 145, 152, 0.1));
            width: 460px;
            box-shadow: 0px 0px 10px 5px rgba(143, 145, 152, 1) inset;
            border-radius: 15px;
            padding: 60px 10px 50px 10px;
            margin: 15px;

            .el-form-item__label {
                color: black !important;
                font-size: 18px;
                margin-right: 10px;
            }

            .el-input {
                width: 300px;
                color: black;
            }

            .el-input__inner {
                color: white;
                background: transparent;
                border: 1px solid rgba(143, 145, 152, 0.6);
            }

            .el-input__inner:focus {
                border: 1px solid rgba(0, 123, 255, 1);
            }

            .codeStyle {
                color: white;
                width: 120px;
                margin-left: 30px;
                height: 40px;
                cursor: pointer;
            }

            .verCodeInput {
                width: 140px;
            }

            .el-row {
                width: 100%;
                padding: 0 20px;
                margin-top: 30px;
                display: flex;
                justify-content: space-between;

                .el-button {
                    width: 130px;
                }

                .spanAccount {
                    color: #eee;
                    display: inline-block;
                    line-height: 40px;

                    a {
                        text-decoration: none;
                        cursor: pointer;
                    }

                    a:visited {
                        color: #eee;
                    }

                    a:hover {
                        color: aqua;
                    }
                }
            }
        }
    }
}
</style>