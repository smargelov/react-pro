import { BuildConfig } from './types/config'
import webpack from 'webpack'
import path from 'path'
import buildPlugins from './buildPlugins'
import buildLoaders from './buildLoaders'
import buildResolvers from './buildResolvers'

export default function buildWebpackConfig(options: BuildConfig): webpack.Configuration {
	const { paths, mode } = options
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
		resolve: buildResolvers()
	}
}
