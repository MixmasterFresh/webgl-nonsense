const path = require('path');

module.exports = {
  mode: "production",
  entry: './spinning_cube.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'spinning_cube.js'
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
