let webpack = require("webpack");


module.exports = {
    target: "web",
    entry: [
        "./src/index.js"
        ],
    output: {
        path: __dirname + 'dist',
        publicPath: '/',
        filename: "bundle.js"
    },
    plugins: [new HtmlWebpackPlugin({
        template: "index.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        rules: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.(js|jsx)$/, 
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                      presets: ["react", "env"]
                    }
                  }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {}
                  }
                ]
            },
            {
                test: /\.(eot|ttf)$/,
                loader: "file-loader",
            },
           
        ]
    },
    resolve: {
        modules: [
            path.resolve("./public"),
            path.resolve("./src"),
            path.resolve("./node_modules")
        ],
        extensions: [".js", ".jsx"]
    },
    devServer: {
        watchOptions: {
        // Needed for Windows Subsystem for Linux dev environment:
            poll: true
        },
        contentBase: './build'
    },
    devtool: "source-map",
    node: {
        child_process : "empty",
        fs: "empty"
    }
};
