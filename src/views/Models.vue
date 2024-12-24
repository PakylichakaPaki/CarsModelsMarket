<template>
  <div>
    <h1 class="models-title">Модели</h1>
    <CarsComponent />
  </div>
</template>
  
<script setup>
import CarsComponent from '@/components/CarsComponent.vue';

</script>
  
<style scoped> 
.models-title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: #fff;
}
.models-text {
  font-size: 1rem;
  text-align: center;
  color: #fff;
}
</style>
