import { BuildOptions } from './types/config'
import webpack from 'webpack'
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
			rules: buildLoaders()
		},
		resolve: buildResolvers(),
		// настройки сервера разработки (source maps и т.д.)
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined
	}
}