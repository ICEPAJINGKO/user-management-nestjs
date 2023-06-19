module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': 'off', // ไม่จัด Format ตาม prettier
    // 'indent': ['warn', 4],
    'semi': ['warn', 'always'],
    'semi-style': ['warn', 'last'],
    'semi-spacing': ['warn', {'before': false, 'after': true}],
    'block-spacing': 'warn',
    'arrow-spacing': 'warn',
    'comma-spacing': ['warn', { 'before': false, 'after': true }],
    'spaced-comment': ['warn', 'always'],
    'object-curly-spacing': ['warn', 'always'],
    'array-bracket-spacing': ['warn', 'never'],
  },
};
