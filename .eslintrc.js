module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'standard-with-typescript',
		'eslint-config-prettier',
	],
	overrides: [
		{
			extends: ['plugin:@typescript-eslint/disable-type-checked'],
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}', './**/*.js', './**/*.ts', './*.tsx'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: { jsx: true },
	},
	plugins: ['react'],
	rules: {
		'no-unused-vars': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'react/prop-types': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/no-misused-promises': 'off',
		'@typescript-eslint/no-floating-promises': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off'
	},
}
