import pluginAstro from "eslint-plugin-astro"
import pluginReactHooks from "eslint-plugin-react-hooks"
import tseslint from "typescript-eslint"

export default [
    {
        ignores: [".astro/**", ".netlify/**", "dist/**", "node_modules/**"]
    },
    ...tseslint.configs.recommended,
    {
        files: ["**/*.{jsx,tsx}"],
        ...pluginReactHooks.configs.flat["recommended-latest"]
    },
    ...pluginAstro.configs.recommended
]
