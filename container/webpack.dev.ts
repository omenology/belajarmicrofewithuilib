import { Configuration, container } from "webpack";
import { merge } from "webpack-merge";
import { Configuration as devConfig } from "webpack-dev-server";

import commonConfig from "./webpack.common";

const { ModuleFederationPlugin } = container;

const devConfig: Configuration = {
  mode: "development",
  devServer: {
    port: 3000,
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
      name: "container",
      remotes: {
        marketing: "marketing@http://localhost:3002/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
};

export default merge(commonConfig, devConfig);
