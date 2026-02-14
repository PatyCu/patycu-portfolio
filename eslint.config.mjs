import pluginAstro from "eslint-plugin-astro"
import tseslint from "typescript-eslint"

export default [...tseslint.configs.recommended, ...pluginAstro.configs.recommended]
