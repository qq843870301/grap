<template>
  <!-- 分页 -->
  <div class="block sd_pages">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="status.currentPage"
      :page-sizes="[10, 15, 20, 25]"
      :page-size="status.pageSize"
      layout="total,  prev, pager, next, jumper"
      :total="config.total">
    </el-pagination>
  </div>
</template>
<script>
  let DEFAULT_PAGE = 1
  let DEFAULT_PAGE_SIZE = 10
  export default{
    name: 'Pagination',
    props: ['showOfEmpty','value'],
    data () {
      const page = (this.value||{})
      return {
        // 分页状态
        status: {
          currentPage: page.currentPage||DEFAULT_PAGE,
          pageSize: page.pageSize||DEFAULT_PAGE_SIZE,
        },
        // 分页配置
        config: {
          total: 0
        }
      }
    },
    computed: {
      currentPage(){
        return this.status.currentPage
      },
      pageSize(){
        return this.status.pageSize
      },
    },
    methods: {
      triggerChange(){
        const {currentPage,pageSize}=this.status
        this.$emit('input',{currentPage,pageSize})
      },
      handleSizeChange(pageSize){
        this.status.pageSize = pageSize
        this.triggerChange()
      },
      handleCurrentChange(currentPage){
        this.status.currentPage = currentPage
        this.triggerChange()
      }
    },
    created(){
      let vm = this
      // 分页重置
      vm.$on('reset', function () {
        vm.status.currentPage = DEFAULT_PAGE
      })
      // 定位上次浏览位置
      vm.$on('resetPage', function () {
        vm.status.currentPage = vm.$_.toNumber(localStorage.getItem("key"))
      })
      // 分页加载完毕
      vm.$on('pageLoad', function ({page, next, last, count, totalElements,total}) {
        vm.config.total = count || totalElements||total
//        console.log('pageLoad:',count || totalElements)
      })

    }
  }
</script>