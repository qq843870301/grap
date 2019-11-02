//多入口配置文件
module.exports = [
  {
    //微信大数据通知
    name: '/',
    main: './src/main.js',
    html_filename: 'index.html',
    html_template: 'index.html',
    build_index: 'index.html'
  },
  // {//大数据用户管理中心
  //   name: 'bigdata_user',
  //   main: './src/app_bigdata_user/main.js',
  //   html_filename: 'index_bigdata_user.html',
  //   html_template: 'index_bigdata_user.html',
  //   build_index: 'index_bigdata_user.html'
  // },
]
