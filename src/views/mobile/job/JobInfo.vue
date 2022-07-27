<template>
  <div class="container_job">
    <div class="search flex flex-row flex-vc">
      <el-autocomplete
        v-model="searchStr"
        :fetch-suggestions="querySearch"
        :trigger-on-focus="false"
        class="inline-input w-50 m-2 search_input"
        placeholder="输入职位关键字"
        @select="handleSelect"
        @keyup.enter="search"
      >
        <template #prefix>
          <el-icon class="el-input__icon"><Search /></el-icon>
        </template>
      </el-autocomplete>
    </div>

    <div class="dropdown mt20 flex flex-row flex-vc flex-hc space-around">
      <div @click="open(0)" :class="{ active_title: activeTitle === 0 }">
        上海
        <el-icon>
          <CaretBottom v-if="!drawer" />
          <CaretTop v-else />
        </el-icon>
      </div>
      <div @click="open(1)" :class="{ active_title: activeTitle === 1 }">
        {{ jobTypes[activeJobIndex] }}
        <el-icon>
          <CaretBottom v-if="!drawer" />
          <CaretTop v-else />
        </el-icon>
      </div>
    </div>
    <div class="job_container">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item v-for="v in data.jobInfo" :name="v.title" :key="v.id">
          <template v-slot:title>
            <div class="job_bar">
              <div>{{ v.title }}</div>
              <div>职位类型：{{ v.jobClass }} 上海·徐汇区</div>
            </div>
          </template>
          <div class="job_des">
            <h1>岗位描述</h1>
            <div class="job_bottom_box">
              <div class="left">岗位职责：</div>
              <div class="right">
                <div v-for="(j, i) in v.jobPosition" :key="i">{{ i + 1 }}、{{ j }}</div>
              </div>
            </div>
            <div class="job_bottom_box">
              <div class="left">任职要求：</div>
              <div class="right">
                <div v-for="(j, i) in v.jobFunction" :key="i">{{ i + 1 }}、{{ j }}</div>
              </div>
            </div>
          </div>
          <div class="footer_btn flex flex-vc">
            <el-button class="btn" type="primary">
              <a href="mailto:hr@11h5.com">立即投递</a>
            </el-button>
          </div>
        </el-collapse-item>
      </el-collapse>
      <div class="flex flex-vc none">没有更多了...</div>
    </div>
  </div>
  <el-drawer
    :lock-scroll="true"
    v-model="drawer"
    direction="btt"
    :with-header="false"
    :size="activeTitle === 0 ? 60 : '35%'"
  >
    <ul class="flex flex-hc flex-column">
      <template v-if="activeTitle === 0">
        <li
          @click="drawer = !drawer"
          style="width: 100%"
          class="active_title flex flex-row flex-vc space-between fz26 postition_title"
        >
          <div>上海</div>
          <div>
            <el-icon> <Check /> </el-icon>
          </div>
        </li>
      </template>
      <template v-else>
        <li
          v-for="(v, i) in jobTypes"
          :key="i"
          style="width: 100%; padding: 5px 0"
          class="flex flex-row flex-vc space-between fz26 postition_title"
          :class="{ active_title: i === activeJobIndex }"
          @click="touchJobType(i)"
        >
          <div>{{ v }}</div>
          <div>
            <el-icon> <Check v-if="i === activeJobIndex" /> </el-icon>
          </div>
        </li>
      </template>
    </ul>
  </el-drawer>
</template>

<script lang="ts">
import { reactive, ref, onMounted, watch } from "vue";
import { JobList, JobType } from "@/utils/data";
import { useRoute } from "vue-router";

