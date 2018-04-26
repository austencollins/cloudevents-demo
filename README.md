# CloudEvents Demo

This demo showcases interoperability across Serverless Compute/FaaS platforms using [CloudEvents](https://www.github.com/cloudevents/spec).

## Overview

To showcase interoperability, we have:

* 2 event publishers - Azure Storage & AWS S3.  Both publish object created events in the CloudEvents format from their respective platforms.
* Multiple FaaS functions on several platforms subscribing to BOTH events.

The demo scenario involves a picture of [Dan Kohn](./dan_kohn.jpg) (executive director of the CNCF) being uploaded to an AWS S3 bucket and then Azure storage.  

When the picture is uploaded into one of the storage solutions, either AWS S3 event and Azure Storage event, is converted into a CloudEvent and routed via a hosted version of [Serverless Inc.'s Event Gateway](https://github.com/serverless/event-gateway) to any FaaS functions subscribed to the event.

If you would like to integrate into the demo, create a FaaS function that does something with Dan Kohn's image and posts the result to the CloudEventsDemo twitter feed:

* Make sure your FaaS function has a public HTTP endpoint accessible via a POST method.
* Give austen@serverless.com your endpoint.  You should join the CNCF slack team and #cloudevents channel to ask questions.
* On image upload, we'll route the event to your FaaS function.  The event will be in the request body.
* The uploaded image is publicly accessible in both storage solutions and you can grab/process it at the URL included in the events.
* Your function should do something interesting with the image and publish the results to Twitter.

### CloudEvent: AWS S3

```javascript
{
  eventType: 'aws.s3.object.created',
  eventID: 'C234-1234-1234',
  eventTime: '2018-04-26T14:48:09.769Z',
  eventTypeVersion: '2.0',
  source: 'https://serverless.com',
  extensions: {},
  contentType: 'application/json',
  cloudEventsVersion: '0.1',
  data:
   { s3SchemaVersion: '1.0',
     configurationId: 'cd267a38-30df-400e-9e3d-d0f1ca6e2410',
     bucket:
      { name: 'cloudevents',
        ownerIdentity: [Object],
        arn: 'arn:aws:s3:::cloudevents' },
     object:
      { key: 'dan_kohn.jpg',
        size: 444684,
        eTag: '38b01ff16138d7ca0a0eb3f7a88ff815',
        sequencer: '005AE1E6A9A3D61490'
      }
    }
}
```

### CloudEvent: Azure Storage

```javascript
Coming soon...
```

### Your FaaS Function

Your FaaS function should react to BOTH events from AWS S3 & Azure Storage.

For S3: The image URL will be: `https://s3.amazonaws.com/cloudevents/[Insert S3 OBject Key here]`


The picture of [Dan](./dan_kohn.jpg) is included in this repo.


### Suggestions:

* Image analysis (identify location, people, unsafe content)
* Image resizing
* Apply filters
* SaaS Integrations (e.g. Slack, Twilio, Stripe).
* Back-up
* Analytics
* Event Tracing
* Function Portability
