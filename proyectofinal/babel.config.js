module.exports = {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            node: "current",
          },
        },
      ],
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
    ],
    plugins: [
      "@babel/plugin-proposal-private-property-in-object",
      // Otros plugins que puedas necesitar
    ],
  };
  