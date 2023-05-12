import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
	const loaders: webpack.WebpackPluginInstance[] = [
		// плагин для работы с html
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		// плагин для работы с прогресс-баром
		new webpack.ProgressPlugin()
	]
	// плагины для продакшена
	const prodLoaders: webpack.WebpackPluginInstance[] = [
		// плагин для создания отдельных css файлов
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:6].css',
			chunkFilename: 'css/[name].[contenthash:6].css'
		})
	]
	return isDev ? loaders : [...loaders, ...prodLoaders]
}
