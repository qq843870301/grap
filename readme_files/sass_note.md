# 学习大数据 微信端 sass编写规范要求
> sass 参考文档（ [sass语法](https://www.w3cplus.com/sassguide/syntax.html)）
## 1、sass文件夹介绍

- sass->sassCore

  (1)sass库文件，不能修改

- sass->common文件夹

  公共样式文件夹（具体见文件设定）
  
- sass->pages文件夹

  (1)页面对应sass文件所在文件夹
  

## 2、sass公用文件设定

- sass->sassCore

  (1)sass库文件，不能修改

- sass->common文件夹

  (1)base:基础样式配置
  
  (2)common_style:公共样式配置
  
  (3)iconfont: 公共iconfont图标
  
  (4)mixin: mixin 函数配置
  
  (5)variable:基础变量配置
  
  (6)根据需要添加：比如button.scss等
  
- sass->pages文件夹

  (1)根据模块区分文件夹，模块分为：
  
    - 出题组卷（assemble_paper）
    
    - 个人中心（personal_center）
    
    - 考试/测试（exam）
    
    - 报告（report）
    
    - 公共页面（common）
    

  (2)尽量每个页面对应一个sass文件，可公用的除外
  
  (3)文件命名语义化
  

## 3、sass编写规范

- 页面命名与引用
 
  (1)命名规则：页面命名以**下划线**开头，与Css一样，  
  
  共用文件：_base.scss,   
  
  分类文件如：_button.scss，_form.scss……， 
   
  首页：_index.scss，其他页面依实际模块需求命名;
  
  (2)文件后缀：.scss
  
  (3)统一在**common.scss**中引用，引用无需有下划线，例如：
  `@import "pages/error_index";`
  
- 类名命名

  (1)类名命名语义化，命名规则参考 [css_keys.md](cssKeys.md)
  
  (2)命名以**wx**开头,英文+下划线组合命名，eg:wx_header
  
  (3)分层级样式命名：
  
    - 第一层级：wx-input,同级追加：wx-input--xx,第二层级：wx-input__inner,第三层级：wx-input__inner--xx
  
    - 最好不超过三个层级
    
    - 示例：
 
      ```
      /*第一层级以及第一层级的同级追加样式*/
      <div class="wx-input wx-input--xx">
      
        /*第二层级*/
        <span class="wx-input__inner">
        
          /* 第三层级*/
          <span class="wx-input__inner--xx"></span>
          
        </span>
        
      <div>
      
      ```
  
  
- 书写顺序

  (1)位置定位(position, top, right, z-index, display, float等) 
   
  (2)大小尺寸(width, height, padding, margin) 
   
  (3)文字类(font, line-height, letter-spacing, color- text-align等)
  
  (4)背景设置(background, border等)
  
  (5)其他相关类(animation, transition等)
   
  
- 多行式，每项定义写成一行,引用属性清晰，明朗

- 减少多级嵌套，尽量避免嵌套，建议不超过3级;

- z-index块级要求：
  
  (1)自己经手的z-index的值不能超过100(通用组的除外)；
  
  (2)页面中的元素内容的z-index不能超过10(popup poptip除外)，需要按照内容定义1 2 3 4不允许直接使用如1000，9999;
  
  (3) popup poptip的z-index需要按照内容使用 99以下，10以上的值（11,12,13，也可以小于10），不允许直接使用1000，9999之类大值
 
- 注释说明：

  (1)模块以及集中功能点添加注释，小模块适量添加注释 
  
  (2)单行注释：双斜杠`//`
  
  (3)多行注释：标准注释方式 `/* 注释内容*/`
  
- 其他

  (1)避免使用浏览器hack
  
  (2)url()中不使用引号，0后面不跟单位;
  
  (3)关于字体的定义：在设置字体时必须用英文名字，如：黑体(SimHei) 宋体(SimSun) 微软雅黑 (Microsoft Yahei，几个单词中间有空格组成的必须加引号) ;字体粗细尽量采用具体数值，粗体bold写为700，正常normal写为400;

  (4)font-size:PC端必须以px为单位，移动端尽量用em || rem转换;
  
  (5)图标：字体iconfont
  
  (6)尽量避免在页面标签上添加style
  
## 4、图片规范

  - 所有页面原素图片均放入 "asset/images" 文件夹中，相关测试业务图片需 ”demoimg“中;
  
  - 命名全部用小写英文字母 || 数字 || _ 的组合，其中不得包含汉字 || 空格 || 特殊字符；尽量用易懂的词汇, 便于团队其他成员理解; 另, 命名分头尾两部分, 用下划线隔开, 比如ad_banner01.gif || btn_submit.png || btn_search.png;

  - 应用sass+compass sprite技术集中icon背景图或图标, 减小页面http请求数量, 但注意, 请务必独立出单个Icon图标与小的背景图 并新建文件夹保存至 "asset/images" 目录下。

  - 注意图片格式，仅限：png || jpg || gif;
  
  - 在不影响正常视觉效果的情况下选择最小的图片格式与图片质量, 以缩小存储空间及减少加载时间，建议：网站用到的大的banner图片 移动端+WEB端  PC： ctrl+alt+shift+s 存储WEB格式里，品质选择 65-80 之间即可;
