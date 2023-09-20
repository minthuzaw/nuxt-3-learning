<template>
    <div class="post-container pt-6 px-5">
        <h3 class="text-3xl font-bold">
            <NuxtLink :to="`/posts/${props.post.id}`" class="line-clamp-1">
                {{ props.post.title }}
            </NuxtLink>
        </h3>
        <div class="post-meta text-gray-700 flex items-center space-x-2">
            <div>{{ moment(new Date()).format('ll') }}</div>
            <div>&middot;</div>
            <div>{{ props.post.id }}</div>
        </div>
        <div class="post-preview leading-relaxed mt-4 line-clamp-3">
            {{ props.post.body }}
        </div>
        <div class="mt-4">
            <NuxtLink :to="`/posts/${props.post.id}`"
                      class="bg-blue-700 hover:bg-blue-800 text-white rounded inline-block px-4 py-2">
                Read More
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import moment from 'moment'

const props = defineProps({
  post: Object
})
</script>
