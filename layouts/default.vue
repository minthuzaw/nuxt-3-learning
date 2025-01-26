<template>
    <div class="bg-gray-100 min-h-screen text-gray-900">
      <Title>{{ title }}</Title>
      <nav class="bg-white shadow text-lg fixed top-0 left-0 right-0 z-10">
        <div class="container mx-auto flex items-center justify-between px-6 py-4">
          <div>
            <NuxtLink to="/">
              <img src="/profile.png" alt="profile" class="h-[50px] w-[50px] rounded-full" />
            </NuxtLink>
          </div>
          <div>
            <ul class="flex space-x-6 md:space-x-12 lg:space-x-12">
              <li><NuxtLink to="/">Home</NuxtLink></li>
              <!-- <li><NuxtLink to="/posts/create">Create</NuxtLink></li> -->
              <li><NuxtLink to="/about">About</NuxtLink></li>
  <!--            <li><NuxtLink to="/contact">Contact</NuxtLink></li>-->
            </ul>
          </div>
        </div>
      </nav>
      <div class="pt-[80px]">
        <slot/>
      </div>
    </div>
  </template>

<script setup>
  const title = useState('title', () => 'MTZ | Experience')
</script>

<style scoped>
.router-link-active {
  font-weight: bold;
  color: #4484ed;
}
</style>
