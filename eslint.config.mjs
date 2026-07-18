import pluginAstro from "eslint-plugin-astro"
import tseslint from "typescript-eslint"

export default [
    {
        ignores: [".astro/**", ".netlify/**", "dist/**", "node_modules/**"]
    },
    ...tseslint.configs.recommended,
    ...pluginAstro.configs.recommended
]
