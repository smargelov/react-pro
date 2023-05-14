import type { Configuration as WebServerConfiguration } from 'webpack-dev-server'
import { BuildOptions } from './types/config'

export default function buildDevServer(options: BuildOptions): WebServerConfiguration {
	// настройки сервера разработки
	return {
		port: options.port,
		historyApiFallback: true,
		hot: true
	}
}
