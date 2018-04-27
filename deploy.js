const utils = require('./utils.js')
const eventGateway = utils.eventGateway

/*
* Deploy
*/

/*
* Subscriber: AWS Lambda
*/

const fnLambda = {
  functionId: process.env.LAMBDA_FUNCTION_NAME,
  type: 'http',
  provider: {
    url: process.env.LAMBDA_FUNCTION_ENDPOINT
  }
}

eventGateway.registerFunction(fnLambda)
.then((response) => {

  console.log('')
  console.log('Function Registered:')
  console.log(response)

  const sub = {
    functionId: process.env.LAMBDA_FUNCTION_NAME,
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

/*
* Subscriber: Azure Function
*/

const fnAzure = {
  functionId: process.env.AZURE_FUNCTION_NAME,
  type: 'http',
  provider: {
    url: process.env.AZURE_FUNCTION_ENDPOINT
  }
}

eventGateway.registerFunction(fnAzure)
.then((response) => {

  console.log('')
  console.log('Function Registered:')
  console.log(response)

  const sub = {
    functionId: process.env.AZURE_FUNCTION_NAME,
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

/*
* Subscriber: IBM Function
*/

const fnIBM = {
  functionId: process.env.IBM_FUNCTION_NAME,
  type: 'http',
  provider: {
    url: process.env.IBM_FUNCTION_ENDPOINT
  }
}

eventGateway.registerFunction(fnIBM)
.then((response) => {

  console.log('')
  console.log('Function Registered:')
  console.log(response)

  const sub = {
    functionId: process.env.IBM_FUNCTION_NAME,
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

/*
* Subscriber: Dispatch Function
*/

const fnDispatch= {
  functionId: process.env.DISPATCH_FUNCTION_NAME,
  type: 'http',
  provider: {
    url: process.env.DISPATCH_FUNCTION_ENDPOINT
  }
}

eventGateway.registerFunction(fnDispatch)
.then((response) => {

  console.log('')
  console.log('Function Registered:')
  console.log(response)

  const sub = {
    functionId: process.env.DISPATCH_FUNCTION_NAME,
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

/*
* Subscriber: Nuclio Function
*/

const fnNuclio = {
  functionId: process.env.NUCLIO_FUNCTION_NAME,
  type: 'http',
  provider: {
    url: process.env.NUCLIO_FUNCTION_ENDPOINT
  }
}

eventGateway.registerFunction(fnNuclio)
.then((response) => {

  console.log('')
  console.log('Function Registered:')
  console.log(response)

  const sub = {
    functionId: process.env.NUCLIO_FUNCTION_NAME,
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

/*
* Subscriber: Redhat Function
*/

const fnRedhat = {
  functionId: process.env.REDHAT_FUNCTION_NAME,
  type: 'http',
  provider: {
    url: process.env.REDHAT_FUNCTION_ENDPOINT
  }
}

eventGateway.registerFunction(fnRedhat)
.then((response) => {

  console.log('')
  console.log('Function Registered:')
  console.log(response)

  const sub = {
    functionId: process.env.REDHAT_FUNCTION_NAME,
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

/*
* Subscriber: Google Cloud Function
*/
