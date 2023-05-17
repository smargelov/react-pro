import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BuildOptions } from './types/config'

export default function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
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
		new ReactRefreshWebpackPlugin({ overlay: false }),
		new webpack.HotModuleReplacementPlugin()
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
