<script setup lang="ts">

    const patientid=ref("592911")
    //592925
    //const data = {}
    let pat = ref(null)

    const {data} = await useFetch(`/api/getpatient/${patientid.value}`)
   // let pat = ref(data)
    pat.value = data.value

/*
    async function getpatient() {
        const {data} = await useFetch(`/api/getpatient/${patientid.value}`)
        console.log(data)
    }
    */

    //getpatient()

    async function clickme() {

        alert('click')
        const {data} = await useFetch(`/api/getpatient/${patientid.value}`)
        console.log(data)
        pat.value = data.value

        console.log(pat)

    }

</script>

<template>

    <UInput v-model="patientid" />

    <div>{{ patientid }}</div>

    <UButton @click="clickme()">Button</UButton>

    <div>
        Data:
    </div>

  {{ pat }}

  <br/>

</template>