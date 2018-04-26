'use strict';

const AWS = require('aws-sdk')

/*
* Review Publisher
*/

module.exports.reviewPublisher = (event, context, callback) => {

  event = event.Records[0]
  console.log(event)

  const cloudevent = {
    eventType: 'aws.s3.object.created',
    eventID: 'C234-1234-1234',
    eventTime: event.eventTime,
    eventTypeVersion: '2.0',
    source: "https://serverless.com",
    extensions: {},
    contentType: "application/json",
    cloudEventsVersion: "0.1",
    data: event.s3
  }

  console.log('')
  console.log(cloudevent)


 //  var params = {
 //  Bucket: "examplebucket",
 //  Key: "HappyFace.jpg"
 // };
 // s3.getObject(params, function(err, data) {
 //   if (err) console.log(err, err.stack); // an error occurred
 //   else     console.log(data);           // successful response
 //   /*
 //   data = {
 //    AcceptRanges: "bytes",
 //    ContentLength: 3191,
 //    ContentType: "image/jpeg",
 //    ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"",
 //    LastModified: <Date Representation>,
 //    Metadata: {
 //    },
 //    TagCount: 2,
 //    VersionId: "null"
 //   }
 //   */
 // });

  const response = {
    statusCode: 200,
    body: JSON.stringify('hello'),
  }

  callback(null, response)
}

/*
* Review Subscriber
*/

module.exports.reviewSubscriber = (event, context, callback) => {

  const cloudevent = JSON.parse(event.body)
  console.log(cloudevent)

  const response = {
    statusCode: 200,
    body: JSON.stringify(cloudevent),
  }

  callback(null, response)
}
