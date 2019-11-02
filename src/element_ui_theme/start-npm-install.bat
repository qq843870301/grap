@echo off

::cd 2 rootPath
cd ../../

call npm i element-theme-default --registry=https://registry.npm.taobao.org
call npm i element-theme -g --registry=https://registry.npm.taobao.org

::cd 2 element_ui_theme
::cd src/element_ui_theme
call et -i src/element_ui_theme/element-variables.css
