const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader'
            },{
				test: /\.scss$/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader?modules',
					'sass-loader'
				]
			},{
				test: /\.(png|jpg|gif|svg)$/,
				use: [{
						loader: 'file-loader',
						options: {}
					}
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: devMode ? '[name].css' : '[name].[hash].css',
			chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
		})
	],
	watch:true
}