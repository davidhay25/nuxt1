<script setup lang="ts">


    import { usePatientStore } from "~/stores/patientStore.ts"
    const store = usePatientStore()

    const name=ref("hay")
    //592925
    //const data = {}
    const lstPatients  = ref([])


    async function search() {
        lstPatients.value = []
        const {data} = await useFetch(`/api/patient?name=${name.value}`)
        console.log(data)
        lstPatients.value = data.value
    }

    function showName(name) : string {
        let display : string = ""
        name.given.forEach(function(n){
            display += n + " "
        })
        display += name.family
        return display
    }

    function selectPatient(patient:any) {
       
        store.setPatient(patient)
    }

</script>

<template>

<div class="row">
    <div class="col-md-3">
        <UInput v-model="name" />
        <UButton @click="search()">Search</UButton>
    </div>
    <div class="col-md-3">
        <ul>
        <li v-for="patient in lstPatients" :key="patient.id" @click="selectPatient(patient)">
            {{ showName(patient.name[0]) }}
        </li>
    </ul>
    </div>
    <div class="col-md-3">
        {{ store.patient }}
    </div>
  </div>


   

    <div>{{ name }}</div>

    

    <div>
        Data:
    </div>

   

<!--
{{ lstPatients }}
-->
  

  <br/>

</template>