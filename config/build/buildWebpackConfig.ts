import webpack from 'webpack'
import { BuildOptions } from './types/config'
import buildPlugins from './buildPlugins'
import buildLoaders from './buildLoaders'
import buildResolvers from './buildResolvers'
import buildDevServer from './buildDevServer'

export default function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const { paths, mode, isDev } = options
	return {
		// режим сборки
		mode,
		// точка входа
		entry: paths.entry,
		// точка выхода
		output: {
			filename: '[name].[contenthash:6].js',
			path: paths.build,
			clean: true
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options)
		},
		resolve: buildResolvers(options),
		// настройки сервера разработки (source maps и т.д.)
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined
	}
}
