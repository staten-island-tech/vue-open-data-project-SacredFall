<template>
  <div class="fixed flex justify-center py-4 w-full mb-12">
    <div class="flex flex-row space-x-12 bg-gray-700 shadow-lg p-3 rounded-2xl px-4">
      <i
        class="pi pi-home text-white text-2xl transition-transform transform hover:scale-125 hover:shadow-lg hover:bg-gray-500 p-3 rounded-md"
      ></i>
      <i
        class="pi pi-chart-line text-white text-2xl transition-transform transform hover:scale-125 hover:shadow-lg hover:bg-gray-500 p-3 rounded-md"
      ></i>
      <i
        class="pi pi-chart-pie text-white text-2xl transition-transform transform hover:scale-125 hover:shadow-lg hover:bg-gray-500 p-3 rounded-md"
      ></i>
      <i
        class="pi pi-chart-bar text-white text-2xl transition-transform transform hover:scale-125 hover:shadow-lg hover:bg-gray-500 p-3 rounded-md"
      ></i>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
