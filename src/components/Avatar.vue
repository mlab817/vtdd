<template>
  <img class="inline-block h-8 w-8 rounded-full ring-white" :src="src" :alt="alt">
</template>

<script>
export default {
  setup(props) {
    return {
      src: props.src,
      alt: props.alt
    }
  }
}
</script>
