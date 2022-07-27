<template>
  <div class="base_box">
    <nav>
      <TopNav />
    </nav>
    <router-view />
    <Footer />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TopNav from "@/views/web/components/TopNav.vue";
import Footer from "@/views/web/components/Footer.vue";
import "@/views/web/style/reset.css";
// HelloWorld class will be a Vue component
@Options({
  components: {
    TopNav,
    Footer,
  },
})
export default class App extends Vue {
  rootkey = new Date().getTime();
  mounted() {
    document.dispatchEvent(new Event("render-event"));
  }
}
</script>
<style lang="scss"></style>
