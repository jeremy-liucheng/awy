<template>
  <div id="container"></div>
</template>
<script lang="ts">
import AMapLoader from "@amap/amap-jsapi-loader";

export default {
  props: ["centerXY"],
  emits: ["mapReady"],
  setup(props: any, ctx: any) {
    AMapLoader.load({
      key: "e9585af9d1bea5ed5933cc55e982e962", // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
      .then(AMap => {
        // 创建一个 Marker 实例：
        const map = new AMap.Map("container", {
          center: props.centerXY, //中心点坐标
          zoom: 17,
        });
        var marker = new AMap.Marker({
          position: [121.399374, 31.165361],
          offset: new AMap.Pixel(-13, -30),
        });
        // 将创建的点标记添加到已有的地图实例：
        marker.setMap(map);

        // 设置鼠标划过点标记显示的文字提示
        marker.setTitle("我是marker的title");

        // 设置label标签
        // label默认蓝框白底左上角显示，样式className为：amap-marker-label
        marker.setLabel({
          offset: new AMap.Pixel(-160, -100), //设置文本标注偏移量
          content: `
            <div class='info flex  flex-column'>
              <div class='map_title'>上海游光网络科技有限公司 </div>
              <div class='map_adress flex flex-bc'><span class='map_adress_mark'></span>上海市徐汇区古美路1582号C座11楼 </div>
              <div class='map_phone flex flex-bc'><span class='map_phone_mark'></span>012-59788882 </div>
            </div>
          `, //设置文本标注内容
          direction: "right", //设置文本标注方位
        });
      })
      .finally(() => {
        ctx.emit("mapReady");
      });
  },
};
</script>
