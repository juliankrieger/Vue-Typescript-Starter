module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/typescript"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "indent": ["warn", "tab"],
  },
  overrides: [
  {
    files: ["*.vue"],
    rules: {
      "indent": "off",
      "vue/script-indent": ["warn", "tab"],
    }
  }
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};
