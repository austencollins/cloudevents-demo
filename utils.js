const SDK = require('@serverless/event-gateway-sdk')

require('dotenv').config()

const eventGateway = new SDK({
  url: `https://ac360.slsgateway.com`,
  configurationUrl: 'https://config.slsgateway.com',
  space: 'ac360',
  apiKey: process.env.EG_TOKEN
})

module.exports = {
  eventGateway
}
