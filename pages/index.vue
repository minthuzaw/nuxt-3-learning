<template>
  <div v-if="isLoading" class="text-center mt-5">
    Loading ...
  </div>
    <div class="container mx-auto w-1/2 py-8 divide-y space-y-8 divide-gray-300">
        <PostItem v-for="post in posts" :key="post.id" :post="post"></PostItem>
    </div>
</template>

<script setup>
const { isLoading, data:posts } = await useLazyFetch(useNuxtApp().$apiFetch('/posts'))
</script>
