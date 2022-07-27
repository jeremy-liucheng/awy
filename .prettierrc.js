module.exports = {
  tabWidth: 2,
  printWidth: 100,
  singleQuote: false,
  semi: true,
  trailingComma: "all",
  endOfLine: "auto",
  overrides: [
    {
      files: "*.json",
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: "avoid",
};
