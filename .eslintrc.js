module.exports = {
  root: true,
  extends: ['@react-native', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'react-native', 'import', 'react-hooks'],
  settings: {
    'import/ignore': ['node_modules/react-native/index\\.js$'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/no-unstable-nested-components': 'off',
    'react/jsx-sort-props': ['error', { shorthandFirst: true }],
    'import/no-extraneous-dependencies': ['off', { devDependencies: ['**/*.stories.tsx'] }],
    '@typescript-eslint/no-var-requires': 'off',
    'react/require-default-props': 'off',
    'react-native/no-inline-styles': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, caughtErrors: 'none', argsIgnorePattern: '^_' },
    ],
    'no-console': 'error',
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.ts', '.js', '.jsx'] }],
    'import/prefer-default-export': 'off',
    'react/jsx-key': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-bind': 'off',
    'import/no-named-as-default-member': 'off',
    'import/default': 'off',
    'react/display-name': 'off',
    'import/no-named-as-default': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroupsExcludedImportTypes: ['react'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@react-*',
            group: 'external',
            position: 'after',
          },
          {
            pattern: 'src/**',
            group: 'internal',
            position: 'before',
          },
        ],
        'newlines-between': 'always',
      },
    ],
  },
  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx'],
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['.eslintrc.js', 'babel.config.js', 'jest.config.js', 'metro.config.js', 'index.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
