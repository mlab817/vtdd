<template>
  <router-link :to="to" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: ['to']
}
</script>
