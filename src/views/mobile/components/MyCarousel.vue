<template>
  <div class="container">
    <div class="home_pics">
      <swiper
        :spaceBetween="10"
        :thumbs="{ swiper: thumbsSwiper }"
        :modules="modules"
        :navigation="true"
        :pagination="{
          type: 'fraction',
        }"
        class="mySwiper2"
        @slideChange="onSlideChange"
        effect="fade"
      >
        <swiper-slide v-for="(v, i) in homeCenterPics" :key="i">
          <img :src="v" alt="" srcset="" />
        </swiper-slide>
      </swiper>
      <div class="footer_pics flex flex-row space-around">
        <swiper
          @swiper="setThumbsSwiper"
          :spaceBetween="10"
          :slidesPerView="3"
          :freeMode="true"
          :watchSlidesProgress="true"
          :modules="modules"
          class="mySwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="(v, i) in fotterPics" :key="i">
            <img :class="{ 'active-img': i === activeIndex }" :src="v" :key="v" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/navigation";

// import required modules
import { EffectFade, Pagination, FreeMode, Navigation, Thumbs } from "swiper";
import { reactive, ref } from "vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const activeIndex = ref(0);
    const homeCenterPics = reactive([
      require("@/assets/mobile/home/mw.png"),
      require("@/assets/mobile/home/syq.png"),
      require("@/assets/mobile/home/mx.png"),
    ]);
    const fotterPics = reactive([
      require("@/assets/mobile/home/footer_mw.png"),
      require("@/assets/mobile/home/footer_syq.png"),
      require("@/assets/mobile/home/footer_mx.png"),
    ]);
    let thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper: any) => {
      thumbsSwiper.value = swiper;
    };

    const onSlideChange = (e: any) => {
      activeIndex.value = e.activeIndex;
    };

    return {
      thumbsSwiper,
      setThumbsSwiper,
      homeCenterPics,
      onSlideChange,
      fotterPics,
      activeIndex,
      modules: [EffectFade, FreeMode, Navigation, Thumbs, Pagination],
    };
  },
};
</script>
<style lang="scss" scoped>
.home_pics {
  margin-top: 110px;
  white-space: nowrap;
  img {
    width: 100%;
  }
  .footer_pics {
    padding: 14px 0;
    position: absolute;
    width: 100%;
    top: 1180px;
    background-image: url("../../../assets/mobile/home/footer_pics_bg.png");
    z-index: 2000;
  }
  .footer_pics img {
    width: 127px;
    height: 127px;
    margin: 0 10px;
  }
  .footer_pics {
    .active-img {
      border: 1px #4190f5 solid;
      border-radius: 15px;
    }
  }
}
</style>

<style lang="scss">
.swiper-button-prev,
.swiper-button-next {
  color: #ffffff !important;
  width: 40px !important;
  height: 40px !important;
}
.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 48px;
}
.footer_pics {
  .swiper-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .swiper-slide {
    width: 127px !important;
  }
}
</style>
