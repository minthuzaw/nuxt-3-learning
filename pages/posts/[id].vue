<template>
    <div class="container mx-auto w-1/2 py-8">
        <Title>{{ $route.params.id }}| {{ title }}</Title>
        <h3 class="text-3xl font-bold">
            <NuxtLink :to="`/posts/1`">
                Title of post
            </NuxtLink>
        </h3>
        <div class="post-meta text-gray-700 flex items-center space-x-2">
            <div>Nov 9, 2023</div>
            <div>&middot;</div>
            <div>Min Thu</div>
        </div>

        <div class="post-content mt-4">
            {{ $route.params.id }} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, quam, sit! Aliquam
            amet at commodi
            dignissimos dolores, fugit illo inventore laudantium, neque officiis omnis quia ratione soluta suscipit
            ullam
            unde.
        </div>
    </div>
</template>

<script setup>
const title = useState('title')
</script>
