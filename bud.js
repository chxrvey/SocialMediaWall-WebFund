
// Array creation //

// Array based on united players// 
const utdplayers = [
        {
            name: 'Luke Shaw',
            nationallity: 'English',
            age: 26,
            position: 'Left Back'
        },
        {
            name: 'Carlos Casemiro',
            nationallity: 'Brazillian',
            age: 30,
            position: 'Defensive Midefielder'
        },
        {
            name:'Lisandro Martinez',
            nationallity: 'Argentinian',
            age: 24,
            position:'Center Back'
        },
        {
            name:'Marcus Rashford',
            nationallity:'English',
            age: 25,
            position: 'Left Winger'
        }
];

// console.log(untdplayers);


// listing the players by age // 

const age = utdplayers.sort((a,b) =>{
    return a.age - b.age;
});

console.log(age)



// printing information within a table // 

window.onload = () => {
    let btnGet = document.getElementById('myBtn');
    const myTable = document.getElementById('myTable');

    let headers = ['Name', 'Nationallity' , 'Age' ,'Position'];
    btnGet.addEventListener('click', () => {
     alert('By clicking okay, you are creating a table based of an array.')

        let table = document.createElement('table');
        let headerRow = document.createElement('tr');

        headers.forEach(headerText => {
            let header = document.createElement('th');
            let textNode = document.createTextNode(headerText);
            header.appendChild(textNode);
            headerRow.appendChild(header);
        });

        table.appendChild(headerRow);

        utdplayers.forEach(play => {
            let row = document.createElement('tr');
            Object.values(play).forEach(text => {

            let cell=document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
            })

            table.appendChild(row);
        });

        myTable.appendChild(table);
    });
};



