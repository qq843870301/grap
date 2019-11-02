# element_ui_theme 自定义主题

- 流程

  - [参考文档](http://element.eleme.io/#/zh-CN/component/custom-theme)
  
  - 安装工具
  
      任意目录执行 `npm i element-theme -g`
    
  - 安装默认主题
    
      项目根目录执行 `npm i element-theme-default`
  
  - 初始化变量文件
  
      项目根目录执行`et -i src/element_ui_theme/element-variables.css`
    
      > `et -i [可以自定义变量文件]`
    
  - 修改变量文件 `src/element_ui_theme/element-variables.css`
    
  - 编译主题
      `et -c src/element_ui_theme/element-variables.css -o src/element_ui_theme/theme`

- 快捷使用

  - 第一次配置先执行 `start-npm-install.bat`
  
  - 修改 `element-variables.css` 配置后，执行 `start-build.bat`
