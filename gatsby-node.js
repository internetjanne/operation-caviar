const path = require("path");
const fs = require('fs');

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {

  if (stage === 'build-javascript' || stage === 'develop') {
    const config = getConfig()
    const miniCssExtractPlugin = config.plugins.find(
      plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
    )
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true
    }
    actions.replaceWebpackConfig(config)
  }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~components": path.resolve(__dirname, "src/components"),
        "~pages": path.resolve(__dirname, "src/pages")
      }
    }
  });
}

exports.createPages = ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: '/start',
    toPath: '/',
    isPermanent: true,
  })
}

exports.onPreInit = () => {
  if (process.argv[2] === "build") {
    fs.rmdirSync(path.join(__dirname, "docs"), { recursive: true })
    fs.renameSync(
      path.join(__dirname, "public"),
      path.join(__dirname, "public_dev")
    )
  }
}

exports.onPostBuild = () => {
  fs.renameSync(path.join(__dirname, "public"), path.join(__dirname, "docs"))
  fs.renameSync(
    path.join(__dirname, "public_dev"),
    path.join(__dirname, "public")
  )
}