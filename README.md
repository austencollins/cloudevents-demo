# CloudEvents Demo

This demo showcases interoperability across Serverless Compute/FaaS platforms using [CloudEvents](https://www.github.com/cloudevents/spec).

## Overview

To showcase interoperability, we have:

* **2 Event Publishers** - Azure Storage & AWS S3.  Both publish object created events in the CloudEvents format from their respective platforms.
* **Multiple FaaS Subscribers** - On several platforms subscribing to BOTH events.

The demo scenario involves a picture of [Dan Kohn](./dan_kohn.jpg) (executive director of the CNCF) being uploaded to Azure Storage and then also being uploaded to AWS S3.  The picture of [Dan](./dan_kohn.jpg) is included in this repo.

When the picture is uploaded into one of the storage solutions, the AWS S3 event or Azure Storage event is converted into a CloudEvent and published to any FaaS functions subscribed to the event.  The FaaS functions should do something interesting with the photo.  To solve observability in a simple way, all FaaS functions should publish their result to their Twitter account.  This is a fun, easy way to show the audience an event log.  We'll add your Twitter account to a list and show the feed from that list to the audience.  The list is here: https://twitter.com/CloudEventsDemo/lists/demo

## Participate

If you would like to integrate into the demo, create a FaaS function that does something with images and posts the result to Twitter.

* Make sure your FaaS function has a public HTTP endpoint accessible via a POST method.
* Give Austen AND Clemens your FaaS endpoint AND twitter account whih you are publishing results to in the CNCF #cloudevents Slack channel.  You should join the CNCF slack team and #cloudevents channel to ask questions.
* On image upload, we'll route the event to your FaaS function.  The event will be in the request body.
* To help you design your functions, events are published on both platforms every few minutes.  As soon as you give Austen and Clemens your endpoints, they will start publishing test events to you.
* The uploaded image is publicly accessible in both storage solutions and you can grab/process it at the URL included in the events.
* Your function should do something interesting with the image and publish the results to Twitter.

### CloudEvent: AWS S3

Your FaaS function should react to BOTH events from AWS S3 & Azure Storage.  Here is the exact AWS S3 event you will receive:

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

The image is publicly accessible in AWS S3 here:

```javascript
'https://s3.amazonaws.com/cloudevents/' + cloudevent.data.object.key
```

### CloudEvent: Azure Storage

Your FaaS function should react to BOTH events from AWS S3 & Azure Storage.  Here is the exact Azure Storage event you will receive:

```javascript
{
   "eventID": "96fb5f0b-001e-0108-6dfe-da6e2806f124",
   "eventTime": "2018-04-23T12:28:22.4579346Z",
   "eventType": "Microsoft.Storage.BlobCreated",
   "cloudEventsVersion": "0.1",
   "data": {
       "api": "PutBlockList",
       "clientRequestId": "a23b4aba-2755-4107-8020-8ba6c54b203d",
       "requestId": "96fb5f0b-001e-0108-6dfe-da6e28000000",
       "eTag": "0x8D5A915B425AFFD",
       "contentType": "image/jpeg",
       "contentLength": 2779325,
       "blobType": "BlockBlob",
       "url": "https://cvtest34.blob.core.windows.net/myfiles/IMG_20180224_0004.jpg",
       "sequencer": "000000000000000000000000000000BA00000000003db46c",
       "storageDiagnostics": {
           "batchId": "ba4fb664-f289-4742-8067-6c859411b066"
       }
   },
   "source": "/subscriptions/326100e2-f69d-4268-8503-075374f62b6e/resourceGroups/cvtest34/providers/Microsoft.Storage/storageAccounts/cvtest34#/blobServices/default/containers/myfiles/blobs/IMG_20180224_0004.jpg"
}
```

The image is publicly accessible in Azure Storage at this URL:

```javascript
event.data.url
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
