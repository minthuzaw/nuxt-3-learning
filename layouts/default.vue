<template>
  <div class="bg-gray-100 min-h-screen text-gray-900">
      <Title>{{ title }}</Title>
      <nav class="bg-white shadow text-lg p-6">
          <div class="container mx-auto flex items-center justify-between px-6">
              <div>
                  <NuxtLink to="/">Logo</NuxtLink>
              </div>
              <div>
                  <ul class="flex space-x-12">
                      <li><NuxtLink to="/">Home</NuxtLink></li>
                      <li><NuxtLink to="/posts/create">Create</NuxtLink></li>
                      <li><NuxtLink to="/about">About</NuxtLink></li>
                      <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                  </ul>
              </div>
          </div>
      </nav>
      <slot/>
  </div>
</template>

<script setup>
const title = useState('title', () => 'Nuxt 3 blog')
</script>

<style scoped>
.router-link-active {
    font-weight: bold;
    color: #4484ed;
}
</style>
