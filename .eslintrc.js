module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['react'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  globals: {
    graphql: false,
  },
  rules: {
    'react/prop-types': 'off',
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },  
    "import/resolver": {
      alias: [
        ["~components", "./src/components"],
        ["~pages", "./src/pages"]
      ]
    }
  }
}
