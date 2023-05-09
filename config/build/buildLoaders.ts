import webpack from 'webpack'

export default function buildLoaders(): webpack.RuleSetRule[] {
	// лоадер для обработки TypeScript
	const typescriptLoader: webpack.RuleSetRule = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/
	}
	// правила для обработки файлов (лоадеры)
	return [
		typescriptLoader
	]
}
