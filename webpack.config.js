// where is the entry? where is the output?

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    // console.log(env);
    return {
        entry : './src/app.js',
        output : {
            path : path.resolve(__dirname, 'public'),
            filename : 'bundle.js'
        },
        module : {
            rules : [
                {
                    loader : 'babel-loader',
                    test : /.js$/,
                    exclude : /node_modules/
                },
                {
                    // test : /.(css|scss)$/,
                    test : /\.s?css$/,
                    use : CSSExtract.extract({
                        use : [{
                            loader : 'css-loader',
                            options : {
                                sourceMap : true
                            }
                        }, {
                            loader : 'sass-loader',
                            options : {
                                sourceMap : true
                            }
                        }]
                    })
                    //     [
                    //     'style-loader',
                    //     'css-loader',
                    //     'sass-loader'
                    // ]
                }
            ]
        },
        plugins : [
            CSSExtract
        ],
        // devtool : isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devtool : isProduction ? 'source-map' : 'inline-source-map',
        devServer : {
            contentBase : path.resolve(__dirname, 'public'),
            historyApiFallback : true
        }
    }
};

//
// // path should be absolute.
// module.exports = {
//     entry : './src/app.js',
//     output : {
//         path : path.resolve(__dirname, 'public'),
//         filename : 'bundle.js'
//     },
//     module : {
//         rules : [
//             {
//                 loader : 'babel-loader',
//                 test : /.js$/,
//                 exclude : /node_modules/
//             },
//             {
//                 // test : /.(css|scss)$/,
//                 test : /\.s?css$/,
//                 use : [
//                     'style-loader',
//                     'css-loader',
//                     'sass-loader'
//                 ]
//             }
//         ]
//     },
//     devtool : 'cheap-module-eval-source-map',
//     devServer : {
//         contentBase : path.resolve(__dirname, 'public'),
//         historyApiFallback : true
//     }
// };

// loader