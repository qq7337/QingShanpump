<template>
  <el-tree style="max-width: 600px" :data="data" :props="defaultProps" @node-click="handleNodeClick"
    class="custom-tree" />
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleNodeClick = (data) => {
  switch (data.label) {
    case '我的帖子':
      router.push('/postdetail')
      break
    case '创建帖子':
      // 可以添加其他路由跳转
      router.push('/createpost')
      break
    case '随机推荐':
      // router.push('/random')
      break
    case '主页':
      router.push('/community')
      break
    default:
      console.log(data)
  }
}

const data = [
  {
    label: '主页',
  },
  {
    label: '帖子操作',
    children: [
      {
        label: '我的帖子',
      },
      {
        label: '创建帖子',
      },
      {
        label: '随机推荐',
      }
    ],
  },
]

const defaultProps = {
  children: 'children',
  label: 'label',
}
</script>

<style>
/* 全局样式 */
.custom-tree {
  font-size: 16px;
  color: #333;
  font-weight: 600;
  background-color: #ffffff;
  /* border: 1px solid #e4e7ed; */
  border-radius: 8px;
  padding: 10px;
}

.custom-tree .el-tree-node__content {
  height: 40px !important;
  line-height: 40px !important;
  margin-bottom: 5px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.custom-tree .el-tree-node__content:hover {
  background-color: #ffffff !important;
}

.custom-tree .el-tree-node__expand-icon {
  font-size: 16px !important;
  color: #666 !important;
}

.custom-tree .el-tree-node__expand-icon.is-leaf {
  color: transparent !important;
}

.custom-tree .el-tree-node.is-current>.el-tree-node__content {
  background-color: #b3e5fc !important;
  color: #1890ff !important;
}
</style>
