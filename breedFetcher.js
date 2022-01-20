const request = require("request");
// request data from thecatapi breed search

if (process.argv.length === 3) {
  let query = process.argv.slice(2)[0];

  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${query}`,
    (error, response, body) => {
      console.log("error:", error); // Print the error if one occurred
      console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      // console.log("body:", body); // Print the HTML for thecatapi search homepage.
      // console.log(typeof body); //the body returns a string

      const data = JSON.parse(body);
      console.log(data[0]);
    }
  );
}
