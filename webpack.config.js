const config = {
    entry: './src/Main.jsx',
    output: {
        path: __dirname,
        filename: 'main.js',
        libraryTarget: 'commonjs2',
    },
    devtool: false,
    externals: {
        application: 'application',
        uxp: 'uxp',
        scenegraph: 'scenegraph',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    plugins: ['@babel/plugin-transform-react-jsx'],
                }
            }
        ]
    },
};

module.exports = config;