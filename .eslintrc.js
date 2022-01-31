module.exports = {
	env: {
		'es2020': true,
		'browser': true,
		'node': true
	},

	ignorePatterns: ['dist', 'node_modules', '*d.ts'],

	parser: 'vue-eslint-parser',

	parserOptions: {
		'parser': '@typescript-eslint/parser'
	},

	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'plugin:@typescript-eslint/recommended',
		'@vue/typescript/recommended'
	],

  rules: {
		'@typescript-eslint/explicit-module-boundary-types': 'off',
    'vue/max-len': ['error', { code: 120 }],
    'vue/object-curly-newline': ['error', {
      minProperties: Infinity,
      multiline: true,
      consistent: true,
    }],
		'semi': ['error', 'always'],
		'quotes': ['error', 'single'],
    'linebreak-style': 'off',
  },
};
