<template>
  <div class="scroll_box">
    <el-carousel class="carousel" :interval="5000">
      <el-carousel-item v-for="item in list" :key="item">
        <img class="carousel_img" :src="item.img" alt="" srcset="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
// HelloWorld class will be a Vue component
@Options({})
export default class Home extends Vue {
  list = [
    {
      img: require("@/assets/web/home/banner2.png"),
    },
    {
      img: require("@/assets/web/home/banner.png"),
    },
  ];
}
</script>

<style lang="scss">
.carousel,
.el-carousel__container {
  height: 850px !important;
  width: 1920px !important;
  .carousel_img {
    height: 851px !important;
  }
}
</style>
