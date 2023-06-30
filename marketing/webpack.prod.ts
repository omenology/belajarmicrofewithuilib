import { Configuration } from "webpack";
import { merge } from "webpack-merge";
import TerserPlugin from "terser-webpack-plugin";
import CompressionPlugin from "compression-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import commonConfig from "./webpack.common";

const prodConfig: Configuration = {
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [new CompressionPlugin(), new MiniCssExtractPlugin()],
};

export default merge(commonConfig, prodConfig);
