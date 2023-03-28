//.netlify/netlify-server-functions/hello
exports.handler = async function () {
  return {
    statusCode: 200,
    body: "Hello world!",
  };
};
