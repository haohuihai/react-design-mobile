// .prettierrc.js
module.exports = {
  // 每行最大字符数，超过会换行
  printWidth: 100,

  // 使用 2 个空格缩进
  tabWidth: 2,

  // 不使用制表符，使用空格
  useTabs: false,

  // 语句末尾需要分号
  semi: true,

  // 使用单引号而不是双引号
  singleQuote: true,

  // 在 JSX 中使用单引号而不是双引号
  jsxSingleQuote: true,

  // 对象属性引号处理: "as-needed" - 仅在需要时加引号
  quoteProps: 'as-needed',

  // 在对象或数组最后一个元素后面加逗号
  // "es5" - 在ES5中有效的结尾逗号(对象、数组等)
  trailingComma: 'es5',

  // 对象字面量中的括号空格 { foo: bar }
  bracketSpacing: true,

  // 将多行 JSX 元素的 > 放在最后一行的末尾，而不是单独一行
  jsxBracketSameLine: false,

  // 箭头函数参数括号处理
  // "avoid" - 当只有一个参数时省略括号
  arrowParens: 'avoid',

  // 文件顶部插入特殊的 @format 标记
  insertPragma: false,

  // 缩进 JSX 属性
  // 注意: 这个选项在 Prettier 2.3.0 版本中已弃用
  // jsxAttributeClosingParen: true,

  // 行结束符
  endOfLine: 'lf',

  // HTML 空白敏感度
  htmlWhitespaceSensitivity: 'css',

  // Vue 文件 script 和 style 标签缩进
  vueIndentScriptAndStyle: false,

  // 格式化嵌入的代码
  embeddedLanguageFormatting: 'auto',
};