const utils = require('./utils.js')
const eventGateway = utils.eventGateway

/*
* Deploy
*/

const fn = {
  functionId: process.env.FUNCTION_NAME,
  type: 'http',
  provider: {
    url: process.env.FUNCTION_ENDPOINT
  }
}

eventGateway.registerFunction(fn)
  .then((response) => {

    console.log('')
    console.log('Function Registered:')
    console.log(response)

    const sub = {
      functionId: process.env.FUNCTION_NAME,
      event: 'aws.s3.object.created',
      path: '/ac360/'
    }

    return eventGateway.subscribe(sub)
      .then((response) => {
        console.log('')
        console.log('Subscription Created:')
        console.log(response)
      })
  })
  .catch((error) => {
    console.log('')
    console.log('Function Registration Error:')
    console.log(error)
  })
