/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

//  Taken from https://github.com/gatsbyjs/gatsby/discussions/31573

const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin")

const fixCssMinimizer = ({ actions, getConfig }) => {
  const config = getConfig()
  const minimizer = config?.optimization?.minimizer
  if (minimizer) {
    const indexOfCssMinimizerPlugin = minimizer.findIndex(
      plugin => plugin.constructor.name === CssMinimizerWebpackPlugin.name
    )
    if (indexOfCssMinimizerPlugin > -1) {
      const currentCssMinimizerPlugin = minimizer[indexOfCssMinimizerPlugin]

      minimizer[indexOfCssMinimizerPlugin] = new CssMinimizerWebpackPlugin({
        test: /\.css(\?.*)?$/i,
        warningsFilter: () => false,
        parallel: currentCssMinimizerPlugin.options.parallel,
        minimizerOptions: currentCssMinimizerPlugin.options.minimizerOptions,
      })

      actions.replaceWebpackConfig(config)
    }
  }
}

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  fixCssMinimizer({ actions, getConfig })
}
