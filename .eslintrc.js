module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'import',
    'jest',
    '@typescript-eslint',
  ],
  env: {
    node: true,
    browser: true,
    'jest/globals': true,
  },
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      }
    ],
    'camelcase': 'off',
    'guard-for-in': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'jest/no-done-callback': 'off',
    'max-classes-per-file': 'off',
    'max-len': 'off',
    'no-return-assign': 'off',
    'no-restricted-syntax': 'off',
    'no-use-before-define': 'off',
  }
};
