const SDK = require('@serverless/event-gateway-sdk')

require('dotenv').config()

const eventGateway = new SDK({
  url: `https://${process.env.EG_SPACE}.slsgateway.com`,
  configurationUrl: 'https://config.slsgateway.com',
  space: process.env.EG_SPACE,
  apiKey: process.env.EG_TOKEN
})

/*
* Register Functions
*/

// const fnOne = {
//   functionId: 'one',
//   type: 'awslambda',
//   provider: {
//     arn: 'arn:aws:lambda:us-east-1:810879231243:function:cloudevents-demo-dev-hello',
//     region: 'us-east-1',
//     awsAccessKeyId: process.env.AWS_KEY,
//     awsSecretAccessKey: process.env.AWS_SECRET
//   }
// }

// const fnTwo = {
//   functionId: 'two',
//   type: 'http',
//   provider: {
//     url: 'https://jpfzq6hyda.execute-api.us-east-1.amazonaws.com/dev/hello'
//   }
// }
//
// eventGateway.registerFunction(fnOne)
//   .then((response) => {
//     console.log('')
//     console.log('Function Registered:')
//     console.log(response)
//   })
//   .catch((error) => {
//     console.log('')
//     console.log('Function Register Error:')
//     console.log(error)
//   })

/*
* Create Subscriptions
*/

// const sub = {
//   functionId: 'one',
//   event: 'com.ecommerce.product_review.created',
//   path: `/${process.env.EG_SPACE}/`
// }
// const sub = {
//   functionId: 'one',
//   event: 'http',
//   path: `/${process.env.EG_SPACE}/test`,
//   method: 'POST'
// }
//
// eventGateway.subscribe(sub)
//   .then((response) => {
//     console.log('')
//     console.log('Subscription Created:')
//     console.log(response)
//   })
//   .catch((error) => {
//     console.log('')
//     console.log('Subscription Error:')
//     console.log(error)
//   })

/*
* Emit
*/

eventGateway.emit({
  event: 'com.ecommerce.product_review.created',
  data: {
    eventType: 'com.ecommerce.product_review.created',
    eventID: 'C234-1234-1234',
    eventTime: '2018-04-23T12:28:22.4579346Z',
    eventTypeVersion: '1.0',
    source: '/products',
    extensions: {},
    contentType: 'application/json',
    cloudEventsVersion: '0.1',
    data: {
      product: 'UFO Detector',
      review: "I don't know if this is a scam or if mine was broken, but it doesn't work and I am still getting abducted by UFO's on a regular basis.",
      author: {
        user: 'FoxMulder',
        userPostalCode: '89044',
        userEmail: 'thetruthisoutthere@gmail.com',
        userTwitter: '@fake_mulder'
      }
    }
  }
})
.then((response) => {
  console.log('')
  console.log('Emit Success:')
  console.log(response)
})
.catch((error) => {
  console.log('')
  console.log('Emit Error:')
  console.log(error)
})

/*
* Other
*/

// eventGateway.deleteFunction({ functionId: 'two' })
//   .then((response) => {
//     console.log('')
//     console.log('Function Deleted:')
//     console.log(response)
//   })
//   .catch((error) => { console.log(error) })


/*
* Unsubscribe
*/

// eventGateway.unsubscribe({
//   subscriptionId: 'com.ecommerce.product_review.created,one,%2Fac360%2F'
// })
//   .then((response) => {
//     console.log('')
//     console.log('Unsubscribe Successful:')
//     console.log(response)
//   })
//   .catch((error) => {
//     console.log('')
//     console.log('Unsubscribe Error:')
//     console.log(error)
//   })

/*
* List Functions
*/

eventGateway.listFunctions()
  .then((response) => {
    console.log('')
    console.log('Functions:')
    console.log(response)
  })
  .catch((error) => { console.log(error) })

/*
* List Subscriptions
*/

eventGateway.listSubscriptions()
  .then((response) => {
    console.log('')
    console.log('Subscriptions:')
    console.log(response)
  })
  .catch((error) => { console.log(error) })
