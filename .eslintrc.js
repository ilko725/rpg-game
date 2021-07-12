module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['airbnb-base'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        //'quotes': 'off', //delete later
        // 'no-unused-vars': 'off', //delete later
        // 'no-restricted-syntax': 'off', //delete later
        // 'guard-for-in': 'off', //delete later
        // 'prefer-const': 'off', //delete later
        // 'object-shorthand': 'off', //delete later
        // 'object-curly-newline': 'off', //delete later
        'max-len': ['error', { code: 120, comments: 140 }],
        'object-curly-newline': ["error", { "multiline": true, "minProperties": 10 }]
    },
};