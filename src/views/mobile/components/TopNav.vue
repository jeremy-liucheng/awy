<template>
  <div class="container">
    <div class="logo flex flex-row space-between">
      <img src="../../../assets/web/home/logo.png" alt="" />
      <img src="../../../assets/mobile/home/menu.png" alt="" @click="showMenu" />
    </div>
    <div class="menu_box">
      <el-collapse-transition>
        <div class="menu_list" v-show="showMenuList">
          <template v-for="v in menuList" :key="v.title">
            <a
              class="menu_nav"
              :href="v.path"
              :class="{ active_nav: true }"
              @click="showMenuList = !showMenuList"
              >{{ v.title }}</a
            >
            <!-- <div class="menu_nav" @click="go(v)">{{ v.title }}</div> -->
            <div class="line1" v-if="v.line"></div>
          </template>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, ref, nextTick } from "vue";

export default {
  setup() {
    const showMenuList = ref(false);
    const menuList: MenuData[] = reactive([
      {
        title: "首页",
        path: "/mobile.html#home",
        line: true,
        target: "#home",
      },
      {
        title: "关于我们",
        path: "/mobile.html#about_us",
        line: true,
        target: "#about_us",
      },
      {
        title: "加入我们",
        path: "/mobile.html#join_us",
        target: "#join_us",
      },
    ]);
    const showMenu = () => {
      showMenuList.value = !showMenuList.value;
    };
    const go = async () => {
      await nextTick();
    };

    return {
      showMenuList,
      menuList,
      showMenu,
      go,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  // width: 750px;
  overflow: hidden;
  .logo {
    position: fixed;
    overflow: hidden;
    padding: 32px;
    width: 690px;
    top: 0;
    z-index: 3000;
    background-color: black;
  }
  .logo > img:nth-child(1) {
    width: 164px;
    height: 47px;
  }
  .logo > img:nth-child(2) {
    width: 36px;
    height: 32px;
    margin-top: 7px;
  }
  .menu_box {
    position: fixed;
    top: 106px;
    z-index: 20000;
    .menu_list {
      // height: 370px;
      padding: 40px 71px 80px 71px;
      background-color: black;
      opacity: 0.8;
      .menu_nav {
        font-size: 32px;
        font-weight: 400;
        color: #ffffff;
      }
      .line1 {
        width: 608px;
        margin: 40px 0;
      }
    }
  }
}
</style>
