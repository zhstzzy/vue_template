<template>
  <div>
    <div>{{ msg }}</div>
    <el-button @click="msg++">加加</el-button>

  </div>
</template>

<script lang="ts" setup>
const msg = ref(1);

</script>

<style scoped>

</style>