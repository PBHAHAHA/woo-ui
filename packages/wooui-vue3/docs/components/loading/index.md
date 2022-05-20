# 加载提示 Loading


基础用法
:::demo
  ```vue
  <template>
    <w-button @click="changeLoadingStatus">点击</w-button>
    <div 
      :z-index="100" 
      :view="{ top: '50%', left: '50%' }" 
      v-loading="loadingStatus"
    >
      <p>123</p>
      <p>321</p>
    </div>

  </template>
  <script setup>
    import {ref } from 'vue'
    let loadingStatus = ref(true)
    function changeLoadingStatus(){
      loadingStatus.value = true
      setTimeout(()=>{
        loadingStatus.value = false
      },2000)
    }
  </script>
  ```
:::