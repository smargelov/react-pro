import webpack from 'webpack'
import buildWebpackConfig from './config/build/buildWebpackConfig'
import path from 'path'
import { BuildEnv, BuildPath } from './config/build/types/config'

export default (env: BuildEnv): webpack.Configuration => {
	const buildPaths: BuildPath = {
		entry: path.resolve(__dirname, 'src', 'index.ts'),
		build: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html')
	}

	const mode = env.mode || 'development'
	const PORT = env.port || 3000

	const isDev = mode === 'development'
	return  buildWebpackConfig({
		mode,
		paths: buildPaths,
		isDev,
		port: PORT
	})
}

