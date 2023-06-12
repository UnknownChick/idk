import { defineConfig } from "vite";
import sass from 'sass';
import autoprefixer from 'autoprefixer';

const themeName = 'custom-theme';

export default defineConfig({
	build: {
		outDir: `web/app/themes/${themeName}/dist`,
		rollupOptions: {
			input: {
				main:`web/app/themes/${themeName}/assets/js/import.js`,
			},
			output: {
				entryFileNames: '[name].js',
				assetFileName: '[name].[ext]',
			},
		},
		assetsDir: '.',	
	},
	css: {
		rollupOptions: {
			output: {
				entryFileNames: '[name].css',
			},
		},
		preprocessorOptions: {
			sass: {
				implementation: sass,
				sassOptions: {
					includePaths: ['./node_modules'],
				},
			},
		},
		postcss: {
			plugins: [autoprefixer],
		},
	},
});