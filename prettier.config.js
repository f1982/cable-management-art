/** @type {import('prettier').Options} */
module.exports = {
  singleQuote: true,
  semi: false,
  trailingComma: 'all',
  bracketSameLine: true,
  plugins: [
    'prettier-plugin-tailwindcss',
    '@trivago/prettier-plugin-sort-imports',
  ],
  importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
