# PubSub - JavaScript Publish-Subscribe Pattern

This project demonstrates two implementations of the Publish-Subscribe (PubSub) pattern in JavaScript. PubSub is a messaging pattern where senders (publishers) of messages do not program the messages to be sent directly to specific receivers (subscribers). Instead, messages are categorized into channels without knowledge of what, if any, subscribers there may be.

## Table of Contents

- [Description](#description)
- [Implementation 1: Using Map](#implementation-1-using-map)
  - [Description for Implementation 1](#description-for-implementation-1)
  - [Usage for Implementation 1](#usage-for-implementation-1)
- [Implementation 2: Using an Object Tracker](#implementation-2-using-an-object-tracker)
  - [Description for Implementation 2](#description-for-implementation-2)
  - [Usage for Implementation 2](#usage-for-implementation-2)
- [Contributing](#contributing)
- [License](#license)

## Description

In this project, we explore two different implementations of the PubSub pattern in JavaScript. Both implementations provide similar functionality for subscribing to and publishing events, but they use different data structures.

## Implementation 1: Using Map

### Description for Implementation 1

This implementation uses the JavaScript `Map` data structure to manage subscribers for different events. It provides methods for subscribing to events, unsubscribing from events, and publishing events to notify subscribers.

### Usage for Implementation 1

```javascript
// Example usage of Implementation 1:
let pubsub = new PubSub();
let subscription = pubsub.subscribe('eventName', callbackFunction);
pubsub.publish('eventName', eventData);
subscription.unsubscribe();
