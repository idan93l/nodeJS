const request = require('postman-request');

const baseURL = 'https://binaryjazz.us/wp-json/genrenator/v1/genre';

request({url: baseURL, json: true}, (error, response) => {
  if (error) {
    console.log(`error: ${error}`);
  } else {
    console.log(response. authorized);
  }
})