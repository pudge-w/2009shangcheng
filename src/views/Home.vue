<template>
  <div>
    <router-view></router-view>

    <van-tabbar v-model="active" route :placeholder="true">
      <van-tabbar-item
        v-for="item in tabbarList"
        :key="item.to"
        :icon="item.icon"
        :to="item.to"
      >
        {{ item.title }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      tabbarList: [
        {
          title: "首页",
          icon: "home-o",
          to: "/index",
          dot: false
        },
        {
          title: "分类页",
          icon: "search",
          to: "/classify",
          dot: false
        },
        {
          title: "购物车页",
          icon: "friends-o",
          to: "/cart",
          dot: false
        },
        {
          title: "我的",
          icon: "setting-o",
          to: "/mine",
          dot: false
        }
      ]
    };
  }
};
</script>
