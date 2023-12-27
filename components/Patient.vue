

<script setup lang="ts">
//display a single patient

import { usePatientStore } from "~/stores/patientStore.ts"
    const store = usePatientStore()

</script>

<template>
  {{ store.patient }}
</template>