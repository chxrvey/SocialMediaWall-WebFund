
/* fetching API data and turnining into an array */ 

!async function api() {
  // let data = await fetch("https://onstipe.com/web/api/json/6980?key=efa4b57dc7fae86ec1b71c0a58adb5ef")
  let data = await fetch ('https://pokeapi.co/api/v2/pokemon/ditto/${abilities}')
  .then((response) => response.json())
  .then(data => {
      return data;
  })

  .catch(error => {
      console.log(error);
  });
  console.log(data);
  fetchdata(1)
};

// Mapping Array //



  // insert to table //

// let table = document.getElementById("mytable");

// let newRow=table.insertRow(-1);

// let cell1 = newRow.insertCell(0);
// let cell2 = newRow.insertCell(1);

// cell1.innerHTML = data.api;
// cell2.innerHTML = data.stipe;

// }();












