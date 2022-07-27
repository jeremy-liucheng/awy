<template>
  <div class="container containerpd">
    <div class="nav_container flex flex-row space-between">
      <div class="logo">
        <img src="../../../assets/web/home/logo.png" alt="" />
      </div>
      <div class="fz25 nav_right flex flex-row flex-hc space-between">
        <router-link
          class="fz25 router_link"
          active-class="router_active"
          v-for="v in menuList"
          :key="v.path"
          :to="v.path"
        >
          {{ v.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class TopNav extends Vue {
  menuList: MenuData[] = [
    {
      title: "首页",
      path: "/index.html",
    },
    {
      title: "关于我们",
      path: "/index.html/my",
    },
    {
      title: "加入我们",
      path: "/index.html/join",
    },
  ];

  activeRouter = 0;

  go(params: MenuData, i: number) {
    this.activeRouter = i;
    this.$router.push(params.path);
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: black;
}
.nav_container {
  .logo > img {
    width: 177px;
    height: 51px;
  }
  .nav_right {
    width: 500px;
  }
  .nav_right > div {
    width: 120px;
    text-align: center;
    color: white;
  }
  .nav_right > div:hover {
    color: #409eff;
    cursor: pointer;
  }
  .router_active {
    color: #409eff !important;
  }
  .router_link {
    color: #ffffff;
  }
}
</style>
