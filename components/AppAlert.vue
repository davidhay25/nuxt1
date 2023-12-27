<script setup>
const value = ref('')



const items = [{
  label: 'Tab1',
  content: 'This is the content shown for Tab1'
}, {
  label: 'Tab2',
  disabled: true,
  content: 'And, this is the content for Tab2'
}, {
  label: 'Tab3',
  content: 'Finally, this is the content for Tab3'
}]
</script>



<template>
    <span>
      <slot />

      <UButton>Button in AppAlert</UButton>

      <div>
        <UInput v-model="value" />

        <UTextarea v-model="value" />

        <div>{{ value }}</div>
      </div>

      <div>
        <UTabs :items="items" />
    </div>

    </span>

   
  </template>