<template>
  <div class="container mx-auto w-1/2 py-8">
    <Title>Post create | {{ headTitle }}</Title>
    <div v-if="error" class="errors text-red-500 mb-4">Error goes here</div>
    <form action="#" class="space-y-6" @submit.prevent="createPost">
      <div>
        <label for="title" class="block font-semibold">Title <span class="text-red-500">*</span></label>
        <input type="text" v-model="title" id="title" class="p-2 w-full shadow rounded mt-2">
      </div>
      <div>
        <label for="body" class="block font-semibold">Body <span class="text-red-500">*</span></label>
        <textarea
            v-model="body"
            id="body"
            name="body"
            cols="30"
            rows="10"
            class="p-2 w-full shadow rounded mt-2"
        ></textarea>
      </div>
      <div>
        <button
            type="submit"
            class="inline-block bg-green-500 hover:bg-green-600 text-white rounded px-4 py-2"
        >
          Save
        </button>
        <span v-if="isLoading">Loading ...</span>
      </div>
    </form>
  </div>
</template>

<script setup>
const headTitle = useState('title')

const title = ref('')
const body = ref('')
const isLoading = ref(false)
const error = ref()
const router = useRouter()

async function createPost() {
  isLoading.value = true
  try {
    await $fetch(useNuxtApp().$apiFetch('/posts'), {
      method: 'POST',
      body: {
        title: title.value,
        body: body.value
      }
    })

    isLoading.value = false

    title.value = ''
    body.value = ''

    await router.push('/')
  }catch (error) {
    error.value = error
    isLoading.value = false
  }
}
</script>
