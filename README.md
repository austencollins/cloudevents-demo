# CloudEvents Demo

This demonstrates interoperability across FaaS platforms using [CloudEvents](https://www.github.com/cloudevents/spec).

## Quick-Start

The demo involves a picture of [Dan Kohn](./dan_kohn.jpg) (executive director of the CNCF) being uploaded to an AWS S3 bucket.  When the picture is uploaded, the 'aws.s3.object.created' event is converted into a CloudEvent and routed via a hosted version of [Serverless Inc.'s Event Gateway](https://github.com/serverless/event-gateway) to any FaaS functions subscribed to the event.

If you would like to integrate into the demo, create a FaaS function that does something with Dan Kohn's image and posts the result to the CloudEventsDemo twitter feed:

* Make sure your FaaS function has a public HTTP endpoint accessible via a POST method.
* Give austen@serverless.com your endpoint.
* On image upload, we'll route the event to your FaaS function.
* The image is publicly accessible in an S3 bucket and you can grab it at the URL below.
* Your function should do something interesting with the image and publish the results to Twitter.

### AWS S3 CloudEvent

Here is the event you will receive:

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

### Your FaaS Function

Images uploaded can be fetched at the following URL: `https://s3.amazonaws.com/cloudevents/`

Here is the full path:

```javascript
let url = 'https://s3.amazonaws.com/cloudevents/' + cloudevent.data.object.key
```

### Suggestions:

* Image analysis (identify location, people, unsafe content)
* Image resizing
* Apply filters
* SaaS Integrations (e.g. Slack, Twilio, Stripe).
* Back-up
* Analytics
* Event Tracing
* Function Portability
