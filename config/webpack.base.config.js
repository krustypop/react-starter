const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('vendor.css');
const extractSASS = new ExtractTextPlugin('[name].[hash].css');
const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

// module.exports = (env) => {
//     console.log(env);
    hydrateEnvironmentConf = (env) => {
        
        const environmentsPath = path.resolve(__dirname, '..', 'src', 'environments');

        let localEnvConf = {};
        if (env === 'development') {
            localEnvConf = dotenv.config({path:`${environmentsPath}/.env.local`}).parsed;
        }
        const currentEnvConf = dotenv.config({path: `${environmentsPath}/.env.${env}`}).parsed;
        const globalEnvConf = dotenv.config().parsed;

        const conf = { ...globalEnvConf, ...currentEnvConf, ...localEnvConf }

        const envKeys = Object.keys(conf).reduce((prev, next) => {
            prev[`process.env.${next}`] = JSON.stringify(conf[next]);
            return prev;
        }, {});

        return new webpack.DefinePlugin(envKeys);
    }
    
//     return {
//         entry: path.resolve(__dirname, '../src/app/index.tsx'), // webpack entry point. Module to start building dependency graph
//         output: {
//             path: path.resolve(__dirname, '..', 'dist'), // Folder to store generated bundle
//             filename: 'bundle.[hash].js', // Name of generated bundle after build
//         },
//         devtool: "source-map",
//         resolve: {
//             // Add '.ts' and '.tsx' as resolvable extensions.
//             extensions: [".ts", ".tsx", ".js", ".json"],
//             alias: {
//                 '@styles': path.resolve(__dirname, '..', 'src/styles/'),
//                 '@assets': path.resolve(__dirname, '..', 'src/public/assets/')
//             }
//         },
//         module: { // where we defined file patterns and their loaders
//             rules: [{
//                     test: /\.js$/,
//                     exclude: /node_modules/,
//                     use: {
//                         loader: 'babel-loader'
//                     }
//                 },
//                 {
//                     test: /\.tsx?$/,
//                     use: {
//                         loader: 'ts-loader'
//                     }
//                 },
//                 {
//                     test: /\.css$/,
//                     use: extractCSS.extract({
//                         use: [{
//                             loader: 'css-loader',
//                             query: {
//                                 modules: false,
//                                 // localIdentName: '[name]__[local]___[hash:base64:5]'
//                             }
//                         }]
//                     })
//                 },
//                 {
//                     test: /\.scss$/,
//                     use: extractSASS.extract({
//                         use: [{
//                                 loader: 'css-loader',
//                                 query: {
//                                     modules: false,
//                                     sourceMap: true,
//                                     importLoaders: 2,
//                                     // localIdentName: '[name]__[local]___[hash:base64:5]'
//                                 }
//                             },
//                             {
//                                 loader: 'sass-loader',
//                                 options: {
//                                     includePaths: [
//                                         path.resolve(__dirname, '..', 'src/styles/'),
//                                         path.resolve(__dirname, '..', 'src/app/components/')
//                                     ]
//                                 }
//                             }
//                         ]
//                     })
//                 },
//             ]
//         },
//         plugins: [ // Array of plugins to apply to build chunk
//             new HtmlWebpackPlugin({
//                 template: './src/public/index.html',
//                 filename: './index.html'
//             }),
//             extractCSS,
//             extractSASS,
//             hydrateEnvironmentConf(env.NODE_ENV)
//         ],
//         devServer: { // configuration for webpack-dev-server
//             contentBase: path.resolve(__dirname, '..', 'src/public'), //source of static assets
//             port: 7700, // port to run dev-server
//         }
//     }
// };
module.exports = {
    
        entry: path.resolve(__dirname, '../src/app/index.tsx'), // webpack entry point. Module to start building dependency graph
        output: {
            path: path.resolve(__dirname, '..', 'dist'), // Folder to store generated bundle
            filename: 'bundle.[hash].js', // Name of generated bundle after build
        },
        devtool: "source-map",
        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".tsx", ".js", ".json"],
            alias: {
                '@styles': path.resolve(__dirname, '..', 'src/styles/'),
                '@assets': path.resolve(__dirname, '..', 'src/public/assets/')
            }
        },
        module: { // where we defined file patterns and their loaders
            rules: [{
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.tsx?$/,
                    use: {
                        loader: 'ts-loader'
                    }
                },
                {
                    test: /\.css$/,
                    use: extractCSS.extract({
                        use: [{
                            loader: 'css-loader',
                            query: {
                                modules: false,
                                // localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        }]
                    })
                },
                {
                    test: /\.scss$/,
                    use: extractSASS.extract({
                        use: [{
                                loader: 'css-loader',
                                query: {
                                    modules: false,
                                    sourceMap: true,
                                    importLoaders: 2,
                                    // localIdentName: '[name]__[local]___[hash:base64:5]'
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    includePaths: [
                                        path.resolve(__dirname, '..', 'src/styles/'),
                                        path.resolve(__dirname, '..', 'src/app/components/')
                                    ]
                                }
                            }
                        ]
                    })
                },
            ]
        },
        plugins: [ // Array of plugins to apply to build chunk
            new HtmlWebpackPlugin({
                template: './src/public/index.html',
                filename: './index.html'
            }),
            extractCSS,
            extractSASS,
            hydrateEnvironmentConf(process.env.NODE_ENV)
        ],
        devServer: { // configuration for webpack-dev-server
            contentBase: path.resolve(__dirname, '..', 'src/public'), //source of static assets
            port: 7700, // port to run dev-server
        }
}
