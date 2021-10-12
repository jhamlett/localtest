import path from 'path'
let env = process.env.NODE_ENV === 'production'
  ? { mode: 'production', watch: false }
  : { mode: 'development', watch: true }

console.log("ENV", env)

let webpackConfig = {
  mode: env.mode,
  watch: env.watch,
  entry: './scripts/index.js',
  output: {
    filename: './js/main.js',
    path: path.resolve(__dirname, '../src')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ],
  },
  resolve: {
    extensions: [".json", ".js", ".jsx"],
  },
}


module.exports = { webpackConfig }