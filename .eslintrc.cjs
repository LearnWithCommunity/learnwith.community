/*
 *  ESLint run control for learnwith.community project.
 *  Created On 08 February 2022
 */

module.exports = {
    parser: '@babel/eslint-parser',
    plugins: ['prettier', 'simple-import-sort', 'import'],
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:@stencil/recommended',
    ],
    env: {
        es2021: true,
        node: true,
        browser: true,
    },
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': 'error',
        'simple-import-sort/imports': 'error',
        'sort-imports': 'off',
        'import/order': 'off',
    },
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            plugins: [
                'prettier',
                'simple-import-sort',
                '@typescript-eslint',
                'import',
            ],
            extends: [
                'eslint:recommended',
                'plugin:prettier/recommended',
                'plugin:@typescript-eslint/recommended',
            ],
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
            },
        },
    ],
}
