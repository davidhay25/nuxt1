<script setup lang="ts">

const count = ref(0)

const props = defineProps(['title'])
console.log('props title:', props.title)

function handleClick() {
  count.value++
}

</script>

<template>
  <div>Title: {{ title }}</div>
  <slot name="slot1"></slot>
  <div>
    <button @click="handleClick">
    Total clicks: {{ count }}
  </button>
  </div>
  <slot name="slot2"></slot>
 
</template>