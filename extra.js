/*
* Extra
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
// const fn = {
//   functionId: 'one',
//   type: 'awslambda',
//   provider: {
//     arn: 'arn:aws:lambda:us-east-1:810879231243:function:cloudevents-demo-dev-hello',
//     region: 'us-east-1',
//     awsAccessKeyId: process.env.AWS_KEY,
//     awsSecretAccessKey: process.env.AWS_SECRET
//   }
// }

/*
* Emit
*/

// eventGateway.emit({
//   event: 'com.ecommerce.product_review.created',
//   data: {
//     eventType: 'com.ecommerce.product_review.created',
//     eventID: 'C234-1234-1234',
//     eventTime: '2018-04-23T12:28:22.4579346Z',
//     eventTypeVersion: '1.0',
//     source: 'https://serverless.com',
//     extensions: {},
//     contentType: 'application/json',
//     cloudEventsVersion: '0.1',
//     data: {
//       product: 'UFO Detector',
//       review: "I don't know if this is a scam or if mine was broken, but it doesn't work and I am still getting abducted by UFO's on a regular basis.",
//       author: {
//         user: 'FoxMulder',
//         userPostalCode: '89044',
//         userEmail: 'thetruthisoutthere@gmail.com',
//         userTwitter: '@fake_mulder'
//       }
//     }
//   }
// })
// .then((response) => {
//   console.log('')
//   console.log('Emit Successful. HTTP code:' + response.status)
// })
// .catch((error) => {
//   console.log('')
//   console.log(error)
// })
