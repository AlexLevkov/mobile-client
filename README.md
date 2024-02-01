
# mobile-client
## Description
This React Native Expo app uses notifications to listen for API updates and displays the results of an AWS compression operation.

## Features
Listens for push notifications.
Displays status updates of a log file compression process.

## Requirements
Node.js
Expo CLI
React Native

## Setup and Installation

### Install dependencies:
`npm install`

### Start the Expo project:
`expo start`

## Usage
The app listens for specific push notifications. When a 'start' notification is received, it sends a log file for compression and updates the status. Upon receiving an 'aws' notification, it displays the successful completion of compression.
