const rulesDirPlugin = require('eslint-plugin-rulesdir');
rulesDirPlugin.RULES_DIR = 'eslint-rules';

module.exports = {
    extends: 'airbnb',
    parser: 'babel-eslint',

    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module'
    },

    plugins: ['import-order', 'rulesdir', 'node'],

    rules: {
        'space-before-function-paren': 0,
        indent: [2, 4, { SwitchCase: 1 }],
        'brace-style': [2, 'stroustrup', { allowSingleLine: true }],
        'comma-dangle': [2, 'only-multiline'],
        'no-var': 0,
        'generator-star-spacing': [2, 'after'],
        'new-cap': 0, // because decorators
        'newline-before-return': 2,

        'react/jsx-indent-props': [2, 4],
        'react/jsx-no-bind': [
            2,
            {
                ignoreRefs: false,
                allowArrowFunctions: false,
                allowBind: false
            }
        ],
        'react/prefer-stateless-function': 0,
        'import-order/import-order': 2,

        // these are disabled for now but should be enabled soon
        'no-param-reassign': 0,
        'max-len': 0,
        'func-names': 0,
        'one-var': 0,
        'no-console': 1,
        'no-unused-vars': 1, // just warning for now
        'no-confusing-arrow': 0,

        // nice to have but not necessary atm
        'padded-blocks': 0,
        radix: 0,
        'guard-for-in': 0,
        'arrow-body-style': 0,
        'react/jsx-boolean-value': 0,
        'react/sort-comp': 0,

        // custom rules
        'rulesdir/mix-import-module-exports': 2,
        "node/no-deprecated-api": 2
    },

    globals: {
        __DEV__: true,
        page: true,
        browser: true,
        context: true,
        jestPuppeteer: true,
    },

    env: {
        es6: true,
        node: true,
        mocha: true,
        jest: true
    }
};
