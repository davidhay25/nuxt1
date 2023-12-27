export default defineEventHandler(async (event) => {

    const id = getRouterParam(event, 'id')

    const pat = await $fetch(`http://hapi.fhir.org/baseR4/Patient/${id}`).catch((error) => error.data)

    console.log(pat.id)

    return pat

    //console.log(id)

    //return {id:id}

  })