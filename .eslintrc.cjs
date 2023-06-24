module.exports = {
    root: true,
    extends: ['standard', 'prettier', 'eslint:recommended'],
    globals: {
        IS_DEV: 'readonly'
    },
    env: { browser: true, es2020: true },
    rules: {
        indent: ['error', 4]
    },
    parserOptions: {
        ecmaVersion: 'latest'
    }
}
