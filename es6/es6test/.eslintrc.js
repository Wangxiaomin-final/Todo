module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "standard",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        'BigInt': true
    },
    "parserOptions": {
        "ecmaVersion": 2019
    },
    "rules": {
        "space-before-function-paren": 0,
        "indent": [2, 4],
        "no-multiple-empty-lines": [1, { "max": 2 }],
        "eol-last": 0,

    }
};
