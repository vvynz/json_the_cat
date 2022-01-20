const request = require("request");
// request data from thecatapi breed search

const fetchBreedDescription = function (breedName, callback) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  // allows user to specify the breed name using command-line arguments

  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    let breed = data[0];

    if (error) {
      //want to check for any errors first before proceeding with the rest of the code. This will check if there are any errors with the url
      callback("error: page undefined", error);
      console.log(error.message);
      return;
    }
    // if breed exists
    if (breed) {
      callback(null, `${breed.description}`);
    } else {
      callback(`error: ${breedName} is not a cat breed!`, error); //if breed doesn't exist
    }
  });
};

module.exports = { fetchBreedDescription };
