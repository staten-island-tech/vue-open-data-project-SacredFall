<template>
  <div>
    <div
      v-if="showModal"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div class="bg-gray-800 px-18 pb-36 pt-30 rounded-lg text-center shadow-lg">
        <div class="flex flex-col mb-6">
          <h1 class="text-3xl text-white">JOHN PORK</h1>
          <p class="text-white mt-4">+1 (718)-984-2820</p>
        </div>
        <img src="/johnPork.jpeg" alt="John Pork" class="w-24 h-24 rounded-full mx-auto mb-4" />
        <p class="mb-4 text-white">Do you accept the call?</p>
        <div class="flex justify-around space-x-4">
          <button
            @click="acceptCall"
            class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Accept
          </button>
          <button
            @click="declineCall"
            class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const audio = ref(null)
import { ref, onMounted } from 'vue'

const showModal = ref(false)

const acceptCall = () => {
  showModal.value = false
  audio.value.pause
  alert('Call accepted')
  showRandomModal()
}

const declineCall = () => {
  audio.value.pause
  showModal.value = false
  alert('John Pork will remember this.')
  showRandomModal()
}

const ringTone = () => {
  audio.value = new Audio('/ringing.mp3')
  audio.value.play()
}

const showRandomModal = () => {
  const randomTime = Math.floor(Math.random() * 10000) // Random time between 1 and 10 seconds
  setTimeout(() => {
    showModal.value = true
    ringTone()
  }, randomTime)
}

onMounted(() => {
  showRandomModal()
})
</script>

<style scoped></style>
