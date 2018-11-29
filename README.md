# PureCloud GDPR Requests App

This is an application that can be embedded inside PureCloud to process GDPR requests

![Screenshot](https://bytebucket.org/eccemea/gdpr-requests-app/raw/72372b2139166a0a90eaf250f9d3965788923d45/assets/images/screenshot.jpg)

## Installation

* Clone this repository
* Run `npm install`
* Start a web server (`start.cmd` uses Python)
* Open the index.html using your web server

**TODO: Add instructions on how to load this app in PureCloud**

## Known issues/limitations

* Does not support GDPR_UPDATE requests (yet)
* Requests are not sorted by `Created Date` because each request to the Users API does not take the same amount of time