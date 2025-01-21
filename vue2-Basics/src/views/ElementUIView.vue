<template>
  <div class="element-demo">
    <h2>Element UI 基础组件</h2>

    <!-- 1. Button 按钮 -->
    <div class="demo-section">
      <h3>1. Button 按钮</h3>
      <div class="demo-item">
        <el-button>默认按钮</el-button>

        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </div>
    </div>

    <!-- 2. Form 表单 -->
    <div class="demo-section">
      <h3>2. Form 表单</h3>
      <el-form :model="form" :rules="rules" ref="form" label-width="100px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 3. Table 表格 -->
    <div class="demo-section">
      <h3>3. Table 表格</h3>
      <el-table :data="tableData">
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="age" label="年龄"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row, scope.$index)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 4. Dialog 对话框 -->
    <div class="demo-section">
      <h3>4. Dialog 对话框</h3>
      <el-button type="primary" @click="dialogVisible = true"
        >打开对话框</el-button
      >
      <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
        <span>这是一段对话框的内容</span>
        <span slot="footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确定</el-button
          >
        </span>
      </el-dialog>
    </div>

    <!-- 5. Message 消息提示 -->
    <div class="demo-section">
      <h3>5. Message 消息提示</h3>
      <el-button @click="showMessage('info')">消息</el-button>
      <el-button @click="showMessage('success')">成功</el-button>
      <el-button @click="showMessage('warning')">警告</el-button>
      <el-button @click="showMessage('error')">错误</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ElementUIView",
  data() {
    return {
      // 表单数据
      form: {
        username: "",
        password: "",
      },
      // 表单验证规则
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      // 表格数据
      tableData: [
        { id: 1, name: "张三", age: 25, address: "北京市" },
        { id: 2, name: "李四", age: 30, address: "上海市" },
        { id: 3, name: "王五", age: 35, address: "广州市" },
      ],
      // 对话框显示状态
      dialogVisible: false,
    };
  },
  methods: {
    // 表单提交
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$message.success("提交成功");
        }
      });
    },
    // 表单重置
    resetForm() {
      this.$refs.form.resetFields();
    },
    // 表格编辑
    handleEdit(row) {
      this.$message.info(`编辑: ${row.name}`);
    },
    // 软删除：移动数据到deletedData数组
    handleDelete(row, index) {
      this.$confirm("确认删除该记录?", "提示", {
        type: "warning",
      })
        .then(() => {
          // 从tableData中移除
          this.tableData.splice(index, 1);
          this.$message.success(`${row.name} 已删除`);
        })
        .catch(() => {
          this.$message.info("已取消删除");
        });
    },
    // 消息提示
    showMessage(type) {
      const messages = {
        info: "这是一条消息提示",
        success: "这是一条成功提示",
        warning: "这是一条警告提示",
        error: "这是一条错误提示",
      };
      this.$message[type](messages[type]);
    },
  },
};
</script>

<style scoped>
.element-demo {
  padding: 20px;
}

.demo-section {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 4px;
}

.demo-item {
  margin: 10px 0;
}

.el-button {
  margin: 5px;
}

.el-form {
  max-width: 500px;
}
</style>
