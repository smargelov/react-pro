import { BuildOptions } from './types/config'
import type { Configuration as WebServerConfiguration } from 'webpack-dev-server'

export default function buildDevServer(options: BuildOptions): WebServerConfiguration {
	// настройки сервера разработки
	return {
		port: options.port
	}
}
