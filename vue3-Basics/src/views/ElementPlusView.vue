<template>
  <div class="element-plus-demo">
    <h2>Element Plus 组件示例</h2>

    <!-- 1. 基础表单 -->
    <div class="demo-section">
      <h3>1. 表单组件</h3>
      <el-form ref="formRef" :model="form" :rules="rules" label-width="120px" class="demo-form">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" />
        </el-form-item>

        <el-form-item label="活动区域" prop="region">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </el-form-item>

        <el-form-item label="活动时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%" />
            </el-form-item>
          </el-col>
          <el-col :span="2" class="text-center">
            <span class="text-gray-500">-</span>
          </el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker v-model="form.date2" placeholder="选择时间" style="width: 100%" />
            </el-form-item>
          </el-col>
        </el-form-item>

        <el-form-item label="即时配送" prop="delivery">
          <el-switch v-model="form.delivery" />
        </el-form-item>

        <el-form-item label="活动性质" prop="type">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type" />
            <el-checkbox label="地推活动" name="type" />
            <el-checkbox label="线下主题活动" name="type" />
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="特殊资源" prop="resource">
          <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌商赞助" />
            <el-radio label="线下场地免费" />
          </el-radio-group>
        </el-form-item>

        <el-form-item label="活动形式" prop="desc">
          <el-input v-model="form.desc" type="textarea" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm(formRef)">
            立即创建
          </el-button>
          <el-button @click="resetForm(formRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 2. 表格和分页 -->
    <div class="demo-section">
      <h3>2. 表格和分页</h3>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180" />
        <el-table-column prop="name" label="姓名" width="180" />
        <el-table-column prop="address" label="地址" />
        <el-table-column fixed="right" label="操作" width="120">
          <template #default="scope">
            <el-button link type="primary" size="small" @click="handleClick(scope.row)">
              查看详情
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-container">
        <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 40]"
          layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
          @current-change="handleCurrentChange" />
      </div>
    </div>

    <!-- 3. 消息提示 -->
    <div class="demo-section">
      <h3>3. 消息提示</h3>
      <div class="button-group">
        <el-button @click="showMessage('info')">消息</el-button>
        <el-button type="success" @click="showMessage('success')">成功</el-button>
        <el-button type="warning" @click="showMessage('warning')">警告</el-button>
        <el-button type="danger" @click="showMessage('error')">错误</el-button>
      </div>
    </div>

    <!-- 4. 对话框 -->
    <div class="demo-section">
      <h3>4. 对话框</h3>
      <el-button type="primary" @click="dialogVisible = true">
        打开对话框
      </el-button>

      <el-dialog v-model="dialogVisible" title="提示" width="30%">
        <span>这是一段对话框的内容</span>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="dialogVisible = false">
              确认
            </el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'

// 表单相关
const formRef = ref()
const form = reactive({
  username: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
})

const rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
  ],
  region: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
  date1: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
  date2: [{ type: 'date', required: true, message: '请选择时间', trigger: 'change' }],
  type: [{ type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }],
  resource: [{ required: true, message: '请选择活动资源', trigger: 'change' }],
  desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
})

const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      ElMessage.success('提交成功！')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}

// 表格相关
const tableData = [
  {
    date: '2024-01-01',
    name: '张三',
    address: '北京市朝阳区'
  },
  {
    date: '2024-01-02',
    name: '李四',
    address: '上海市浦东新区'
  },
  {
    date: '2024-01-03',
    name: '王五',
    address: '广州市天河区'
  }
]

const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(50)

const handleSizeChange = (val) => {
  console.log(`每页 ${val} 条`)
}

const handleCurrentChange = (val) => {
  console.log(`当前页: ${val}`)
}

const handleClick = (row) => {
  ElMessage.info(`查看行数据：${JSON.stringify(row)}`)
}

// 消息提示
const showMessage = (type) => {
  ElMessage[type]('这是一条消息提示')
}

// 对话框
const dialogVisible = ref(false)
</script>

<style scoped>
.element-plus-demo {
  padding: 20px;
}

.demo-section {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 4px;
}

h3 {
  margin-top: 0;
  color: #409eff;
}

.demo-form {
  max-width: 600px;
}

.button-group {
  margin: 10px 0;
}

.button-group .el-button {
  margin-right: 10px;
}

.pagination-container {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
</style> 