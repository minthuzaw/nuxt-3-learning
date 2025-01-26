<template>
  <div>
    <div v-if="isLoading" class="text-center mt-5">
      Loading ...
    </div>
    <Carousel v-if="!isLoading" />
    <div
      ref="scrollComponent"
      class="container mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 divide-y md:divide-y-0 divide-gray-300"
    >
      <PostItem v-for="post in items" :key="post.id" :post="post"></PostItem>
    </div>
    <div v-if="loadMore" class="text-center mt-5">
      Loading ...
    </div>
  </div>
</template>


<script setup>
const page = ref(0)
const size = ref(10)
const items = ref()
const scrollComponent = ref()
const isLoading = ref(false)
const loadMore = ref(false)

onMounted(() => {
  fetchApi()
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

const fetchApi = async () => {
  isLoading.value = true
  items.value = await $fetch(useNuxtApp().$apiFetch(`/posts?_start=${page.value}&_limit=${size.value}`))
  isLoading.value = false
}

const nextPage = async () => {
  if (Math.floor(scrollComponent.value.getBoundingClientRect().bottom) <= window.innerHeight) {
    page.value++
    loadMore.value = true
    const response = await $fetch(useNuxtApp().$apiFetch(`/posts?_start=${page.value}&_limit=${size.value}`))
    if (response.length > 0) {
      items.value = items.value.concat(response)
      loadMore.value = false
    }else {
      loadMore.value = false
    }
  }
}
const onScroll = (event) => {
  event.preventDefault()
  nextPage()
}
</script>

<style>
::-webkit-scrollbar {
    display: none;
}
</style>
