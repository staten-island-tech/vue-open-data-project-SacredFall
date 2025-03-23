<template>
  <div class="flex justify-center items-center h-screen">
    <div @click="handleClick" class="bg-red-400 p-16">
      <h1>VON</h1>
      <div v-if="isPlaying" class="fixed inset-0 bg-black flex justify-center items-center z-50">
        <img src="/kingVonStare.gif" alt="Playing GIF" class="max-w-full max-h-full" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isPlaying = ref(false)

const handleClick = () => {
  isPlaying.value = true
  const audio = new Audio('/von.mp3')
  audio.play().catch((error) => {
    console.error('Error playing audio:', error)
  })
  requestFullScreen()
}

const requestFullScreen = () => {
  const element = document.documentElement
  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if (element.mozRequestFullScreen) {
    // Firefox
    element.mozRequestFullScreen()
  } else if (element.webkitRequestFullscreen) {
    // Chrome, Safari and Opera
    element.webkitRequestFullscreen()
  } else if (element.msRequestFullscreen) {
    // IE/Edge
    element.msRequestFullscreen()
  }
}
</script>

<style scoped></style>
