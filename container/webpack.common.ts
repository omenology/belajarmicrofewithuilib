import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { Configuration } from "webpack";

const commonConfig: Configuration = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-typescript", "@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./public/index.html"),
    }),
  ],
};

export default commonConfig
