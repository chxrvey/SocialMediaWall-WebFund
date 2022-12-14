/* Add a new row everytime the Display button is clicked */ 
function addRow() {

    let response = JSOresponse;
    var table = document.getElementsByTagName('table')[0];

    var newRow = table.insertRow(0);
    
    var cell = newRow.insertCell(0);
    cell.innerHTML = request.JSOresponse;

    JSOresponse.forEach(function (stipe,posts, index){
        console.log(posts, index);
})
}

/* API data */ 

/* converting the API Data to Javascript */ 

// let JSONString = JSON.stringify(JSONonstipe)
// console.log(JSONString)
// let JSOresponse = JSON.parse(JSONString)
// console.log(JSOresponse)

// console.log(JSON.stringify(JSOresponse))

// console.log(JSONonstipe.filter(item => {
//     return item.posts === '1';
// }));

let request = new XMLHttpRequest()
request.open('GET','https://onstipe.com/web/api/json/6807?key=05c897a699e307e8062db524932e687d', true)
request.onload = () => {
    let result =JSON.parse(request.responseText)
    console.log(result)
}
request.send()

console.log('found', found[0]);

let responseText = (result)

/* pre loads the text of page before the images etc and does not disrupt the code */ 

document.addEventListener('DOMContentLoaded', () => {
    console.log('page Loaded')
})

let button = document.getElementById("btn1")


/* BS code I may not need */ 

// button.onclick = () => {
//     console.log("button pressed")
// }

// let messageElement =  document.getElementById('JSOresponse')
// messageElement.onclick = addRow => {
//     let req = new XMLHttpRequest()
//     req.open(
//         'GET',
//         'https://onstipe.com/web/api/json/6807?key=05c897a699e307e8062db524932e687d',
//         true
//     )
//     req.onload = () => {

//     }
//     req.send()
// }

// responseText.forEach(response.Text("Id")) 