const axios = require('axios');

const baseURL = 'https://binaryjazz.us/wp-json/genrenator/v1/genre';

const axiosGetUser = async () => {
  try {
  const data = await axios.get(baseURL);
  console.log(data.data);
  } catch (error) {
    console.log(`error: ${error}`);
  }
}

axiosGetUser();

// axios.get(baseURL)
//   .then(response => {
//     // handle success
//     console.log(JSON.parse(response));
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })