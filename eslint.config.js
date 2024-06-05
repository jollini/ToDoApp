import pluginVue from "eslint-plugin-vue"

export default [
  ...pluginVue.configs["flat/recommended"],
  {
    rules: {
      "prefer-const": "error",
      "vue/singleline-html-element-content-newline": "off",
      "vue/component-name-in-template-casing": [
        "error",
        "PascalCase",
        { registeredComponentsOnly: false, ignores: ["/^swiper-/"] },
      ],
    },
  },
]
