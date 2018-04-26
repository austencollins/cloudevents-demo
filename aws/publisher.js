'use strict'

/*
* Publisher
* - Transforms S3 events into a CloudEvent
* - Routes it through the Event Gateway
*/

const AWS = require('aws-sdk')
const SDK = require('@serverless/event-gateway-sdk')
const eventGateway = new SDK({
  url: `https://ac360.slsgateway.com`,
  space: 'ac360'
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

module.exports.publisherTest = (event, context, callback) => {

  const cloudevent = {
    eventType: 'aws.s3.object.created',
    eventID: 'C234-1234-1234',
    eventTime: '2018-04-26T14:48:09.769Z',
    eventTypeVersion: '2.0',
    source: '/',
    extensions: {},
    contentType: 'application/json',
    cloudEventsVersion: '0.1',
    data:  {
     s3SchemaVersion: '1.0',
     configurationId: 'cd267a38-30df-400e-9e3d-d0f1ca6e2410',
     bucket:
      { name: 'cloudevents',
        ownerIdentity: {},
        arn: 'arn:aws:s3:::cloudevents' },
     object:
      { key: 'dan_kohn.jpg',
        size: 444684,
        eTag: '38b01ff16138d7ca0a0eb3f7a88ff815',
        sequencer: '005AE1E6A9A3D61490'
      }
    }
  }

  console.log('Test Event Published')
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
