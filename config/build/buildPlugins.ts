import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import type { BuildOptions } from './types/config'

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
	const loaders: webpack.WebpackPluginInstance[] = [
		// плагин для работы с html
		new HtmlWebpackPlugin({
			template: paths.html
		}),
		// плагин для работы с прогресс-баром
		new webpack.ProgressPlugin(),
		// плагин для передачи переменных в код
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev)
		})
	]
	const devLoaders: webpack.WebpackPluginInstance[] = [
		// плагин для работы с горячей перезагрузкой
		new webpack.HotModuleReplacementPlugin(),
		new BundleAnalyzerPlugin({
			openAnalyzer: false
		})
	]
	// плагины для продакшена
	const prodLoaders: webpack.WebpackPluginInstance[] = [
		// плагин для создания отдельных css файлов
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:6].css',
			chunkFilename: 'css/[name].[contenthash:6].css'
		})
	]
	return isDev ? [...loaders, ...devLoaders] : [...loaders, ...prodLoaders]
}
