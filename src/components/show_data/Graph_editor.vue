<template>
     <div id="canvas" data-options="region:'center'"></div>
</template>
<script>
  import {common_getRouteHref} from '../../utils/vm_methods_common'
  import {catchAxiosError} from '../../utils/common'
  import types from '../../store/global/types'
  import {AUTH_API_BASE_URL} from '../../utils/constants'
  import {mapGetters} from 'vuex'
  
  import { Q } from '../../../static/js/graph/qunee-min.1.8.js' 
  // import topo from '../../../graph_data/topo.json'
  // import '../../utils/graph/libs/bootstrap/js/bootstrap.min.js' 
  // import '../../utils/graph/libs/layout.border.js'
  
  // import '../../utils/graph/DomSupport.js'
  // import '../../utils/graph/DragSupport.js'
  // import '../../utils/graph/FileSupport.js'
  // import '../../utils/graph/JSONSerializer.js'
  // import '../../utils/graph/ExportPane.js'
  // import '../../utils/graph/Toolbar.js'
  // import '../../utils/graph/ToolBox.js'
  // import '../../utils/graph/PopupMenu.js'
  // import '../../utils/graph/libs/bootstrap-colorpicker/js/bootstrap-colorpicker.min.js'
  // import '../../utils/graph/PropertyPane.js'
  // import {graphEditor} from '../../utils/graph/graph.editor.js'
  // import {graphs} from '../../utils/graph/script/graphs.js'
  // import '../../utils/graph/script/SVGIcons.js'
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
      // vm.editorOnload()

    },
    methods:{
      common_getRouteHref,
      catchAxiosError,
      
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
        let graph = new Q.Graph("canvas");
        var datas = '{"nodes":[{"name": "A", "x": -100, "y": -50, "id": 1}, {"name": "B", "id": 2}], "edges": [{"name": "Edge", "from":1, "to":2}]}'
        var json = JSON.parse(datas);
        vm.translateToQuneeElements(json, graph);

        graph.ondblclick = function(evt){
          var node = evt.data;
          if(node){
              var newName = prompt("New Name:");
              if(newName){
              node.name = newName;
              }
          }
        }
       },

      translateToQuneeElements(json, graph){
          var map = {};
          if(json.nodes){
              Q.forEach(json.nodes, function(data){
                  var node = graph.createNode(data.name, data.x || 0, data.y || 0);
                  node.set("data", data);
                  map[data.id] = node;
              });
          }
          if(json.edges){
              Q.forEach(json.edges, function(data){
                  var from = map[data.from];
                  var to = map[data.to];
                  if(!from || !to){
                      return;
                  }
                  var edge = graph.createEdge(data.name, from, to);
                  edge.set("data", data);
              }, graph);
          }
      },

      // editorOnload(){
      //   let vm = this
      //     Q.registerImage('lamp', Q.Shapes.getShape(Q.Consts.SHAPE_CIRCLE, -8, -8, 16, 16));
          
      //      $('.editor-box').graphEditor({
      //           data: '../../../graph_data/topo2.json',
      //           //data: 'data',
      //           //saveService: 'save',
      //           images: [
      //               {name: 'Custom Images', images: graphs},
      //               {
      //                   name: 'Cisco图标',
      //                   root: '../../../graph_data/cisco/',
      //                   images: ['ATMSwitch.png', 'multilayerSwitch.png', 'workgroupSwitch.png', 'workgroupSwitchSubdued.png', '100BaseT_hub.png', 'cisco_hub.png', 'switch1100.png']
      //               },{
      //               name: '自定义图标',
      //               imageWidth: 30,
      //               imageHeight: 30,
      //               images: [{
      //                   image: 'lamp',
      //                   properties: {
      //                       name: 'Message'
      //                   },
      //                   styles: vm.createLampStyles('#F00')
      //               }, {
      //                   image: 'lamp',
      //                   properties: {
      //                       name: 'Message'
      //                   },
      //                   br: true,
      //                   styles: vm.createLampStyles('#FF0')
      //               }, {
      //                   image: 'lamp',
      //                   properties: {
      //                       name: 'Message'
      //                   },
      //                   styles: vm.createLampStyles('#0F0')
      //               }, {
      //                   image: 'lamp',
      //                   properties: {
      //                       name: 'Message'
      //                   },
      //                   styles: vm.createLampStyles('#0FF')
      //               }, {
      //                   image: 'lamp',
      //                   properties: {
      //                       name: 'Message'
      //                   },
      //                   styles: vm.createLampStyles('#00F')
      //               }, {
      //                   image: 'lamp',
      //                   properties: {
      //                       name: 'Message'
      //                   },
      //                   styles: vm.createLampStyles('#F0F')
      //               }]
      //           }],
      //           callback: function(editor){
      //               var graph = editor.graph;

      //               var defaultStyles = graph.styles = {};
      //               defaultStyles[Q.Styles.ARROW_TO] = false;

      //               graph.moveToCenter()

      //               var background = new GridBackground(graph);

      //               var currentCell = 10;

      //               function snapToGrid(x, y) {
      //                   var gap = currentCell;
      //                   x = Math.round(x / gap) * gap;
      //                   y = Math.round(y / gap) * gap;
      //                   return [x, y];
      //               }

      //               graph.interactionDispatcher.addListener(function (evt) {
      //                   if (evt.kind == Q.InteractionEvent.ELEMENT_MOVE_END) {
      //                       var datas = evt.datas;
      //                       datas.forEach(function (node) {
      //                           if (!(node instanceof Q.Node) || node instanceof Q.Group) {
      //                               return
      //                           }
      //                           var ps = snapToGrid(node.x, node.y);
      //                           node.setLocation(ps[0], ps[1]);
      //                       });
      //                       return;
      //                   }
      //                   if (evt.kind == Q.InteractionEvent.POINT_MOVE_END) {
      //                       var line = evt.data;
      //                       Q.log(evt.point);
      //                       var segment = evt.point.segment;
      //                       segment.points = snapToGrid(segment.points[0], segment.points[1]);
      //                       line.invalidate();
      //                       return;
      //                   }
      //                   if (evt.kind == Q.InteractionEvent.ELEMENT_CREATED) {
      //                       var node = evt.data;
      //                       if (!(node instanceof Q.Node)) {
      //                           return
      //                       }
      //                       var ps = snapToGrid(node.x, node.y);
      //                       node.setLocation(ps[0], ps[1]);
      //                       return;
      //                   }

      //               });
      //           }
      //       });
      // },

    },
   
  }
</script>

<style lang="css" >
  @import '../../utils/graph/libs/bootstrap/css/bootstrap.css'
</style>
<style lang='scss'>
  // @import '../../sass/graph_editor.scss'
</style>
