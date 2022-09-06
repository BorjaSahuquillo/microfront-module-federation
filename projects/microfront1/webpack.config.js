const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "microfront1",

  exposes: {
    "./Component": "./projects/microfront1/src/app/main/main.component.ts",
    "./Module": "./projects/microfront1/src/app/main/main.module.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
