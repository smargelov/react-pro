import webpack from 'webpack'

export default function buildLoaders(): webpack.RuleSetRule[] {
	// лоадер для обработки TypeScript
	const typescriptLoader: webpack.RuleSetRule = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/
	}
	const sassLoader: webpack.RuleSetRule = {
		test: /\.s[ac]ss$/i,
		use: [
			// Creates `style` nodes from JS strings
			'style-loader',
			// Translates CSS into CommonJS
			'css-loader',
			// Compiles Sass to CSS
			'sass-loader'
		]
	}
	// правила для обработки файлов (лоадеры)
	return [
		typescriptLoader,
		sassLoader
	]
}
