
<script setup lang="ts">


  const data1 = ref("")
  const ddd1 = ref("")


</script>

<template>



<div>
  <Counter title="My title (2)">
    <template v-slot:slot1>
      My counter is here
    </template>

    <template #slot2>
      Bottom
    </template>
   
  </Counter>
</div>


<div class="row">
    <div class="col-9-sm">
      <h3>Search Patient</h3>
      <SearchPatient></SearchPatient>
    </div>
    <div class="col-3-sm">
      <Patient></Patient>
    </div>
  </div>
 <!--
  <div class="row">
    <div class="col-md-9">
      <h3>Search Patient</h3>
      <SearchPatient></SearchPatient>
    </div>
    <div class="col-md-3">
      <Patient></Patient>
    </div>
  </div>
-->

<!--
    <pre>{{ data }}</pre> 

    <div class="w-full flex flex-col sm:flex-row flex-grow overflow-hidden">
      <div class="sm:w-1/3 md:1/4 w-full flex-shrink flex-grow-0 p-4">
          <div class="sticky top-0 p-4 w-full">
            nav
              <ul class="flex sm:flex-col overflow-hidden content-center justify-between">
                  Nav here
              </ul>
          </div>
      </div>
      <main role="main" class="w-full h-full flex-grow p-3 overflow-auto">
         

          content
      </main>
  </div>
-->
<!--
<h3>Get Patient</h3>
<GetPatient></GetPatient>
-->


<!--
    <GetPatient></GetPatient>

    Testing...
    <AppAlert>My alert</AppAlert>

    <div>
      <AppAlert>And another</AppAlert>
    </div>

   

    <input v-model="data1" type="text" />
    <input v-model="ddd1" type="text" />
    
  </div>

  <div>
    Counter: <Counter></Counter>
  </div>

-->
  
  <!--
 <NuxtPage />

  -->
 
</template>


