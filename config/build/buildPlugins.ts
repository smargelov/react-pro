import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack from 'webpack'
import { BuildOptions } from './types/config'

export default function buildPlugins({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
	return [
		// плагин для работы с html
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		// плагин для работы с прогресс баром
		new webpack.ProgressPlugin()
	]
}
