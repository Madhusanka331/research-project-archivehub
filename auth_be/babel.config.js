module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { targets: { node: "current" } }],
  ],
  plugins: [["@babel/plugin-transform-runtime"]],
};
