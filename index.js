console.log("this is my first file to add");
console.dir(document);

console.log(document.head);
console.log(document.body);
console.log(document.URL);
console.log(document.forms);
document.title = "Items"

let header = document.getElementById("main-header")
header.style.border = "solid 3px black"

let containerTitle = document.getElementsByClassName("title")
containerTitle[0].style.fontWeight = "bold"
containerTitle[0].style.color = "green"

let items = document.getElementsByClassName("list-group-item")
items[2].style.backgroundColor = "green"

for(let i=0; i<items.length; i++){
    items[i].style.fontWeight = "bold "
}

for(let i=0; i<items.length; i++){
    items[i].style.backgroundColor = "grey"
}

let list = document.getElementsByTagName("li")
list[4].textContent = "Hello world"

let secondItem = document.querySelector(".list-group-item:nth-child(2)")
secondItem.style.backgroundColor = "green"

let thirdItem = document.querySelector(".list-group-item:nth-child(3)")
thirdItem.style.display =  "none"

let list = document.querySelectorAll("li")
list[1].style.color = "green"


let odd = document.querySelectorAll("li:nth-child(odd)")

for(let i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = "green"
}