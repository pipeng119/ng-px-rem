module.exports = {
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ["postcss-loader"],
      },
    ],
  },
};
