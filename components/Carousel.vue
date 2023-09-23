<template>
  <div class="mx-auto w-full md:w-1/2 lg:w-1/2">
    <div class="relative h-56 overflow-hidden md:h-[22rem]">
      <button @click="onSwipe('left')" class="absolute z-10 text-gray-300 h-56 md:h-[22rem] grid content-center">
        <i class="ri-arrow-left-s-line ri-xl"></i>
      </button>
      <button @click="onSwipe('right')" class="absolute z-10 text-gray-300 h-56 md:h-[22rem] grid content-center right-0">
        <i class="ri-arrow-right-s-line ri-xl"></i>
      </button>
      <div class="transition ease-in-out delay-150 z-0" :class="{'hidden' : swipe === 2 || swipe === 3}">
        <img src="https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
             class="absolute" alt="image">
      </div>
      <div class="transition ease-in-out delay-150 z-0" :class="{'hidden' : swipe === 1 || swipe === 3}">
        <img src="https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY"
             class="absolute" alt="image">
      </div>
      <div class="transition ease-in-out delay-150 z-0" :class="{'hidden' : swipe === 1 || swipe === 2}">
        <img src="https://fastly.picsum.photos/id/18/2500/1667.jpg?hmac=JR0Z_jRs9rssQHZJ4b7xKF82kOj8-4Ackq75D_9Wmz8"
             class="absolute" alt="image">
      </div>
    </div>
  </div>
</template>

<script setup>
const swipe = ref(1)
const onSwipe = (click) => {
  if (swipe.value === 1) swipe.value = 2
  else if (swipe.value === 2) swipe.value = 3
  else swipe.value = 1
  console.log(click);
};
</script>
