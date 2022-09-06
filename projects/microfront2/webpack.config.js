const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "microfront2",

  exposes: {
    "./Component": "./projects/microfront2/src/app/app.component.ts",
    "./Module": "./projects/microfront2/src/app/main/main.module.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
