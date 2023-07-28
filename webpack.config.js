const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./client/src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/preset-env",
                        ["@babel/preset-react", { runtime: "automatic" }],
                    ],
                },
            },
            {
                test: /\.html$/,
                use: { loader: "html-loader" },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "./resources/imgs",
                            name: "[name].[ext]",
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
        fallback: {
            tty: false,
        },
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./client/public/index.html",
            filename: "./index.html",
        }),
    ],

    devServer: {
        host: "localhost",
        port: 8080,
        historyApiFallback: true,
        hot: true,
        static: {
            directory: path.resolve(__dirname, "dist"),
            // match the output 'publicPath'
            publicPath: "/",
        },
        proxy: {
            "/api/**": {
                target: "http://localhost:3000/",
                secure: false,
                onProxyRes: response => {
                    response.headers['access-control-allow-origin'] = 'http://localhost:8080';
                },
                changeOrigin: true // What does this do?
            },
        },
        headers: {
            "Access-Control-Allow-Origin": "http://localhost:8080/",
            "Access-Control-Allow-Credentials": 'true',
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
        },
        open: true,
    },
};
