# 加载提示 Loading


基础用法
:::demo 
  
  ```vue
  <template>
    <w-button @click="changeLoadingStatus">点击</w-button>
    <div 
      :z-index="100" 
      :backdrop="true"
      :view="{ top: '50%', left: '50%' }" 
      v-loading="loadingStatus"
      style="width: 100%"
    >
      <p>123</p>
      <p>321</p>
    </div>

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