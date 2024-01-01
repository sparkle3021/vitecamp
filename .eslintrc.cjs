module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
    // defineEmits: true,
    // document: true,
    // localStorage: true,
    // GLOBAL_VAR: true,
    // window: true,
    // defineProps: true,
    // defineExpose: true,
    // withDefaults: true,
  },
  extends: [
    './.eslintrc-auto-import.json',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended', // 添加 prettier 插件
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint', 'import'],
  rules: {
    '@typescript-eslint/no-explicit-any': ['off'],
    'no-console': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-unused-expressions': 'off',
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index', 'Index', '401', '403', '404', '500'], //需要忽略的组件名
      },
    ],
  },
}
