<template>
  <a id="about_us"></a>
  <div class="container about_us">
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="关于我们" name="first">
        <div class="us_content">
          <div class="company">公司简介</div>
          <div class="desc">Company Profile</div>
          <div class="content">
            上海游光网络科技有限公司成立于2014年，是国内首家专注于H5游戏研发的公司，也是中国无端手游的领导者。公司成立以来一直致力于HTML5游戏事业的发展，为打造中国HTML5游戏生态而努力，主营业务为H5游戏的研发、发行和运营。曾先后推出《勇士之塔》、《怪兽要消除》、《征服猫星》、《萌犬便便便》等近百款风靡全球的H5手机游戏，同时拥有业内较为知名的H5游戏平台《爱微游》。
          </div>
        </div>
        <div class="us_content">
          <div class="company">商务合作</div>
          <div class="desc">Business cooperation</div>
          <div class="content flex flex-row space-around">
            <img v-for="v in qqList" :src="v" alt="" srcset="" :key="v" />
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="公司福利" name="second">
        <div class="company_content">
          <div class="company">福利待遇</div>
          <div class="desc">fringe benefits</div>
          <div class="company_fl flex flex-row flex-wrap space-around">
            <div class="company_fl_content" v-for="v in wealList" :key="v.title">
              <img :src="v.imgUrl" alt="" srcset="" />
              <div>{{ v.title }}</div>
            </div>
          </div>
        </div>
        <div class="company_content">
          <div class="company">公司地址</div>
          <div class="desc">Company address</div>

          <div style="margin-top: 32px" v-loading="loading">
            <My-Map
              v-if="activeName === 'second'"
              @mapReady="mapReady"
              :centerXY="[121.399483, 31.166281]"
            />
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MyMap from "@/views/mobile/components/MyMap.vue";
@Options({
  components: {
    MyMap,
  },
})
export default class TopNav extends Vue {
  activeName = "first";

  loading = true;

  mapReady() {
    this.loading = false;
  }

  qqList = [require("@/assets/web/home/cheng.png"), require("@/assets/web/home/wang.png")];
  wealList = [
    {
      title: "薪资福利",
      imgUrl: require("@/assets/web/my/money.png"),
    },
    {
      title: "六险一金",
      imgUrl: require("@/assets/web/my/safe.png"),
    },
    {
      title: "弹性工作制",
      imgUrl: require("@/assets/web/my/elasticity.png"),
    },
    {
      title: "节日福利",
      imgUrl: require("@/assets/web/my/boon.png"),
    },
    {
      title: "年度体检",
      imgUrl: require("@/assets/web/my/test.png"),
    },
    {
      title: "生日福利",
      imgUrl: require("@/assets/web/my/birth.png"),
    },
    {
      title: "带薪年假",
      imgUrl: require("@/assets/web/my/annualLleave.png"),
    },
    {
      title: "团建活动",
      imgUrl: require("@/assets/web/my/activity.png"),
    },
  ];
}
</script>

<style lang="scss" scoped>
.container {
  padding: 81px 30px;
  .company {
    font-size: 36px;
    font-weight: bold;
    color: #333333;
    margin-top: 50px;
  }
  .desc {
    font-size: 18px;
    font-weight: bold;
    color: #999999;
    opacity: 0.73;
    margin-top: 13px;
  }
  .content {
    width: 675px;
    font-size: 22px;
    font-weight: 400;
    color: #353943;
    line-height: 45px;
    margin-top: 50px;
    img {
      width: 354px;
      height: 326px;
    }
  }

  .company_fl {
    .company_fl_content {
      box-shadow: var(--el-box-shadow-light);
      background-color: white;
      border-radius: 20px;
      width: 150px;
      height: 110px;
      text-align: center;
      font-size: 24px;
      font-weight: 500;
      color: #4190f5;
      margin-top: 60px;
      img {
        width: 60px;
        height: 60px;
        position: relative;
        top: -20px;
      }
    }
  }
}
</style>

<style lang="scss">
.company_content {
  #container {
    width: 704px;
    height: 385px;
    .info {
      position: relative;
      top: 0;
      right: 0;
      min-width: 0;
      text-align: left;
      .map_title {
        font-size: 24px;
        color: #4190f5;
        font-weight: bold;
        margin: 20px 0 10px 20px;
      }
      .map_adress {
        margin: 10px 0 10px 20px;
      }
      .map_phone {
        margin: 0 0 10px 20px;
      }
      span {
        display: inline-block;
        background-repeat: no-repeat;
      }
      .map_adress_mark {
        width: 22px;
        height: 30px;
        background-image: url("@/assets/web/my/adress_mark.png");
        margin-right: 10px;
      }
      .map_phone_mark {
        width: 25px;
        height: 30px;
        background-image: url("@/assets/web/my/phone.png");
        margin-right: 10px;
      }
    }
    .amap-marker-label {
      width: 450px;
      height: 194px;
      top: -210px !important;
      left: -185px !important;
      text-align: center;
      border: none !important;
      background-color: transparent !important;
      background-image: url("@/assets/web/my/markbg.png");
      background-size: 450px 194px;
      background-repeat: no-repeat;
    }
  }
}
</style>
