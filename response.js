// 21-12-2022 //

// Fetching the data from the URL //

// const url = "https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0";
// // Line 3 is a constant variable that never changes called 'URL' and its directed at that link //
// fetch (url)
// // Fetching the URL variable //
// .then((info) => info.json())
// // created a new variable called info what returns a promise from the URL(Promise being the data)//
// .then((data) => {
// // Created a new data fucntion converted from the info.json that is awaitng the promise from the line above//
//   var array = data['dataseries'];
//     document.getElementById("testData").innerHTML +=
//       'timepoint: ' + array[0].timepoint + '<br>' +
//       'cloudcover: ' + array[0].cloudcover + '<br>' +
//       'transparency: ' + array[0].transparency + '<br>';


// array.forEach((data) => {
//  // created an array variable thats equal to the data function and is looking for the information within the 'dataseries' being the array name//
//    console.log(data)
//  // // For each array data, we are putting the data function in, and outputting in into the console log//
// // // => The left part denotes the input of a function and the right part the output of that function//
// // // the data should appear in the browser console one by one//
// });

// });






// 03-01-2023 // 

const url = "https://onstipe.com/web/api/json/7160?key=70a658727d82593172480508f96f72a7";
// Line is a constant variable that never changes called 'URL' and its directed at that link //
fetch(url)
  .then((info) => info.json())
  // created a new variable called info what returns a promise from the URL(Promise being the data)//
  .then((data) => {
    // Created a new data fucntion converted from the info.json that is awaitng the promise from the line above//

    var array = data['posts'];
console.log(data)
    // Get a reference to the table element
    var table = document.getElementById("myTable");

    // Loop through the array
    for (var i = 0; i < array.length; i++) {
      // Insert a new row
      var row = table.insertRow(-1);

      // Insert a new cell into the row
      var cell = row.insertCell(-1);
    
      cell.innerHTML +=
        ' ' + array[i].author_name + '<br>' +
        ' ' + array[i].author_username + '<br>'+
        ' ' + array[i].description + '<br>' 
        // '' + array[i].image_url;
        var img = document.createElement('img');
        img.src = array[i].image_url;
        
        cell.appendChild(img);
        
    }

    console.log(data);
  });














