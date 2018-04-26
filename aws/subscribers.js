'use strict'

/*
* Subscriber: Product Review
*/

const https = require('https')

module.exports.review = (event, context, callback) => {

  const cloudevent = JSON.parse(event.body)
  console.log('')
  console.log('CloudEvent Received:')
  console.log(cloudevent)
  console.log('')

  // Ensure it's a product review
  if (cloudevent.data.object.key !== 'review.json') {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify('not a review'),
    })
  }

  const url = 'https://s3.amazonaws.com/cloudevents/' + cloudevent.data.object.key

  https.get(url, res => {

    res.setEncoding("utf8")
    let body = ""

    res.on("data", data => {
      body += data;
    })

    res.on("end", () => {
      body = JSON.parse(body);
      console.log('Review Parsed')
      console.log(body)

      callback(null, {
        statusCode: 200,
        body: JSON.stringify('success'),
      })
    })
  })
}

module.exports.image = (event, context, callback) => {

  const cloudevent = JSON.parse(event.body)
  console.log('')
  console.log('CloudEvent Received:')
  console.log(cloudevent)
  console.log('')

  // Ensure it's the image
  if (cloudevent.data.object.key !== 'dan_kohn.jpg') {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify('not a picture of dan kohn'),
    })
  }

  console.log('this is a picture of dan kohn')

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify('this is a picture of dan kohn'),
  })
}
