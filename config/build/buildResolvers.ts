import { ResolveOptions } from 'webpack'
import { BuildOptions } from './types/config'

export default function buildResolvers({ paths }: BuildOptions): ResolveOptions {
	return {
		// расширения файлов для импорта
		extensions: ['.tsx', '.ts', '.js'],
		preferAbsolute: true,
		modules: [paths.src, 'node_modules'],
		mainFiles: ['index'],
		alias: {}
	}
}
