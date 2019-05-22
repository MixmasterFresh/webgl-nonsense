const path = require('path');

module.exports = {
  mode: "production",
  entry: './oceans.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'oceans.js'
  },
  module: {
    rules: [
      {
        test: /\.(txt|vert|hlsl|glsl|frag)$/i,
        use: 'raw-loader',
      },
    ],
  }
};
