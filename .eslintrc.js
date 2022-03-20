module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
    },
    "parserOptions": {
        "ecmaVersion": "latest",
    },
    "rules": {
        indent: ["error", 4, {
            SwitchCase: 1,
        } ],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double" ],
        semi: ["error", "never" ],
        "comma-dangle": ["warn", "always-multiline"],
        "no-multiple-empty-lines": ["warn", { max: 2 }],
    },
}
