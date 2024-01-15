/** @type {import("prettier").Config} */
module.exports = {
    plugins: ["prettier-plugin-astro"],
    singleQuote: false,
    printWidth: 120,
    tabWidth: 4,
    arrowParens: "always",
    bracketSpacing: true,
    quoteProps: "consistent",
    bracketSameLine: false,
    jsxSingleQuote: false,
    semi: false,
    trailingComma: "none",
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro"
            }
        }
    ]
}
