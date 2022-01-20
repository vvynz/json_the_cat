const { fetchBreedDescription } = require("./breedFetcher");

let breedName = process.argv.slice(2)[0];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log(error);
  } else {
    console.log(desc);
  }
});
