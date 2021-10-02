# Best Dogs Server - JS

## Specs

### Frontend

* React frontend
* Interface with an image & 3 buttons
* The image should show the currently viewed dog
* There should be a Next, Previous & Favourite button
* Next button should fetch a new dog image to display
* Previous button should show the previous dog
* Store up to 10 previous dogs already shown
* Favourite button should add the current dog to a separate UI element below the image view

### Refer to the [client repo](https://github.com/Iamasamwich/bestdogs.git) for the development client and design

### Backend

* NodeJS backend (any framework)
* Rest API to perform CRUD operations
* [JSONdb](https://www.npmjs.com/package/node-json-db) for storing data
* Favourite dogs should be stored in the JSONdb
* Should be able to remove favourite dogs
* The favourite dogs should persist when the page reloads

## Dogs Source:

* [Dog API](https://github.com/public-apis/public-apis#animals)

## Installation

* Change to the directory where you want the application to sit and create a directory.

\> `mkdir bestdogs`

* Change into the directory

\> `cd bestdogs`

* Clone the server repo

bestdogs\> `git clone https://github.com/Iamasamwich/bestdogs-js.git`

* Change into the directory and install the npm packagaes

bestdogs\> `cd bestdogs-js`

bestdogs/bestdogs-js\> `npm install`

* Start the server

bestdogs/bestdogs-js\> `npm start`

* Run the tests

bestdogs/bestdogs-js\> `npm test`

* To look at the app go to http://localhost:8080

## App flow:

* On client load
  * Fetch list of favourite dogs from DB, if there are any it sets array of favourite dogs which will display in the bottom panel.
  * When Next is clicked a new dog is fetched from the Dog API, and added to the array of viewed dogs.
  * Array of viewed dogs is limited to maximum 10.
  * Clicking Previous shows the previous dog in the array until there are no previous dogs. Clicking Next after going back will fetch a new dog (ie - you can't see the same dogs again after going back)
  * Clicking favourite add the dog to the favourite list in the app and send a POST request to /adddog to add it to the database
  * If the current dog is already favourited, the button changes to Unfavourite
  * Clicking Unfavourite will update the list in the app and send a PUT request to /removedog to remove it from the database
  