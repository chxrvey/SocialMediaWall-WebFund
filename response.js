// 21-12-2022 //

// Fetching the data from the URL //

const url = "https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0";
// Line 3 is a constant variable that never changes called 'URL' and its directed at that link //
fetch (url)
// Fetching the URL variable //
.then((info) => info.json())
// created a new variable called info what returns a promise from the URL(Promise being the data)//
.then((data) => {
// Created a new data fucntion converted from the info.json that is awaitng the promise from the line above//
  const array = data['dataseries'];
    document.getElementById("testData").innerHTML +=
      'timepoint: ' + array[0].timepoint + '<br>' +
      'cloudcover: ' + array[0].cloudcover + '<br>' +
      'transparency: ' + array[0].transparency + '<br>';


array.forEach((data) => {
 // created an array variable thats equal to the data function and is looking for the information within the 'dataseries' being the array name//
   console.log(data)
 // // For each array data, we are putting the data function in, and outputting in into the console log//
// // => The left part denotes the input of a function and the right part the output of that function//
// // the data should appear in the browser console one by one//
});

});





// 21-12-2022 // 

// Displaying a singlur array within my HTML // 













