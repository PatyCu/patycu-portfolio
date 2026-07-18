import pluginAstro from "eslint-plugin-astro"
import pluginReactHooks from "eslint-plugin-react-hooks"
import tseslint from "typescript-eslint"

const astroBaseConfig = pluginAstro.configs.recommended.find(({ name }) => name === "astro/base")

if (!astroBaseConfig?.languageOptions?.parser) {
    throw new Error("Unable to resolve the Astro ESLint parser")
}

export default [
    {
        ignores: [".astro/**", ".netlify/**", "dist/**", "node_modules/**"]
    },
    ...tseslint.configs.recommended,
    {
        files: ["**/*.{jsx,tsx}"],
        ...pluginReactHooks.configs.flat["recommended-latest"]
    },
    ...pluginAstro.configs.recommended,
    {
        files: ["*.astro", "**/*.astro"],
        languageOptions: {
            parser: astroBaseConfig.languageOptions.parser,
            parserOptions: {
                ...astroBaseConfig.languageOptions.parserOptions,
                parser: tseslint.parser
            }
        }
    }
]
