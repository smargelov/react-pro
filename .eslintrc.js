module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'plugin:react/recommended',
		'airbnb'
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: [
		'react',
		'@typescript-eslint'
	],
	rules: {
		semi: ['error', 'never'],
		indent: ['error', 'tab'],
		'no-tabs': 'off',
		'comma-dangle': ['error', 'never'],
		'import/extensions': 'off',
		'react/jsx-indent': ['error', 'tab'],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.tsx'] }],
		'react/jsx-indent-props': ['error', 'tab'],
		'import/prefer-default-export': 'off',
		'import/no-unresolved': 'off',
		'react/require-default-props': 'off',
		'template-curly-spacing': ['error', 'never'],
		'react/jsx-props-no-spreading': 'warn',
		'react/function-component-definition': 'off',
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': ['error'],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'no-underscore-dangle': 'off',
		'max-len': ['error', { code: 120 }],
		'import/no-extraneous-dependencies': 'off'
	},
	globals: {
		__IS_DEV__: true
	}
}
