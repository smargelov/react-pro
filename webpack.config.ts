import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

const config: webpack.Configuration = {

	// режим сборки
	mode: 'development',
	// точка входа
	entry: path.resolve(__dirname, 'src', 'index.ts'),
	// точка выхода
	output: {
		filename: '[name].[contenthash:6].js',
		path: path.resolve(__dirname, 'build'),
		clean: true
	},
	plugins: [
		// плагин для работы с html
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html')
		}),
		// плагин для работы с прогресс баром
		new webpack.ProgressPlugin()
	],
	module: {
		// правила для обработки файлов (лоадеры)
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		// расширения файлов для импорта
		extensions: ['.tsx', '.ts', '.js']
	}
}
export default config
