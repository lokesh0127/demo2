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