<template></template>
<script setup>
import { ref, onMounted } from 'vue'

const data = ref([])

onMounted(async () => {
  try {
    const response = await fetch('https://api.example.com/data')
    data.value = await response.json()
  } catch (error) {
    console.error(error)
  }
})
</script>
