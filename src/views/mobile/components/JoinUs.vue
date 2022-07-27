<template>
  <a id="join_us"></a>
  <div class="container join_us">
    <div class="search_bar flex flex-hc flex-vc"></div>
    <div class="join_us_pic flex flex-hc flex-vc">
      <img :src="joinUsPic" alt="" />
    </div>
    <div class="job_list" v-if="jobList.length">
      <div
        v-for="(v, i) in jobTypes"
        :key="v"
        :style="{
          boxShadow: `var(${getCssVarName('')})`,
        }"
        class="job_list_box flex flex-hc flex-vc space-between"
      >
        <div>{{ v }}</div>
        <div class="view" @click="goView(i)">查看</div>
      </div>
    </div>
    <el-empty v-else description="没有更多了" />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { JobList, JobType } from "@/utils/data";
@Options({})
export default class Join extends Vue {
  searchStr = "";
  joinUsPic = require("@/assets/mobile/home/join_us.png");
  jobList = JobList;
  jobTypes = JobType;
  getCssVarName(type: string) {
    return `--el-box-shadow${type ? "-" : ""}${type}`;
  }
  restaurants: any[] = [
    { value: "游戏运营专员", link: "https://github.com/vuejs/vue", id: 0 },
    {
      value: "游戏策划师",
      link: "https://github.com/ElemeFE/element",
      id: 1,
    },
    {
      value: "Egret开发工程师",
      link: "https://github.com/ElemeFE/cooking",
      id: 2,
    },
    {
      value: "Node.js开发工程师",
      link: "https://github.com/ElemeFE/mint-ui",
      id: 3,
    },
    { value: "UI设计师", link: "https://github.com/vuejs/vuex", id: 4 },
    {
      value: "行政专员",
      link: "https://github.com/vuejs/vue-router",
      id: 5,
    },
    { value: "商务", link: "https://github.com/babel/babel", id: 6 },
  ];
  switchJobType(i: number) {
    if (!i) {
      return (this.jobList = JobList);
    }
    this.jobList = JobList.filter(e => e.type === i);
  }
  createFilter(queryString: string) {
    return (restaurant: RestaurantItem) => {
      return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
    };
  }
  querySearch(queryString: string, cb: (args: RestaurantItem[]) => void) {
    const results = queryString
      ? this.restaurants.filter(this.createFilter(queryString))
      : this.restaurants;
    // call callback function to return suggestions
    cb(results);
  }
  handleSelect(item: RestaurantItem) {
    this.switchJobType(item.index);
  }
  search() {
    if (this.searchStr === "") {
      this.jobList = JobList;
      return;
    }
    const patt = new RegExp(`[${this.searchStr}]`, "g");
    // const patt = /[\`${this.searchStr}`\]/g;
    const ret = JobList.filter(e => {
      const r = e.title.match(patt);
      if (r) {
        e.order = r.length;
      }
      return e.title.match(patt);
    }).sort((a, b) => b.order - a.order);
    this.jobList = ret;
  }
  goView(id: number) {
    this.$router.push({
      path: "/mobile.html/job",
      query: {
        id,
      },
    });
  }
}
</script>
<style lang="scss" scoped>
.container {
  .search_bar {
    height: 232px;
    background-size: 750px;
    background-image: url("@/assets/web/my/us.png");
  }
  .join_us_pic {
    height: 124px;
    margin-top: 31px;
    padding-bottom: 30px;
    img {
      width: 323px;
    }
  }
  .job_list {
    width: 690px;
    margin: 0 auto;
    .job_list_box {
      height: 148px;
      background-color: white;
      border-radius: 10px;
      padding: 0 30px;
      margin-bottom: 20px;
    }
    .job_list_box div:nth-child(1) {
      font-size: 32px;
      font-weight: 400;
      color: #333333;
    }
    .view {
      padding: 16px 30px;
      border: 1px #01a0e2 solid;
      font-size: 24px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #01a0e2;
    }
  }
}
</style>

<style lang="scss">
.search_bar {
  .search_input {
    width: 680px !important;
    height: 80px !important;
  }
}
</style>
