const config = {
  extends: ["kentcdodds", "kentcdodds/jest"],
  rules: {
    "max-len": "off",
    "import/max-dependencies": "off",
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always"
      }
    ]
  }
};

module.exports = config;
