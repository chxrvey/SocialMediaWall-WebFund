const url = "https://onstipe.com/web/api/json/6807?key=05c897a699e307e8062db524932e687d";
fetch(url)
  .then(
    response => response.json() // .json(), .blob(), etc.
  ).then(
    value => console.log(value)
  ).then( value => {
    let data = JSON.parse(value)
    return data;
  }
  );

  console.log(data);