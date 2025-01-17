const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const { ProvidePlugin } = require("webpack");
const { ESBuildMinifyPlugin } = require("esbuild-loader");

module.exports = {
  components: "./src/index.ts",
  outputPath: "./dist/playroom",
  title: "Bento 🍱",
  widths: [320, 425, 768, 1024, 1440, 2560],
  frameComponent: "./playroom/FrameComponent.tsx",
  webpackConfig: () => ({
    plugins: [
      new VanillaExtractPlugin(),
      new ProvidePlugin({
        React: "react",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "esbuild-loader",
          options: {
            loader: "tsx",
            target: "es2015",
          },
          exclude: /node_modules/,
        },
        {
          test: /\.svg$/,
          use: "file-loader",
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
          exclude: (modulePath) => {
            return /node_modules/.test(modulePath) && !modulePath.includes("@fontsource");
          },
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    optimization: {
      minimizer: [new ESBuildMinifyPlugin({ target: "es2015" })],
    },
  }),
};
