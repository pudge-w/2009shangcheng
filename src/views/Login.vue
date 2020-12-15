<template>
  <div>
    <van-nav-bar title="登录" />

    <van-field
      v-model="phone"
      center
      clearable
      label="手机号"
      placeholder="请输入手机号"
    >
      <template #button>
        <van-button size="small" type="primary" @click="sendPhoneNum"
          >发送验证码</van-button
        >
      </template>
    </van-field>

    <van-field v-model="code" label="短信" placeholder="请输入短信验证码" />

    <van-button type="primary" block @click="login">登录</van-button>
  </div>
</template>

<script>
import { getPhoneCodeApi, loginApi } from "../utils/api";

export default {
  data() {
    return {
      phone: "",
      code: ""
    };
  },
  methods: {
    async sendPhoneNum() {
      const res = await getPhoneCodeApi({
        phone: this.phone,
        templateId: "537707"
      });
      console.log(res);
    },
    async login() {
      const res = await loginApi({
        phone: this.phone,
        code: this.code
      });
      localStorage.setItem("token", res.result.token);
      this.$router.replace("/mine");
    }
  }
};
</script>
