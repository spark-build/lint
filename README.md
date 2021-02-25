# lint
对 [umi-fabric](https://github.com/umijs/fabric) 的一个补充包装，包含 prettier，eslint，stylelint 的配置文件合集

[![](https://img.shields.io/dub/l/vibe-d.svg?style=flat-square)](https://tldrlegal.com/license/mit-license)


## 安装

```bash
$ yarn add @spark-build/lint --registry=https://registry.npm.taobao.org
```

## 使用方式
一键创建 prettier，eslint，stylelint 配置文件
```bash
yarn create-lint-config
```

`.eslintrc.js`

```js
module.exports = require('@spark-build/lint').default.defineESLint({
  // 对 eslint 的相关配置进行合并、覆盖
  globals: {
    // ....
  },
});
```

`.prettierrc.js`

```js

module.exports = require('@spark-build/lint').default.definePrettier();

```

`.stylelintrc.js`

```js
module.exports = require('@spark-build/lint').default.defineStyleLint({
  // 对 styleLint 的相关配置进行合并、覆盖
  ignoreFiles: [
    //...
  ],
});
```

在 `taro next` 中的 `.eslintrc.js`
```js
module.exports = require('@spark-build/lint').default.defineESLint({
  // 对 eslint 的相关配置进行合并、覆盖
  parser: '@typescript-eslint/parser',
  extends: ['taro/react'],
  rules: {
    'jsx-quotes': 'off',
  },
});
```


## 开源协议

[MIT](https://tldrlegal.com/license/mit-license)
