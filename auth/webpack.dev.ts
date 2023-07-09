import { Configuration } from "webpack";
import { merge } from "webpack-merge";
import { Configuration as devConfig } from "webpack-dev-server";

import commonConfig from "./webpack.common";

const devConfig: Configuration = {
  mode: "development",
  devServer: {
    port: 3001,
  },
  optimization: {
    splitChunks: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", 'postcss-loader'],
      },
    ],
  },
};

export default merge(commonConfig, devConfig);
