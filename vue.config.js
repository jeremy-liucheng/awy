const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = defineConfig({
  pages: {
    mobile: {
      entry: "src/views/mobile/main.ts",
      template: "public/index.html",
    },
    web: {
      entry: "src/views/web/main.ts",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  filenameHashing: true,
  transpileDependencies: true,
  productionSourceMap: false,
  configureWebpack: config => {
    config.plugins.push(
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    );
    if (process.env.NODE_ENV === "production") {
      // config.plugins.push(
      //   new CompressionWebpackPlugin({
      //     test: /\.(js|css|json|html)(\?.*)?$/i, // 压缩文件格式
      //     filename: "[path][base].gz", // 压缩后的文件名
      //     algorithm: "gzip", // 使用gzip压缩
      //     // 只有大小大于该值的资源会被处理。单位是 bytes。默认值是 0。
      //     // threshold: 10240,
      //     minRatio: 0.8, // 压缩率小于1才会压缩
      //     deleteOriginalAssets: true, // 是否删除原资源
      //   })
      // );
      // 为生产环境修改配置...
      config.mode = "production";
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            compress: {
              warnings: false,
              drop_console: true, // console
              drop_debugger: true,
              pure_funcs: ["console.log"], // 移除console
            },
          },
        }),
      ];
      // 打包文件大小配置
      config["performance"] = {
        maxEntrypointSize: 1000000000,
        maxAssetSize: 3000000000,
      };
    }
    config.externals = {
      vue: "Vue",
      "vue-router": "VueRouter",
    };
  },

  // chainWebpack: (config) => {
  //   config.module
  //     .rule("images")
  //     .use("image-webpack-loader")
  //     .loader("image-webpack-loader")
  //     .options({ bypassOnDebug: true })
  //     .end();
  // },
});
