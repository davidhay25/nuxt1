//https://github.com/unjs/h3

export default defineEventHandler(async (event) => {

    const method = event.method
    const query = getQuery(event)       //get all query parameters

    let qry = 'http://hapi.fhir.org/baseR4/Patient/'
    Object.keys(query).forEach(function(key,inx){
        let value = query[key]
        if (inx ==0) {
            qry += `?${key}=${value}`
        } else {
            qry += `&${key}=${value}`
        }

    })
    const bundle = await $fetch(qry).catch((error) => error.data)
//return bundle
    let response = []
    if (bundle && bundle.entry) {
        for (const entry of bundle.entry) {
            response.push(entry.resource)
        }
       
    }

    return response
    //)

    const params = event.context.params
    return getQuery(event)
/*
    //this works 
    const pat = await $fetch('http://hapi.fhir.org/baseR4/Patient/592911').catch((error) => error.data)

    console.log(pat)

    return pat

    https://stackoverflow.com/questions/72116079/nuxt3-error-using-function-inside-defineeventhandler-in-server-api-file
*/
  })