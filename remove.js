const utils = require('./utils.js')
const eventGateway = utils.eventGateway

/*
* Remove
*/

/*
* Subscriber: AWS Lambda
*/

eventGateway.unsubscribe({
  subscriptionId: `aws.s3.object.created,${process.env.LAMBDA_FUNCTION_NAME},%2Fac360%2F`
})
.then((response) => {
  console.log('')
  console.log('Subscription Successfully Deleted')
})
.catch((error) => {
  console.log('')
  console.log(error)
})
.then(() => {
  return eventGateway.deleteFunction({ functionId: process.env.LAMBDA_FUNCTION_NAME })
  .then((response) => {
    console.log('')
    console.log('Function Successfully Deleted')
  })
})
.catch((error) => {
  console.log('')
  console.log(error)
})

/*
* Subscriber: Azure Function
*/

eventGateway.unsubscribe({
  subscriptionId: `aws.s3.object.created,${process.env.AZURE_FUNCTION_NAME},%2Fac360%2F`
})
.then((response) => {
  console.log('')
  console.log('Subscription Successfully Deleted')
})
.catch((error) => {
  console.log('')
  console.log(error)
})
.then(() => {
  return eventGateway.deleteFunction({ functionId: process.env.AZURE_FUNCTION_NAME })
  .then((response) => {
    console.log('')
    console.log('Function Successfully Deleted')
  })
})
.catch((error) => {
  console.log('')
  console.log(error)
})

/*
* Subscriber: IBM Function
*/

eventGateway.unsubscribe({
  subscriptionId: `aws.s3.object.created,${process.env.IBM_FUNCTION_NAME},%2Fac360%2F`
})
.then((response) => {
  console.log('')
  console.log('Subscription Successfully Deleted')
})
.catch((error) => {
  console.log('')
  console.log(error)
})
.then(() => {
  return eventGateway.deleteFunction({ functionId: process.env.IBM_FUNCTION_NAME })
  .then((response) => {
    console.log('')
    console.log('Function Successfully Deleted')
  })
})
.catch((error) => {
  console.log('')
  console.log(error)
})

/*
* Subscriber: Dispatch Function
*/

eventGateway.unsubscribe({
  subscriptionId: `aws.s3.object.created,${process.env.DISPATCH_FUNCTION_NAME},%2Fac360%2F`
})
.then((response) => {
  console.log('')
  console.log('Subscription Successfully Deleted')
})
.catch((error) => {
  console.log('')
  console.log(error)
})
.then(() => {
  return eventGateway.deleteFunction({ functionId: process.env.DISPATCH_FUNCTION_NAME })
  .then((response) => {
    console.log('')
    console.log('Function Successfully Deleted')
  })
})
.catch((error) => {
  console.log('')
  console.log(error)
})

/*
* Subscriber: Nuclio Function
*/

eventGateway.unsubscribe({
  subscriptionId: `aws.s3.object.created,${process.env.NUCLIO_FUNCTION_NAME},%2Fac360%2F`
})
.then((response) => {
  console.log('')
  console.log('Subscription Successfully Deleted')
})
.catch((error) => {
  console.log('')
  console.log(error)
})
.then(() => {
  return eventGateway.deleteFunction({ functionId: process.env.NUCLIO_FUNCTION_NAME })
  .then((response) => {
    console.log('')
    console.log('Function Successfully Deleted')
  })
})
.catch((error) => {
  console.log('')
  console.log(error)
})
