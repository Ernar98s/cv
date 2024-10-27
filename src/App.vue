<script setup lang="ts">
import BackgroundLayout from '@/components/common/BackgroundLayout.vue'
import VsCodeCard from '@/components/common/VsCodeCard.vue'
import { pages } from './assets/pages'
import { ref, computed, onMounted } from 'vue'

const currPage = ref(1)

const currentPageText = computed(() => {
  return pages.filter(item => item.id === currPage.value)[0]?.text
})

const goNextPage = () => {
  currPage.value = currPage.value + 1
}

const goPrevPage = () => {
  if (currPage.value === 1) {
    return
  }
  currPage.value = currPage.value - 1
}

onMounted(() => {
  const vid = document.getElementById('myAudio')
  vid.volume = 0.01
})

console.log('smth')
</script>

<template>
  <audio id="myAudio" class="hidden" controls autoplay>
    <source src="../src/assets/english.mp3" type="audio/ogg" />
    Your browser does not support the audio element.
  </audio>
  <BackgroundLayout />
  <div class="container items-center align-middle p-4">
    <VsCodeCard class="hidden" :key="currPage" :step-text="currentPageText" />
    <div class="w-full flex justify-between">
      <button
        @click="goPrevPage"
        type="button"
        class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 m-2"
      >
        Prev Screen
      </button>
      <button
        @click="goNextPage"
        type="button"
        class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 m-2"
      >
        Next Screen
      </button>
    </div>
  </div>
</template>
