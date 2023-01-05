module.exports = {
    entry: `./src/index.js`,
    output: {
        filename: './main.js'
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
            type: 'asset/resource',
          },
        ],
      },
};