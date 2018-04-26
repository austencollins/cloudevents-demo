'use strict'

/*
* Subscriber: Product Review
*/

const https = require('https')

module.exports.image = (event, context, callback) => {

  const cloudevent = JSON.parse(event.body)
  console.log('CloudEvent Received:')
  console.log(cloudevent)
  console.log('')

  // Ensure it's the image
  if (cloudevent.data.object.key !== 'dan_kohn.jpg' || cloudevent.eventType !== 'aws.s3.object.created') {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify('not a picture of dan kohn'),
    })
  }

  console.log('this is a picture of dan kohn')

  // const url = 'https://s3.amazonaws.com/cloudevents/' + cloudevent.data.object.key
  //
  // https.get(url, res => {
  //
  //   res.setEncoding("utf8")
  //   let body = ""
  //
  //   res.on("data", data => {
  //     body += data;
  //   })
  //
  //   res.on("end", () => {
  //     body = JSON.parse(body);
  //     console.log('Review Parsed')
  //     console.log(body)
  //
  //     callback(null, {
  //       statusCode: 200,
  //       body: JSON.stringify('success'),
  //     })
  //   })
  // })

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify('this is a picture of dan kohn'),
  })
}
