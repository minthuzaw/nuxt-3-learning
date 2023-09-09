<template>
  <div class="container mx-auto w-1/2 py-8">
    <Title>{{ post.id }}| {{ title }}</Title>
    <h3 class="text-3xl font-bold">
      <NuxtLink :to="`/posts/${post.id}`">
        {{ post.title }}
      </NuxtLink>
    </h3>
    <div class="post-meta text-gray-700 flex items-center space-x-2">
      <div>{{ moment(new Date()).format('ll') }}</div>
      <div>&middot;</div>
      <div>{{ post.userId }}</div>
    </div>

    <div class="post-content mt-4">
      {{ post.body }}
    </div>

    <div class="mt-4">
      <NuxtLink to="/" class="bg-blue-700 hover:bg-blue-800 text-white rounded inline-block px-4 py-2">
        Back
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import moment from 'moment'

const title = useState('title')
const route = useRoute()

// const { data:post } = await useFetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
const {data: post} = await useFetch(useNuxtApp().$apiFetch(`/posts/${route.params.id}`))

</script>
