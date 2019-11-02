<template>
	<div><iframe ref="showIframe"  frameborder=0 width="100%" height="800px" name="showHere" scrolling=auto src="../../../static/graph/index.html"></iframe></div>
</template>
<script>
	 export default{
 	name:'editorGraph',
 	data(){
 		return {
      vals:{},
 		}
 	},
 	mounted(){
 	},
 	created(){
    let vm = this
  },
  methods:{
     /*获取editor content latex 文本*/
    getFormulaVal(){
      let vm = this
      let kfe = vm.$refs.showIframe.contentWindow.kfe.kfe
      // console.log(kfe);
      let latex = clearTrim(kfe.execCommand('get.source'), 'g')
      vm.dialogVisible = false
      if(latex != '' && latex.indexOf('placeholder') < 0){
          vm.vals.val = '\\[' + latex + '\\]'
          vm.vals.index = vm.tagIndex
          vm.$bus.$emit('resultLatex', vm.vals)
      }else{
        vm.$message({
          message:'输入公式格式不正确，请重新输入',
          type:'warning'
        })
      }
      vm.$nextTick(() => {
        vm.common_refreshMathjax()
      })
    },

  },
 }
</script>
