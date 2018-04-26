const utils = require('./utils.js')
const eventGateway = utils.eventGateway

/*
* Remove
*/

eventGateway.unsubscribe({
  subscriptionId: 'com.ecommerce.product_review.created,test,%2Fac360%2F'
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
    return eventGateway.deleteFunction({ functionId: process.env.FUNCTION_NAME })
      .then((response) => {
        console.log('')
        console.log('Function Successfully Deleted')
      })
  })
  .catch((error) => {
    console.log('')
    console.log(error)
  })