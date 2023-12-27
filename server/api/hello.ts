

export default defineEventHandler(async (event) => {

    //this works 
    const pat = await $fetch('http://hapi.fhir.org/baseR4/Patient/592911').catch((error) => error.data)

    console.log(pat)

    return pat

  })