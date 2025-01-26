<template>
    <div class="post-card mt-3 mx-2 md:mx-0 bg-gradient-to-br from-gray-500 to-white-600 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105">
      <div class="grid grid-cols-12 gap-4 h-full">
        <div class="col-span-8 p-6 flex flex-col justify-between">
          <div>
            <h3 class="text-2xl font-extrabold text-white mb-2 line-clamp-2">
              <NuxtLink :to="`/posts/${props.post.id}`" class="hover:underline">
                {{ props.post.title }}
              </NuxtLink>
            </h3>
            <div class="post-meta text-indigo-200 text-sm mb-3">
                {{ moment(new Date()).format('ll') }} &middot; {{ props.post.id }}
            </div>
            <div class="post-preview text-white leading-relaxed line-clamp-3">
              {{ props.post.body }}
            </div>
          </div>
          <div class="mt-4">
            <NuxtLink
              :to="`/posts/${props.post.id}`"
              class="inline-block px-4 py-2 bg-white text-indigo-700 rounded-full font-semibold hover:bg-indigo-100 transition-colors duration-300"
            >
              Read More
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </template>

<script setup>
  import moment from 'moment'

const props = defineProps({
  post: Object
})
</script>

  <style scoped>
  .post-card {
    min-height: 200px;
  }
  </style>
