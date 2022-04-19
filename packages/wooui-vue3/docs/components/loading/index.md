# 加载提示 Loading


基础用法
:::demo 
  ```vue
  <template>
    <w-button @click="changeLoadingStatus" v-loading="loadingStatus">点击</w-button>
  </template>
  <script setup>
    import {ref } from 'vue'
    let loadingStatus = ref(false)
    function changeLoadingStatus(){
      loadingStatus.value = true
      setTimeout(()=>{
        loadingStatus.value = false
      },2000)
    }
  </script>
  ```
:::