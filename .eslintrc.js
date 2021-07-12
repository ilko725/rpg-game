module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['airbnb-base'],
    parserOptions: {
        ecmaVersion: 12,
        // sourceType: 'module',
    },
    rules: {
        'quotes': 'off',
        'no-unused-vars': 'off',
        'no-restricted-syntax': 'off',
        'guard-for-in': 'off',
        'prefer-const': 'off',
        'object-shorthand': 'off',
        'object-curly-newline': 'off',
    },
};