# PureCloud GDPR Requests App

This is an application that can be embedded inside PureCloud to process GDPR requests

![Screenshot](https://github.com/purecloudgdprrequests/purecloudgdprrequests.github.io/blob/master/assets/images/screenshot.jpg?raw=true)

How it looks in PureCloud

![PureCloud Screenshot](https://github.com/purecloudgdprrequests/purecloudgdprrequests.github.io/blob/master/assets/images/purecloudscreenshot.jpg?raw=true)


## Installation

* Clone this repository
* Run `npm install`
* Start a web server (`start.cmd` uses Python)
* Open the index.html using your web server

### Deploy as a PureCloud App

* Go to `Admin/Integrations` and create a new integration
* Click on `Install` in the `Custom Client Application` box
* In the `Details` tab, enter a name for your app (e.g. `GDPR App`)
* Go to the `Configuration` tab
  * Application URL: Your url (or use https://purecloudgdprrequests.github.io)
  * Application Type: widget
  * Application Category: leave blank
  * Iframe Sandbox Options: leave the default (`allow-scripts,allow-same-origin,allow-forms,allow-modals`)
  * Group Filtering: Add a group to specify who will be allowed to see this app. If you do not have a group yet, create one in `Admin/Groups` in PureCloud Admin
  * Click on `Save`
* Mark it as Active
* Do a hard refresh (CTRL+F5 or CTRL+R in Google Chrome). If the app does not appear, logout and log back in.

## Known issues/limitations/TODOs

* Does not support GDPR_UPDATE requests (yet). Need to add a new form (modal?) to add replacement fields
* Requests are not sorted by `Created Date` because each request to the Users API does not take the same amount of time for each card
* Add Categories for search results (using Bootstrap accordion)
* Add confirmation dialog when clicking on submit request for a delete request to show the number of records that will be deleted