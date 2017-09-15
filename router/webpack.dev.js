var webpack = require("webpack")
var HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
	entry: __dirname + "/src/main.js",
	output: {
		path : __dirname + "/dist",
		filename: "[name].js"
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader","css-loader"]
			},
			{
				test: /\.js$/,
				loader: "babel-loader"
			},
			{
				test: /\.html$/,
				loader: "html-loader"
			},
			{
				test: /\.vue$/,
				loader: "vue-loader"
			},
			{
				test: /\.jpg | .png$/,
				loader: "url-loader"
			},
		]
	},
	devServer: {
		port:8888,
		host: "localhost",
		hot:true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template:"./index.html"
		})
	],
	resolve: {
		alias: {
			"vue":"vue/dist/vue.js"
		}
	}
}