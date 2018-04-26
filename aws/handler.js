'use strict';

module.exports.hello = (event, context, callback) => {

  const cloudevent = JSON.parse(event.body)
  console.log(cloudevent)

  const response = {
    statusCode: 200,
    body: JSON.stringify(cloudevent),
  }

  callback(null, response)
}
