//#region set const and variables

// **** Token Implicit Grant (Browser) - UserLogin ****
const clientId = '89f29367-dc0e-4fd0-9f55-7175a73ee600';
const redirectUrl = 'https://purecloudgdprrequests.github.io/index.html';
const environment = 'mypurecloud.ie';

const platformClient = require('platformClient');
const client = platformClient.ApiClient.instance
client.setPersistSettings(true);

const _token = client.authentications["PureCloud Auth"].accessToken;

//#endregion

// Set Environment (in case page reloaded)
client.setEnvironment(environment);

//#region Hanlde Init & signIn to obtain valid Token

function signIn() {
  console.log('signIn');
  client.loginImplicitGrant(clientId, redirectUrl)
    .then(function () {
      // Wait for PageReload.
      console.log('logged in');
    })
    .catch(function (err) {
      console.log(err);
    });
}

signIn();

//#endregion

//#region GDPR API Calls

/**
 *
 * @param {string} searchType Valid values: NAME, ADDRESS, PHONE, EMAIL
 * @param {string} searchValue Value to search for
 *
 * @returns {object} results from search
 */
function searchForSubject(searchType, searchValue) {
  console.log('searchForSubject');
  return new Promise(function (resolve, reject) {
    try {
      var apiInstance = new platformClient.GeneralDataProtectionRegulationApi();

      apiInstance.getGdprSubjects(searchType, searchValue)
        .then(function (data) {
          console.log(`getGdprSubjects success! data: ${JSON.stringify(data, null, 2)}`);
          resolve(data);
        })
        .catch(function (err) {
          console.log('There was a failure calling getGdprSubjects');
          console.error(err);
          reject();
        });

    } catch (err) {
      console.log(err);
      reject();
    }
  });
}

/**
 *
 *
 * @returns {object} all GDPR requests found in org
 */
function getGDPRRequests() {
  console.log('getGDPRRequests');
  return new Promise(function (resolve, reject) {
    try {
      var apiInstance = new platformClient.GeneralDataProtectionRegulationApi();

      var opts = {
        'pageSize': 50, // Number | Page size
        'pageNumber': 1 // Number | Page number
      };
      apiInstance.getGdprRequests(opts)
        .then(function (data) {
          console.log('getGdprRequests success!');
          console.log(data);
          resolve(data);
        })
        .catch(function (err) {
          console.log('There was a failure calling getGdprRequests');
          console.error(err);
          reject(err);
        });

    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
}

/**
 *
 * @param {string} reqId requestId
 *
 * @returns {object} details about requestId
 */
function getGDPRRequest(reqId) {
  console.log('getGDPRRequest', reqId);
  return new Promise(function (resolve, reject) {
    try {
      var apiInstance = new platformClient.GeneralDataProtectionRegulationApi();

      apiInstance.getGdprRequest(reqId)
        .then(function (data) {
          console.log(`getGdprRequest success! data: ${JSON.stringify(data, null, 2)}`);
          resolve(data);
        })
        .catch(function (err) {
          console.log('There was a failure calling getGdprRequest');
          console.error(err);
          reject();
        });


    } catch (err) {
      console.log(err);
      reject();
    }
  });
}

/**
 *
 * @param {string} body body of the GDPR request
 *
 * @returns {object} GDPRRequest
 */
function sendGDPRRequest(body) {
  console.log('sendGDPRRequest');
  return new Promise(function (resolve, reject) {
    try {
      var apiInstance = new platformClient.GeneralDataProtectionRegulationApi();

      if (body.requestType == "GDPR_DELETE") {
        var opts = {
          'deleteConfirmed': true
        };
      }
      apiInstance.postGdprRequests(body, opts)
        .then(function (data) {
          console.log(`postGdprRequests success! data: ${JSON.stringify(data, null, 2)}`);
          resolve(data);
        })
        .catch(function (err) {
          console.log('There was a failure calling postGdprRequests');
          console.error(err);
          reject(err);
        });

    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
}

/**
 *
 * @param {string} userId userId
 *
 * @returns {object} user details
 */
function getUser(userId) {
  return new Promise(function (resolve, reject) {
    try {
      var apiInstance = new platformClient.UsersApi();

      apiInstance.getUser(userId)
        .then(function (data) {
          resolve(data);
        })
        .catch(function (err) {
          console.log('There was a failure calling getUser');
          console.error(err);
          reject(err);
        });
    } catch (err) {
      console.log(err);
      reject();
    }
  });
}

//#endregion