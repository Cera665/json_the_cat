const request = require("request");

const fetchBreedDescription = (breedName, cleverCallbackName) => {
  const domain = "https://api.thecatapi.com/v1/breeds/search/?q=" + breedName;
  request(domain, (error, response, body) => {
    if (error) {
      cleverCallbackName(error, null);
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      errorMsg = `${breedName} was not found.`;
      cleverCallbackName(errorMsg, null);
    } else {
      cleverCallbackName(null, data[0].description);
    }
  });
};