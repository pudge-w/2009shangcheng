<template>
  <div>
    <van-nav-bar title="分类" :fixed="true" :placeholder="true" />

    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      background="transparent"
      shape="round"
    />

    <div class="classify-main">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          @click="itemClick"
          v-for="item in list"
          :key="item.type"
          :title="item.title"
        />
      </van-sidebar>

      <div class="classify-right">
        <p v-for="item in classifyList" :key="item.productId">
          {{ item.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      activeKey: 0,
      type: "1",
      list: [
        {
          title: "推荐分类",
          type: "1"
        },
        {
          title: "全球奶粉",
          type: "2"
        },
        {
          title: "尿不湿",
          type: "3"
        },
        {
          title: "营养辅食",
          type: "4"
        },
        {
          title: "喂养物品",
          type: "5"
        },
        {
          title: "宝宝洗护",
          type: "6"
        },
        {
          title: "清洁用品",
          type: "7"
        },
        {
          title: "孕产母乳",
          type: "8"
        },
        {
          title: "婴幼儿服饰",
          type: "9"
        }
      ]
    };
  },
  mounted() {
    this.$store.dispatch("getClassifyList", { type: this.type });
  },
  computed: {
    classifyList() {
      return this.$store.state.classify.classifyList;
    }
  },
  methods: {
    itemClick(index) {
      this.type = this.list[index].type;
      this.$store.dispatch("getClassifyList", { type: this.type });
    }
  }
};
</script>

<style lang="stylus">
.classify-main
  display flex
  position absolute
  top 100px
  bottom 50px
  left 0
  right 0
  .classify-right
    flex 1
</style>
