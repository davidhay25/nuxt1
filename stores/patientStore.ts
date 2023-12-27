//https://dev.to/tao/adding-pinia-to-nuxt-3-2023-3l77

import { defineStore } from 'pinia'

export const usePatientStore = defineStore('patient', {
  state: () => ({
    patient: null,
    somethingElse : null
  }),
  actions :{
    setPatient(patient : any) {
      this.patient = patient
    }
  }
})

