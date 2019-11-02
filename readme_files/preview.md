# preview 

> 图片预览组件使用


# 依赖 PhotoSwipe

- js
```javascript
  {
    VuePreview: require('vue-preview/src/plugins/preview/preview.vue')
  }
```
- html

```html
  <vue-preview ref="vuePreview"/>
```

- api
```javascript
  // 打开
  $refs.vuePreview.open(index, imageList)
  // 关闭
  $refs.vuePreview.close()
```
