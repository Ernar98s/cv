<template>
  <VCodeBlock
    class="h-full"
    :code="subtxt"
    highlightjs
    :height="600"
    lang="typescript"
    theme="night-owl"
  />
</template>

<script setup lang="ts">
import { onMounted, ref, defineProps } from 'vue'
import VCodeBlock from '@wdns/vue-code-block'
const props = defineProps({
  stepText: {
    type: String,
    default: 'No description for this page is provided.',
  },
})

const subtxt = ref('')

onMounted(() => {
  let i = 0
  let divider = 0
  const speed = 8 /* The speed/duration of the effect in milliseconds */

  function typeWriter() {
    if (i < props?.stepText?.length) {
      if (
        divider > 50 &&
        props?.stepText?.charAt(i) === ' ' &&
        !props?.stepText?.includes('\n')
      ) {
        console.log(divider)
        divider = 0
        subtxt.value += props?.stepText?.charAt(i) + `\n`
      } else subtxt.value += props?.stepText?.charAt(i)
      divider++
      i++
      setTimeout(typeWriter, speed)
    }
  }

  typeWriter()
})
</script>

<style lang="scss" scoped></style>
