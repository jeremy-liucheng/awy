<template>
  <div class="join_container">
    <div class="us_bg">
      <img src="../../../assets/web/join/joinusbg.png" alt="" />
    </div>
    <div class="us_job flex flex-column">
      <h2>职位筛选</h2>
      <div class="us_search">
        <el-autocomplete
          v-model="searchStr"
          :fetch-suggestions="querySearch"
          :trigger-on-focus="false"
          class="w-2 w-50 search_input"
          placeholder="输入职位关键字"
          @select="handleSelect"
          @keyup.enter="search"
        >
          <template #append>
            <div class="search_btn" @click="search">搜索</div>
          </template>
        </el-autocomplete>
      </div>
      <div class="job_class flex flex-row">
        <div class="class_title">职位类别</div>
        <div class="class_container flex flex-row space-between">
          <div
            class="class_content"
            v-for="(v, i) in jobTypes"
            :class="{ active: activeJob === i }"
            :key="v"
            @click="switchJobType(i)"
          >
            {{ v }}
          </div>
        </div>
      </div>
      <div v-if="jobList.length">
        <div class="class_content_box" v-for="v in jobList" :key="v.id">
          <div class="job_top_box flex flex-row flex-bc space-between">
            <div class="left">
              <div class="title">【{{ v.title }}】</div>
              <div class="content_job_class">
                职位类型：<span>{{ v.jobClass }}</span>
              </div>
            </div>
            <div class="right flex flex-row">
              <div>
                <a href="mailto:hr@11h5.com">立即投递</a>
              </div>
              <div class="line"></div>
            </div>
          </div>
          <div class="job_bottom_box flex flex-row">
            <div class="left">岗位职责：</div>
            <div class="right">
              <div v-for="(j, i) in v.jobPosition" :key="i">{{ i + 1 }}、{{ j }}</div>
            </div>
          </div>
          <div class="job_bottom_box flex flex-row">
            <div class="left">任职要求：</div>
            <div class="right">
              <div v-for="(j, i) in v.jobFunction" :key="i">{{ i + 1 }}、{{ j }}</div>
            </div>
          </div>
          <div class="bottom_line"></div>
        </div>
      </div>
      <el-empty v-else description="description" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { JobList, JobType } from "@/utils/data";

// HelloWorld class will be a Vue component
@Options({})
export default class Join extends Vue {
  searchStr = "";
  jobList = JobList;
  jobTypes = JobType;
  activeJob = 0;
  restaurants: RestaurantItem[] = [
    { value: "游戏运营专员", link: "https://github.com/vuejs/vue", index: 0 },
    {
      value: "游戏策划师",
      link: "https://github.com/ElemeFE/element",
      index: 1,
    },
    {
      value: "Egret开发工程师",
      link: "https://github.com/ElemeFE/cooking",
      index: 2,
    },
    {
      value: "Node.js开发工程师",
      link: "https://github.com/ElemeFE/mint-ui",
      index: 3,
    },
    { value: "UI设计师", link: "https://github.com/vuejs/vuex", index: 4 },
    {
      value: "行政专员",
      link: "https://github.com/vuejs/vue-router",
      index: 5,
    },
    { value: "商务", link: "https://github.com/babel/babel", index: 6 },
  ];
  switchJobType(i: number) {
    this.activeJob = i;
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
    const patt = new RegExp(`[${this.searchStr}]`, "g");
    // const patt = /[\`${this.searchStr}`\]/g;
    const ret = JobList.filter(e => {
      const r = e.title.match(patt);
      if (r) {
        e.order = r.length;
      }
      return e.title.match(patt);
    }).sort((a, b) => b.order - a.order);
    this.activeJob = -1;
    this.jobList = ret;
  }
}
</script>

<style lang="scss" scoped>
.join_container {
  .line {
    width: 66px;
    height: 2px;
    background-image: url("@/assets/web/join/line.png");
  }
  .us_bg > img {
    width: 100%;
    height: 380px;
  }
  .us_job {
    width: 1200px;
    margin-left: 360px;
    h2 {
      margin-top: 50px;
    }
    .us_search {
      margin-top: 30px;
      height: 74px;
      width: 100%;

      .search_btn {
        width: 180px;
        text-align: center;
        font-size: 26px;
        font-weight: 500;
        color: #ffffff;
      }
    }
  }
  .job_class {
    margin-top: 20px;
    .class_title {
      font-size: 22px;
      margin-right: 22px;
    }
    .class_content {
      width: 54px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 22px;
    }
    .class_container {
      width: 563px;
      cursor: pointer;
    }
    .active {
      background-color: #01a0e2;
      color: white;
    }
  }

  .class_content_box {
    .title {
      height: 40px;
      font-size: 28px;
      font-family: Source Han Sans SC VF;
      font-weight: bold;
      color: #01a0e2;
      line-height: 53px;
      text-indent: -16px;
      margin-top: 58px;
    }
    .job_top_box {
      .right {
        cursor: pointer;
        width: 243px;
        height: 75px;
        border: 3px solid black;
        text-align: center;
        font-size: 23px;
        font-weight: 500;
        color: #333333;
        // padding-top: 32px;
        div:nth-child(1) {
          margin-top: 26px;
          margin-left: 32px;
          margin-right: 20px;
        }
        div:nth-child(2) {
          margin-top: 38px;
        }
      }
    }
    .content_job_class,
    .job_bottom_box {
      margin-top: 30px;
    }
    .content_job_class {
      font-size: 20px;
      font-weight: 500;
      span {
        color: #666666;
      }
    }
    .job_bottom_box {
      .left {
        font-size: 20px;
        font-weight: 500;
        white-space: nowrap;
      }
      .right {
        font-size: 20px;
        font-weight: 500;
        color: #666666;
        white-space: pre-wrap;
        div:not(div:nth-child(1)) {
          margin-top: 20px;
          line-height: 53px;
        }
      }
    }
    .bottom_line {
      width: 100%;
      height: 1px;
      opacity: 0.16;
      background-color: black;
      margin-top: 60px;
    }
  }
}
</style>
