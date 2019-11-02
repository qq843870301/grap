<template>
     <div id="editor" :style="{height:bodyHeight + 'px'}" data-options="region:'center'"></div>
</template>
<script>
  import {common_getRouteHref} from '../../utils/vm_methods_common'
  import {catchAxiosError} from '../../utils/common'
  import types from '../../store/global/types'
  import {AUTH_API_BASE_URL} from '../../utils/constants'
  import {mapGetters} from 'vuex'
  
  
  import '../../graph/libs/bootstrap/js/bootstrap.min.js' 
  import '../../graph/libs/layout.border.js'
  
  import '../../graph/domSupport.js'
  import '../../graph/dragSupport.js'
  import '../../graph/fileSupport.js'
  import '../../graph/jsonsSerializer.js'
  import '../../graph/Exportpane.js'
  import '../../graph/toolbar.js'
  import '../../graph/toolBox.js'
  import '../../graph/PopupMenu.js'
  import '../../graph/libs/bootstrap-colorpicker/js/bootstrap-colorpicker.min.js'
  import '../../graph/Propertypane.js'
  // import '../../graph/script/svgIcons.js'
  import {graphEditor} from '../../graph/graph.editor.js'
  import {graphs} from '../../graph/script/graphs.js'
  
  export default {
    name: 'loginHome',
    data(){
      return {
        bodyHeight:null,
        data:'这是区域展示页面',
        graphsDatas: null,
      }
    },
    
    mounted(){
      let vm = this
      vm.onDataCollected(vm.graphsDatas);
      
    },
    created(){
      let vm = this
      vm.getCurrentWindowHeight()

    },
    methods:{
      common_getRouteHref,
      catchAxiosError,

      getCurrentWindowHeight(){
            this.bodyHeight = $(window).height()
        },
      
      createLampStyles(color) {
          let styles = {};
          let lampGradient = new Q.Gradient(Q.Consts.GRADIENT_TYPE_RADIAL, [Q.toColor(0xAAFFFFFF), Q.toColor(0x33EEEEEE), Q.toColor(0x44888888), Q.toColor(0x33666666)],
              [0.1, 0.3, 0.7, 0.9], 0, -0.2, -0.2);
          styles[Q.Styles.SHAPE_FILL_COLOR] = color;
          styles[Q.Styles.SHAPE_STROKE] = 0.5;
          styles[Q.Styles.SHAPE_STROKE_STYLE] = '#CCC';
          styles[Q.Styles.LABEL_BACKGROUND_COLOR] = '#FF0';
          styles[Q.Styles.SHAPE_FILL_COLOR] = color;
          styles[Q.Styles.LABEL_SIZE] = {width: 100, height: 20};
          styles[Q.Styles.LABEL_PADDING] = 5;
          styles[Q.Styles.LABEL_OFFSET_Y] = -10;
          styles[Q.Styles.SHAPE_FILL_GRADIENT] = lampGradient;
          styles[Q.Styles.LABEL_POSITION] = Q.Position.CENTER_TOP;
          styles[Q.Styles.LABEL_ANCHOR_POSITION] = Q.Position.LEFT_BOTTOM;
          return styles;
      },

       onDataCollected(jsonObj){
        let vm = this
          $('#editor').graphEditor({
              saveService: 'http://122.204.161.218:9023/api/topo/f2283db2-8e6d-4c28-b3bb-0a1a40e295b2/',
              callback: function (editor) {
                  var graph = editor.graph;
                  graph.onclick = function(){
                      if(graph.PopupMenu){
                          graph.popupmenuOld = graph.PopupMenu;
                          graph.PopupMenu = null
                      }else{
                          graph.PopupMenu = graph.popupmenuOld;
                      }
                  }
              }
          });
       },

    

    },
   
  }
</script>

<style lang="css" >
  @import '../../graph/libs/bootstrap/css/bootstrap.css'
</style>