export default {
  setup() {
    const searchStr = ref("");
    const getCssVarName = (type: any) => {
      return `--el-box-shadow${type ? "-" : ""}${type}`;
    };
    const activeName = ref("1");
    const jobTypes = reactive(JobType);
    const restaurants: any[] = [
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
    const createFilter = (queryString: string) => {
      return (restaurant: RestaurantItem) => {
        return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
      };
    };
    const querySearch = (queryString: string, cb: (args: RestaurantItem[]) => void) => {
      const results = queryString ? restaurants.filter(createFilter(queryString)) : restaurants;
      // call callback function to return suggestions
      cb(results);
    };

    const data: any = reactive({
      jobInfo: [
        {
          id: 0,
          title: "",
          jobClass: "",
          type: 0,
          order: 0,
          jobPosition: [],
          jobFunction: [],
        },
      ],
    });
    const handleSelect = (item: RestaurantItem) => {
      const { id } = item;
      const r = JobList.filter((v: any) => v.id === id);
      if (r) {
        data.jobInfo = r;
      }
    };

    onMounted(() => {
      // route响应式对象，监控变化，传值
      const { query } = useRoute();
      if (Object.keys(query).length) {
        activeJobIndex.value = Number(query.id);
      }
      const r = JobList.filter((v: any) => !Number(query.id) || v.type === Number(query.id));
      if (r) {
        data.jobInfo = r;
      }
    });

    const drawer = ref(false);
    const activeTitle = ref(-1);
    const open = (i: number) => {
      activeTitle.value = i;
      drawer.value = !drawer.value;
    };

    const activeJobIndex = ref(0);
    const touchJobType = (i: number) => {
      activeJobIndex.value = i;
      data.jobInfo = JobList.filter(v => !i || v.type === i);
      drawer.value = !drawer.value;
    };

    const search = () => {
      const patt = new RegExp(`[${searchStr.value}]`, "g");
      // const patt = /[\`${this.searchStr}`\]/g;
      const ret = JobList.filter(e => {
        const r = e.title.match(patt);
        if (r) {
          e.order = r.length;
        }
        return e.title.match(patt);
      }).sort((a, b) => b.order - a.order);
      data.jobList = ret;
    };

    const mo = (e: any) => {
      e.preventDefault();
    };

    watch(drawer, val => {
      if (val) {
        document.addEventListener("touchmove", mo, { passive: false }); //禁止页面滑动
      } else {
        document.removeEventListener("touchmove", mo);
      }
    });
    return {
      handleSelect,
      querySearch,
      getCssVarName,
      searchStr,
      data,
      search,
      drawer,
      open,
      activeTitle,
      jobTypes,
      activeJobIndex,
      touchJobType,
      jobList: reactive(JobList),
      activeName,
    };
  },
};
</script>

<style lang="scss" scoped>
.container_job {
  // background-color: #d2cccc;
  margin-top: 106px;
  .search_input {
    margin-top: 20px !important;
  }

  .job_bar {
    // padding-top: 50px;
    padding-left: 30px;
    // box-shadow: var(--el-box-shadow-lighter);
    div:nth-child(1) {
      font-size: 32px;
      font-weight: 400;
      color: #333333;
    }
    div:nth-child(2) {
      font-size: 22px;
      font-weight: 400;
      color: #999999;
    }
  }
  .job_des {
    margin-top: 48px;
    padding-left: 30px;
    padding-right: 30px;

    h1 {
      font-size: 26px;
    }
    .job_bottom_box {
      margin-top: 10px;
      .left {
        font-size: 20px;
        font-weight: 500;
        white-space: nowrap;
      }
      .right {
        color: #666666;
        white-space: pre-wrap;
        font-size: 26px;
        font-weight: 400;
        line-height: 36px;
      }
    }
  }
  .footer_btn {
    margin: 48px 0;
    .el-button {
      width: 690px !important;
      height: 90px !important;
      a {
        font-size: 32px;
        color: white;
      }
    }
  }
  .dropdown {
    font-size: 28px;
    div {
      padding-top: 40px;
      padding-bottom: 20px;
    }
  }
  .job_container {
    min-height: 620px;
  }
  .none {
    padding: 40px 0;
    font-size: 30px;
    font-weight: 400;
    color: #999999;
  }
}
</style>
<style lang="scss">
.container_job {
  .search_input {
    width: 680px !important;
    margin-top: 20px !important;
    box-shadow: var(--el-box-shadow-light);
  }
  .el-collapse-item__header {
    height: 100%;
  }
}
.el-drawer__body {
  height: 100% !important;
}
.el-collapse-item__header {
  padding-right: 30px;
}
</style>
