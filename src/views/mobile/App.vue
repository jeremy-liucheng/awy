<template>
  <div class="mobile_base_box">
    <a id="home"></a>
    <Top-Nav></Top-Nav>
    <router-view />
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script lang="ts">
import Footer from "@/views/mobile/components/Footer.vue";
import TopNav from "@/views/mobile/components/TopNav.vue";
import "@/views/mobile/style/reset.css";
export default {
  components: {
    Footer,
    TopNav,
  },
};
</script>
<style scoped>
.el-slider {
  margin-top: 20px;
}
</style>
