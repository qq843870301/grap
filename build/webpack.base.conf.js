'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
var app_entry = require('./app-entry')
// let enteries = Object.assign({}, {
//     app: './src/main.js',
//   },
//   app_entry.reduce((acc, entry) => {
//     acc['app_' + entry.name] = entry.main
//     return acc
//   }, {}))

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
// const createLintingRule = () => ({
//   test: /\.(js|vue)$/,
//   loader: 'eslint-loader',
//   enforce: 'pre',
//   include: [resolve('src'), resolve('test')],
//   options: {
//     formatter: require('eslint-friendly-formatter'),
//     emitWarning: !config.dev.showEslintErrorsInOverlay
//   }
// })

let webpackConfig = {
  context: path.resolve(__dirname, '../'),
  entry: Object.assign({}, {
      app: './src/main.js',
    },
    app_entry.reduce((acc, entry) => {
      acc['app_' + entry.name] = entry.main
      return acc
    }, {})),
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'jquery': path.resolve(__dirname, '../static/js/jquery.v3.2.1.min.js'),
      'Q': path.resolve(__dirname, '../static/js/graph/qunee-min.1.8.js'),
      // '@u': resolve('src/app_bigdata_user'),
      'static': path.resolve(__dirname,'../static')
    }
  },
  externals: {
    'echarts': 'echarts',
    'lodash': '_',
    'Q':'Q',
  },
  module: {
    rules: [
      // ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },

      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'),resolve('src/app/app_bigdata_user'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.sass$/,
        loaders: ['style', 'css', 'scss','sass']
      },
      {
        test: /\.sass$/
      },
      {
        test: /\.less$/,
         loaders: ['style', 'css', 'less']
      },
      {
        test: /\.scss$/
      },

      {

        test: resolve('node_modules/mxgraph/javascript/mxClient.js'),
        loader: 'exports-loader?' + [
          'mxClient',
          // editor
          'mxEditor', 'mxDefaultToolbar', 'mxDefaultPopupMenu', 'mxDefaultKeyHandler',
          // handler
          'mxCellHighlight', 'mxCellMarker', 'mxCellTracker', 'mxConnectionHandler', 'mxConstraintHandler', 'mxEdgeHandler', 'mxEdgeSegmentHandler', 'mxElbowEdgeHandler', 'mxGraphHandler', 'mxHandle', 'mxKeyHandler', 'mxPanningHandler', 'mxPopupMenuHandler', 'mxRubberband', 'mxSelectionCellsHandler', 'mxTooltipHandler', 'mxVertexHandler',

          // io
          'mxCodec', 'mxCodecRegistry',

          // layout
          'mxCircleLayout', 'mxCompactTreeLayout', 'mxCompositeLayout', 'mxEdgeLabelLayout', 'mxFastOrganicLayout', 'mxGraphLayout', 'mxParallelEdgeLayout', 'mxPartitionLayout', 'mxRadialTreeLayout', 'mxStackLayout',
          'mxHierarchicalLayout', 'mxSwimlaneLayout',
          'mxGraphAbstractHierarchyCell', 'mxGraphHierarchyEdge', 'mxGraphHierarchyModel', 'mxGraphHierarchyNode', 'mxSwimlaneModel',
          'mxCoordinateAssignment', 'mxHierarchicalLayoutStage', 'mxMedianHybridCrossingReduction', 'mxMinimumCycleRemover', 'mxSwimlaneOrdering',

          // model
          'mxCell', 'mxCellPath', 'mxGeometry', 'mxGraphModel',


          // shapes
          'mxActor', 'mxArrow', 'mxArrowConnector', 'mxCloud', 'mxConnector', 'mxCylinder', 'mxDoubleEllipse', 'mxEllipse', 'mxHexagon', 'mxImageShape',
          'mxLabel', 'mxLine', 'mxMarker', 'mxPolyline', 'mxRectangleShape', 'mxRhombus', 'mxShape', 'mxStencil', 'mxStencilRegistry', 'mxSwimlane', 'mxText', 'mxTriangle',

          // util
          'mxAbstractCanvas2D', 'mxAnimation', 'mxAutoSaveManager', 'mxClipboard', 'mxConstants', 'mxDictionary', 'mxDivResizer', 'mxDragSource', 'mxEffects', 'mxEvent', 'mxEventObject', 'mxEventSource', 'mxForm', 'mxGuide', 'mxImage', 'mxImageBundle', 'mxImageExport', 'mxLog', 'mxMorphing', 'mxMouseEvent', 'mxObjectIdentity', 'mxPanningManager', 'mxPoint', 'mxPopupMenu', 'mxRectangle', 'mxResources', 'mxSvgCanvas2D', 'mxToolbar', 'mxUndoableEdit', 'mxUndoManager', 'mxUrlConverter', 'mxUtils', 'mxVmlCanvas2D', 'mxWindow', 'mxXmlCanvas2D', 'mxXmlRequest',

          // view
          'mxCellEditor', 'mxCellOverlay', 'mxCellRenderer', 'mxCellState', 'mxCellStatePreview', 'mxConnectionConstraint', 'mxEdgeStyle', 'mxGraph', 'mxGraphSelectionModel', 'mxGraphView', 'mxLayoutManager', 'mxMultiplicity', 'mxOutline', 'mxPerimeter', 'mxPrintPreview', 'mxStyleRegistry', 'mxStylesheet', 'mxSwimlaneManager', 'mxTemporaryCellStates'
        ].join(','),
    }

    ]
  },

  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}


module.exports = webpackConfig
