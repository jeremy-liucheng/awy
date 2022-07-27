<template>
  <div class="container_about">
    <div class="about_bg">
      <img src="../../../assets/web/my/us.png" alt="" />
    </div>
    <div class="about_company_desc">
      <div class="title">公司简介</div>
      <div class="title_line"></div>
      <div class="content1">
        上海游光网络科技有限公司成立于2014年，是国内首家专注于H5游戏研发的公司，也是中国无端手游的领导者。
        公司成立以来一直致力于HTML5游戏事业的发展，为打造中国HTML5游戏生态而努力，主营业务为H5游戏的研发、
        发行和运营。
        曾先后推出《勇士之塔》、《怪兽要消除》、《征服猫星》、《萌犬便便便》等近百款风靡全球的H5
        手机游戏，同时拥有业内较为知名的H5游戏平台《爱微游》。
      </div>
    </div>
    <div class="about_weal">
      <div class="title">福利制度</div>
      <div class="title_line"></div>
      <div class="weal_content flex flex-row flex-wrap">
        <div class="row">
          <img src="../../../assets/web/my/money.png" alt="" srcset="" />
          <div class="title_line"></div>
          <div>薪资福利</div>
          <div>13薪+绩效奖金</div>
        </div>
        <div class="row">
          <img src="../../../assets/web/my/safe.png" alt="" srcset="" />
          <div class="title_line"></div>
          <div>六险一金</div>
          <div>全额5险一金+商业保险</div>
        </div>
        <div class="row">
          <img src="../../../assets/web/my/elasticity.png" alt="" srcset="" />
          <div class="title_line"></div>
          <div>弹性工作制</div>
          <div>超人性化的考核等你来</div>
        </div>
        <div class="row">
          <img src="../../../assets/web/my/boon.png" alt="" srcset="" />
          <div class="title_line"></div>
          <div>节日福利</div>
          <div>节假日有小礼物</div>
        </div>
        <div class="row">
          <img src="../../../assets/web/my/test.png" alt="" srcset="" />
          <div class="title_line"></div>
          <div>年度体检</div>
          <div>正式员工即享有免费体检</div>
        </div>
        <div class="row">
          <img src="../../../assets/web/my/birth.png" alt="" srcset="" />
          <div class="title_line"></div>
          <div>生日福利</div>
          <div>独有的生日会</div>
        </div>
        <div class="row">
          <img src="../../../assets/web/my/annualLleave.png" alt="" srcset="" />
          <div class="title_line"></div>
          <div>带薪年假</div>
          <div>超多带薪年假</div>
        </div>
        <div class="row">
          <img src="../../../assets/web/my/activity.png" alt="" srcset="" />
          <div class="title_line"></div>
          <div>团建活动</div>
          <div>丰富的团建活动和聚餐</div>
        </div>
      </div>
    </div>
    <div class="about_adress">
      <div class="title">公司地址</div>
      <div class="title_line"></div>
      <div style="margin-top: 60px">
        <My-Map :centerXY="[121.399174, 31.1665]"></My-Map>
      </div>
    </div>
    <div class="about_cooperate">
      <div class="title">商务合作</div>
      <div class="title_line"></div>
      <div class="cooperate_box flex flex-row">
        <img src="../../../assets/web/my/wang.png" alt="" srcset="" />
        <img src="../../../assets/web/my/cheng.png" alt="" srcset="" />
      </div>
    </div>
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
export default class My extends Vue {
  mapInstance: any = null;
}
</script>

<style lang="scss" scoped>
.about_bg {
  width: 100%;
  height: 497px;
  overflow: hidden;
  img {
    width: 100%;
  }
}
.about_company_desc {
  width: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  .title {
    padding-top: 80px;
    width: 143px;
    height: 34px;
    font-size: 32px;
    font-weight: 500;
    color: #333333;
    line-height: 14px;
  }
  .title_line {
    margin-top: 20px;
    width: 140px;
    height: 3px;
    background-image: url("@/assets/web/my/line.jpg");
  }
  .content1 {
    margin-top: 61px;
    text-align: left;
  }
  .content2 {
    margin-top: 20px;
  }
  .content1,
  .content2 {
    text-indent: 50px;
    width: 1196px;
    font-size: 20px;
    color: #666666;
    line-height: 42px;
  }
  margin-bottom: 40px;
}
.about_weal {
  width: 100%;
  height: 947px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-image: url("@/assets/web/my/wealbg.png");
  overflow: hidden;
  .title {
    padding-top: 90px;
    width: 143px;
    height: 34px;
    font-size: 32px;
    font-weight: 500;
    color: #333333;
    line-height: 14px;
  }
  .title_line {
    margin-top: 20px;
    width: 140px;
    height: 3px;
    background-image: url("@/assets/web/my/line.jpg");
  }
  .weal_content {
    width: 1090px;
    overflow: hidden;
    .row {
      margin-top: 74px;
      width: 25%;
      div:nth-child(3) {
        width: 100%;
        font-size: 28px;
        font-weight: 500;
        color: #4190f5;
        margin-top: 40px;
      }
      div:nth-child(4) {
        width: 100%;
        font-size: 24px;
        font-weight: 500;
        color: #999999;
        margin-top: 20px;
      }
      img {
        margin-bottom: 40px;
        width: 112px;
        height: 112px;
      }
      .title_line {
        margin: 0 auto;
        width: 30px;
        height: 4px;
        background-image: url("@/assets/web/my/line.jpg");
      }
    }
  }
}
.about_adress {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    padding-top: 80px;
    width: 143px;
    height: 34px;
    font-size: 32px;
    font-weight: 500;
    color: #333333;
    line-height: 14px;
  }
  .title_line {
    margin-top: 20px;
    width: 140px;
    height: 3px;
    background-image: url("@/assets/web/my/line.jpg");
  }
}
.about_cooperate {
  margin-top: 90px;
  width: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  background-image: url("@/assets/web/my/cooperatebg.png");
  .title {
    padding-top: 80px;
    width: 143px;
    height: 34px;
    font-size: 32px;
    font-weight: 500;
    color: #333333;
    line-height: 14px;
  }
  .title_line {
    margin-top: 20px;
    width: 140px;
    height: 3px;
    background-image: url("@/assets/web/my/line.jpg");
  }
  .cooperate_box {
    width: 1004px;
    margin-top: 68px;
    margin-bottom: 78px;
    justify-content: space-between;
    img {
      width: 422px;
      height: 240px;
    }
  }
}
</style>

<style lang="scss">
.about_adress {
  #container {
    width: 1200px;
    height: 530px;
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
        width: 18px;
        height: 18px;
        background-image: url("@/assets/web/my/adress_mark.png");
      }
      .map_phone_mark {
        width: 18px;
        height: 15px;
        background-image: url("@/assets/web/my/phone.png");
      }
    }
    .amap-marker-label {
      width: 333px;
      height: 147px;
      text-align: center;
      border: none !important;
      background-color: transparent !important;
      background-image: url("@/assets/web/my/markbg.png");
      background-repeat: no-repeat;
    }
  }
}
</style>
