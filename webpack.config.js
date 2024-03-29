const path = require("path");
const nodeExternals = require("webpack-node-externals");
const NodemonWebpackPlugin = require("nodemon-webpack-plugin");

const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { NODE_ENV } = process.env;

const assetFormat = regex => ({
    test: regex,
    type: "asset/resource",
    generator: {
        publicPath: "",
        outputPath: "assets"
    }
});

module.exports = {
    entry: "./src/index.ts",
    mode: "production",
    watch: NODE_ENV === "development",
    target: "node20.5",
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.svg$/i,
                use: [
                    {
                        loader: "@svgr/webpack",
                        options: {
                            icon: true,
                            replaceAttrValues: { "#FFF": "currentColor" },
                            svgoConfig: {
                                plugins: ["removeDimensions"]
                            }
                        }
                    }
                ],
                exclude: /node_modules/
            },
            assetFormat(/\.jpg/i),
            assetFormat(/\.woff2/i),
            assetFormat(/\.png/i),
            {
                test: /\.vanilla\.css$/i, // Targets only CSS files generated by vanilla-extract
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: require.resolve("css-loader"),
                        options: {
                            url: false // Required as image imports should be handled via JS/TS import statements
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: "server.js",
        path: path.resolve(__dirname, "dist")
    },

    plugins: [
        new VanillaExtractPlugin(),
        new MiniCssExtractPlugin({ filename: "assets/main.css" }),
        new NodemonWebpackPlugin({
            script: "./dist/server.js"
        })
    ]
};
