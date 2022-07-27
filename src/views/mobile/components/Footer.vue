<template>
  <div class="footer">
    <img class="footer_logo" :src="logoUrl" alt="" srcset="" />
    <div class="row1">
      抵制不良游戏&nbsp; 拒绝盗版游戏 &nbsp;注意自我保护&nbsp; 谨防受骗上当&nbsp; 适度游戏益脑&nbsp;
      沉迷游戏伤身&nbsp; 合理安排时间&nbsp; 享受健康生活
    </div>
    <div class="flex flex-column row2">
      <div>
        沪网文[2015]0859-239号 沪ICP备14051743号-4 沪B2-20170225 沪公安网备 沪公网安备
        31010402004352号
      </div>
      <div>
        上海游光网络科技有限公司 版权所有 上海市徐汇区古美路1582号C幢11楼 021-59788882
        游光隐私协议及儿童个人信息保护规则
      </div>
      <div>
        上海游光网络科技有限公司对其运营行为独立承担全部责任 适龄提示:适合18岁以上用户 纠纷处理
      </div>
    </div>

    <div class="flex flex-row row3 space-around flex-hc">
      <div class="row3_content flex flex-row" v-for="v in bottomMenu" :key="v.title">
        <img :src="v.imgUrl" alt="" srcset="" />
        <div class="right">{{ v.title }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

// HelloWorld class will be a Vue component
@Options({})
export default class Footer extends Vue {
  logoUrl = require("@/assets/web/home/logo.png");
  bottomMenu = [
    {
      title: "互联网文化经营单位",
      imgUrl: require("@/assets/web/home/wenhua.png"),
    },
    {
      title: "上海市市场监督管理局",
      imgUrl: require("@/assets/web/home/glj.png"),
    },
    {
      title: "上海互联网 举报中心",
      imgUrl: require("@/assets/web/home/emil.png"),
    },
    {
      title: "未成年家长 监护体系",
      imgUrl: require("@/assets/web/home/jh.png"),
    },
  ];
}
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  background-color: black;
  padding: 30px 0 30px 0;
  .footer_logo {
    margin: 0 auto;
    width: 280px;
    height: 80px;
    padding-top: 80px;
    padding-bottom: 50px;
    display: block;
  }
  .row1,
  .row2,
  .row3 {
    margin: 0 auto;
    width: 647px;
    font-size: 20px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #bcb9b9;
    text-align: center;
  }
  .row3_content {
    margin-top: 28px;
    width: 25%;
    img {
      width: 44px;
      height: 47px;
    }
    .right {
      width: 80px;
      font-size: 16px;
      font-weight: 400;
      color: #bcb9b9;
    }
  }
}
</style>
