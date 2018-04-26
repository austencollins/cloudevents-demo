'use strict'

/*
* Publisher
* - Transforms S3 events into a CloudEvent
* - Routes it through the Event Gateway
*/

const AWS = require('aws-sdk')
const SDK = require('@serverless/event-gateway-sdk')

require('dotenv').config()

const eventGateway = new SDK({
  url: `https://ac360.slsgateway.com`,
  configurationUrl: 'https://config.slsgateway.com',
  space: 'ac360',
  apiKey: process.env.EG_TOKEN
})

module.exports.publisher = (event, context, callback) => {

  event = event.Records[0]

  const cloudevent = {
    eventType: 'aws.s3.object.created',
    eventID: 'C234-1234-1234',
    eventTime: event.eventTime,
    eventTypeVersion: '2.0',
    source: 'https://serverless.com',
    extensions: {},
    contentType: 'application/json',
    cloudEventsVersion: '0.1',
    data: event.s3
  }

  console.log('')
  console.log(cloudevent)

  return eventGateway.emit({
    event: cloudevent.eventType,
    data: cloudevent
  })
  .catch((error) => {
    console.log('')
    console.log(error)
  })
  .then(() => {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify('success'),
    })
  })
}
