<template>
  <div>
    我的页
    <img :src="info.avatarImg" alt="" width="50" />
  </div>
</template>

<script>
import { getMyInfoApi } from "../utils/api";
export default {
  data() {
    return {
      info: {}
    };
  },
  mounted() {
    this.getMyInfoApi();
  },
  methods: {
    async getMyInfoApi() {
      const res = await getMyInfoApi({
        token: localStorage.getItem("token")
      });
      this.info = res.result;
    }
  }
};
</script>
