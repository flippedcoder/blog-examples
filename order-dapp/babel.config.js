/** @type {import('@babel/core').TransformOptions} */
module.exports = {
  presets: ['@redwoodjs/core/config/babel-preset'],
  plugins: [
    ["@babel/plugin-proposal-private-methods", { "loose": true }],
    ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
  ]
}
