import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack from 'webpack'
import { BuildConfig } from './types/config'

export default function buildPlugins({ paths }: BuildConfig): webpack.WebpackPluginInstance[] {
	return [
		// плагин для работы с html
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		// плагин для работы с прогресс баром
		new webpack.ProgressPlugin()
	]
}
