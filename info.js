const utils = require('./utils.js')
const eventGateway = utils.eventGateway

/*
* List Functions
*/

eventGateway.listFunctions()
  .then((response) => {
    console.log('')
    console.log('Event Gateway Functions:')
    console.log(response)
  })
  .catch((error) => { console.log(error) })

/*
* List Subscriptions
*/

eventGateway.listSubscriptions()
  .then((response) => {
    console.log('')
    console.log('Event Gateway Subscriptions:')
    console.log(response)
  })
  .catch((error) => { console.log(error) })
