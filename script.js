
function addRow() {

    let response = JSON.parse(JSONString);
    var table = document.getElementsByTagName('table')[0];

    var newRow = table.insertRow(0);
    
    var cell = newRow.insertCell(0);
    cell.innerHTML = request.responseText;

    // for (i=0; i < JSOresponse.length; +ii) {
    //     console.log(JSOresponse)
    // }

    // JSOresponse.forEach(function (JSOresponse, id, array) {
    //     console.log(array[i])
    // })
}


let JSONonstipe = [{
    "stipe": {
        "id":"6807",
        "name":"chxrvey"
    },
    "posts": [
        {
            "source":{
                "id":"",
                "name":"csgo",
                "network":"Twitter"
            },
            "id":"",
            "created_at":"",
            "link":"",
            "image_url":"",
            "video_url":""
        }
    ]
}];


JSONonstipe.forEach(function (stipe, index){
    console.log(stipe, index)
})




let JSONString = JSON.stringify(JSONonstipe)
console.log(JSONString)
let JSOresponse = JSON.parse(JSONString)
console.log(JSOresponse)

console.log(JSON.stringify(JSOresponse))

// JSOresponse.forEach(function (responseJS, index){
//    console.log('index: ' + index, responseJR)
//})

let request = new XMLHttpRequest()
request.open('GET','https://onstipe.com/web/api/json/6807?key=05c897a699e307e8062db524932e687d', true)
request.onload = () => {
    let result =JSON.parse(request.responseText)
    console.log(result)
}
request.send()


document.addEventListener('DOMContentLoaded', () => {
    console.log('page Loaded')
})

let button = document.getElementById("btn1")

var output = JSOresponse;

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