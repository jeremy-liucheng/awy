<template>
  <div class="mobile_container">
    <main class="about_us_container">
      <Carousel />
      <About-Us></About-Us>
      <Join-Us></Join-Us>
    </main>
  </div>
</template>

<script lang="ts" setup>
import AboutUs from "@/views/mobile/components/AboutUs.vue";
import JoinUs from "@/views/mobile/components/JoinUs.vue";
import Carousel from "@/views/mobile/components/MyCarousel.vue";
</script>

<style lang="scss">
.mobile_container {
  .about_us_container {
    background-image: url("@/assets/mobile/home/home_bg.png");
  }
}
</style>

<style>
.el-tabs__item {
  width: 191px;
  height: 67px;
  text-align: center;
  border: none;
  color: black;
  font-size: 32px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  border-radius: 10px;
  border: 1px solid gray;
  line-height: 67px;
  margin-right: 16px;
}
.el-tabs__active-bar {
  height: 0px;
  width: 0px !important;
  border: none;
}
.el-tabs__nav-wrap::after {
  background: none;
}
.el-tabs__item.is-active {
  background-color: var(--el-color-primary);
  color: white;
  border: 1px solid var(--el-color-primary);
}
</style>
