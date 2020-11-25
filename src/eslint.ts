/* eslint-disable import/no-extraneous-dependencies */
const { strictEslint } = require('@umijs/fabric');

export default {
  ...strictEslint,
  extends: [...strictEslint.extends],
  plugins: [...strictEslint.plugins, 'prettier'],
  rules: {
    ...strictEslint.rules,
    "prettier/prettier": "error",
    'import/order': [
      1,
      {
        groups: ['builtin', 'external', 'internal', 'sibling'],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'no-unused-expressions': 0,
    'max-classes-per-file': 0,
    'class-methods-use-this': 0,
    'no-use-before-define': 0,
    'func-names': 0,
    'max-len': ['error', { code: 120, ignoreUrls: true }],
    'no-param-reassign': ['error', { props: false }],
    'import/no-unresolved': [2, { ignore: ['^@/', '^@@/', '^@app/', '^@app_/*'] }],
    'no-console': 0,
    'no-continue': 0,
    'no-restricted-syntax': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/class-name-casing': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    'no-nested-ternary': 0,

    // react v17
    // https://devblogs.microsoft.com/typescript/announcing-typescript-4-1/#react-17-jsx-factories
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    // 'space-before-function-paren': ['error', 'never'],
    // 'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
  }
};
