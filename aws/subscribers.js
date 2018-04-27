'use strict'

/*
* Subscriber: Product Review
*/

const https = require('https')
const url = require('url')
const AWS = require('aws-sdk')
const rekognition = new AWS.Rekognition()
const Twitter = require('twitter')

require('dotenv').config()

var client = new Twitter({
  consumer_key: process.env["TWITTER_CONSUMER_KEY"],
  consumer_secret: process.env["TWITTER_CONSUMER_SECRET"],
  access_token_key: process.env["TWITTER_ACCESS_TOKEN_KEY"],
  access_token_secret: process.env["TWITTER_ACCESS_TOKEN_SECRET"]
})

module.exports.image = (event, context, callback) => {

  const cloudevent = JSON.parse(event.body)
  console.log('CloudEvent Received:')
  console.log(cloudevent)
  console.log('')

  // Only allow specific events
  if (cloudevent.eventType !== "Microsoft.Storage.BlobCreated" &&
  cloudevent.eventType !== "aws.s3.object.created") {
    console.log('Invalid eventType')
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify('success'),
    })
  }

  if ( cloudevent.eventType == "Microsoft.Storage.BlobCreated") {
    // Microsoft Event
    return tweet(cloudevent.data.url, callback)
  } else {
    // AWS Event
    let objurl = "https://s3.amazonaws.com/"+  cloudevent.data.bucket.name + "/" + cloudevent.data.object.key
    return tweet(objurl,  callback)
  }
}


/*
* Sends The Tweet
*/

function tweet(objurl, callback) {
  https.get(url.parse(objurl), function(res) {
    var data = []

    res.on("data", function(chunk) {
      data.push(chunk)
    })
    .on("end", function() {

      var buffer = Buffer.concat(data)

      var params = {
        Image: {
          Bytes: buffer
        },
        MaxLabels: 100,
        MinConfidence: 25
      }

      rekognition.detectLabels(params, function(err, data) {

        if (err) {
          console.log(response)
          throw err
        }

        let text
        if (data.Labels[0] && data.Labels[1] && data.Labels[2]) {
          text = 'AWS Rekognition thinks this is a picture of "' + data.Labels[0].Name + ', ' + data.Labels[1].Name + ', ' + data.Labels[2].Name + '"'
        } else if (data.Labels[0]) {
          text = 'AWS Rekognition thinks this is a picture of "' + data.Labels[0].Name + '"'
        } else {
          text = 'AWS Rekognition could not recognize this picture'
        }

        console.log(text)

        client.post("media/upload", { media: buffer }, function(error, media, response ) {

          if (error) {
            console.log(response)
            throw error
          }

          // Lets tweet it
          var t = {
            status: text,
            media_ids: media.media_id_string // Pass the media id string
          }

          client.post("statuses/update", t, function(error, tweet, response) {

            if (error) throw error
            return callback(null, {
              statusCode: 200,
              body: JSON.stringify('success'),
            })
          })
        })
      })
    })
  })
}
