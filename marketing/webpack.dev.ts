import { Configuration, container } from "webpack";
import { merge } from "webpack-merge";
import { Configuration as devConfig } from "webpack-dev-server";

import commonConfig from "./webpack.common";

const { ModuleFederationPlugin } = container;

const devConfig: Configuration = {
  mode: "development",
  output: {
    publicPath: "http://localhost:3002/",
  },
  devServer: {
    port: 3002,
    historyApiFallback: true,
  },
  optimization: {
    splitChunks: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap',
      },
      shared: ["react", "react-dom"],
    }),
  ],
};

export default merge(commonConfig, devConfig);
