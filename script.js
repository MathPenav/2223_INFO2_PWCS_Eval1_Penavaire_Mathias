window.onload = () => {
    randomUserGen()
}

const randomUserGen = () => {
    console.log(fetch("https://randomuser.me/api/?nat=fr"))
        .then((response) => {
            return response.json()
        }).then((data) => {
            let name = (data.results[0].name.first).concat(" ",data.results[0].name.last);
            let city = data.results[0].location.city;
        })
}

let ul = [];

function userList() {
    let newlenth = ul.length;

    while(newlenth < 10) {
        newlenth = ul.push(randomUserGen()); 
    } 

    if (newlenth > 10){
        ul.shift();
    }
}