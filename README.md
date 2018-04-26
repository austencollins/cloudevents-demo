# CloudEvents Demo

This demonstrates interoperability across FaaS platforms using [CloudEvents](https://www.github.com/cloudevents/spec).

## Quick-Start

Make sure you have a Node.js version 6.0 or later installed.

Clone this repo.

In the repo, run `npm install` to install the dependencies.

Create an `.env` file and add the following.  Make sure you come up with a unique function name.

```
EG_TOKEN=123123123
FUNCTION_NAME=randomfunctionname
FUNCTION_ENDPOINT=yourfunctionendpoint
```

Once the `.env` file is created and filled in, you can register your function and create your subscriptions by running:

```
$ node deploy
```

Verify functions and subscriptions with:

```
$ node info
```

When you want to emit the `product_review` event, run:

```
$ node emit1
```

If you need to remove everything and start again, run:

```
$ node remove
```
