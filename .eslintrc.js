module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['react-app', 'airbnb'],
  settings: {
    'import/resolver': {
      alias: [
        ['@components', './src/components'],
      ],
    },
  },
  rules: {
    'import/prefer-default-export': 'off',
    'react/forbid-prop-types': 'off',
    'jsx-props-no-spreading': 'off',
  },
};
