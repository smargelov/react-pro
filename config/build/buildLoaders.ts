import webpack from 'webpack'
import { BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {

	const svgLoader: webpack.RuleSetRule = {
		test: /\.svg$/,
		use: ['@svgr/webpack']
	}
	// лоадер для обработки TypeScript
	const typescriptLoader: webpack.RuleSetRule = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/
	}

	const fileLoader: webpack.RuleSetRule = {
		test: /\.(png|jpe?g|webp)$/i,
		use: [
			{
				loader: 'file-loader'
			}
		]
	}

	const sassLoader: webpack.RuleSetRule = {
		test: /\.s[ac]ss$/i,
		use: [
			// создавать ли css файлы или вставлять в head
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			// Translates CSS into CommonJS
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resourcePath: string) => resourcePath.endsWith('.module.sass'),
						localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:5]'
					},
					sourceMap: isDev
				}
			},
			// Compiles Sass to CSS
			'sass-loader'
		]
	}
	// правила для обработки файлов (лоадеры)
	return [
		fileLoader,
		svgLoader,
		typescriptLoader,
		sassLoader
	]
}
