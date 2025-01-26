<template>
  <div class="mx-auto w-full md:w-full lg:w-full">
    <div class="relative h-[40rem] overflow-hidden">
      <button
        @click="prevSlide"
        class="absolute left-2 top-1/2 z-10 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full"
      >
        <ChevronLeft class="h-6 w-6" />
      </button>
      <button
        @click="nextSlide"
        class="absolute right-2 top-1/2 z-10 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full"
      >
        <ChevronRight class="h-6 w-6" />
      </button>
      <button
        @click="togglePlayPause"
        class="absolute bottom-2 right-2 z-10 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full"
      >
        <component :is="isPlaying ? 'Pause' : 'Play'" class="h-6 w-6" />
      </button>
      <transition-group name="fade">
        <div
          v-for="(img, index) in images"
          :key="img"
          v-show="index === currentIndex"
          class="absolute inset-0"
        >
          <img :src="img" :alt="`Slide ${index + 1}`" class="h-full w-full" />
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-vue-next'

const images = [
  "/Cover.png",
  "https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY",
  "https://fastly.picsum.photos/id/18/2500/1667.jpg?hmac=JR0Z_jRs9rssQHZJ4b7xKF82kOj8-4Ackq75D_9Wmz8"
]

const currentIndex = ref(0)
const isPlaying = ref(true)
let intervalId = null

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}

const togglePlayPause = () => {
  isPlaying.value = !isPlaying.value
}

const startAutoPlay = () => {
  intervalId = setInterval(nextSlide, 3000) // Change image every 3 seconds
}

const stopAutoPlay = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

watch(isPlaying, (newValue) => {
  if (newValue) {
    startAutoPlay()
  } else {
    stopAutoPlay()
  }
})

onMounted(() => {
  if (isPlaying.value) {
    startAutoPlay()
  }
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
