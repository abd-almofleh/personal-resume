const EXCLUDED_FILES_PATTERN = '(?<!\\.svg|\\.css|\\.icon|\\.json)';
module.exports = {
  printWidth: 100,
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrder: [
    '^@core/(.*)$',
    `^src/.*${EXCLUDED_FILES_PATTERN}$`,
    '^(.*)/use(.*)$|^(.+)/hooks/(.+)$|^(.*)\\.hook$',
    // '^(.+)/utils/(.+)$|^(.*)\\.utils$', // can be enabled if the circular dependency issue fixed
    `^(\\.\\./).+${EXCLUDED_FILES_PATTERN}$`,
    `^(\\./).+${EXCLUDED_FILES_PATTERN}$`,
    '^(.*)\\.json$',
    '^(.*)\\.icon$',
    '^(.*)\\.svg$',
    '^(.*)\\.css$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    require.resolve('@trivago/prettier-plugin-sort-imports'),
    require.resolve('prettier-plugin-tailwindcss'),
    require.resolve('prettier-plugin-merge'),
  ],
};
