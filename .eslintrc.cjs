module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb-typescript',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react-refresh', '@typescript-eslint', 'unused-imports', 'tailwindcss'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    "@typescript-eslint/no-explicit-any": "off",
    '@typescript-eslint/lines-between-class-members': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'ts', 'tsx'] }],
    'import/no-unresolved': [2, { caseSensitive: false }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        peerDependencies: true,
      },
    ],
    '@typescript-eslint/no-throw-literal': 'off',
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
   ]
  },
  overrides: [
    {
      files: ['src/**/**/*.tsx'],
      rules: {
        'import/no-unresolved': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': 'off',
        '@typescript-eslint/no-explicit-any':'off',
        'react/require-default-props': 'off',
        'no-undef': 'off',
        "@typescript-eslint/no-explicit-any": "off",
        'react/react-in-jsx-scope': 'off',

        'arrow-body-style': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
