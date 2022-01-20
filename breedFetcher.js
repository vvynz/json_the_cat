const request = require("request");
// request data from thecatapi breed search

const fetchBreedDescription = function (breedName, callback) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  // allows user to specify the breed name using command-line arguments

  request(url, (error, response, body) => {
    if (error) {
      //want to check for any errors first before proceeding with the rest of the code. This will check if there are any errors with the url
      callback("error: page undefined", error);
    }

    const data = JSON.parse(body);
    let breed = data[0];

    if (breed) {
      callback(breed.description);
    } else {
      callback(`${breedName} is not a cat breed!`);
    }
  });
};

module.exports = { fetchBreedDescription };
