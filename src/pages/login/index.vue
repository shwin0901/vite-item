<template>
  <div class="login-container">
    <el-card class="login-card">
      <el-form
        label-width="120px"
        :rules="rules"
        ref="ruleFormRef"
        :model="ruleForm"
      >
        <el-form-item label="账号" prop="account">
          <el-input class="login-input" v-model="ruleForm.account" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            class="login-input"
            type="password"
            show-password
            v-model="ruleForm.password"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit(ruleFormRef)">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const route = useRouter();
const ruleFormRef = ref();
const ruleForm = reactive({
  account: "",
  password: "",
});
const rules = reactive({
  account: [{ required: true, message: "请输入账号" }],
  password: [{ required: true, message: "请输入密码" }],
});

const handleSubmit = async (formRef) => {
  if (!formRef) return;
  await formRef.validate((valid) => {
    if (valid) {
      ElMessage({
        message: `账号：${ruleForm.account}, 密码：${ruleForm.password}`,
        type: "success",
      });
      localStorage.setItem('login', ruleForm.account)
      route.push("/");
    }
  });
};
</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100vh;
  background-color: cadetblue;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-card {
  width: 50%;
}
.login-input {
  width: 60%;
}
</style>