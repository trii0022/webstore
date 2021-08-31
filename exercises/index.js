fetch("#")
  .then(function (headers) {
    console.log(headers);
    return headers.jason();
  })
  .then(function (data) {
    console.log(data);
  });
