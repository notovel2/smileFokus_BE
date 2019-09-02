exports.getJsonResponse = (json, statusCode = 200) => {
  var resJson = json
  resJson.statusCode = statusCode
  return resJson
}