const path = require("path"); // eslint-disable-line

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.css$/,
    use: [
      {
        loader: "postcss-loader",
        options: {
          config: {
            path: "./"
          }
        }
      }
    ],

    include: path.resolve(__dirname, "../")
  });
  return config;
};
