// TRAVESING THE DOM

let items = document.querySelector("#items")

// parentelement
console.log(items.parentElement);
items.parentElement.style.backgroundColor = "#f4f4f4"

// createchild
console.log(items.children);
items.children[1].textContent = "Hello World";

// firstchild
console.log(items.firstChild);

// firstelementchild
console.log(items.firstElementChild);
items.firstElementChild.textContent = "hello 1"

// lastchild
console.log(items.lastChild);

// lastelementchild
items.lastElementChild.style.backgroundColor = "powderblue"

// nextsibling
console.log(items.nextSibling);

// nextelementsibling
console.log(items.nextElementSibling);
items.nextElementSibling.style.color = "blue"

// previoussibling
console.log(items.previousSibling);

// previouselementsibling
console.log(items.previousElementSibling);
items.previousElementSibling.previousElementSibling.previousElementSibling.style.color = "red"

// createelement
let newDiv = document.createElement("div")
console.log(newDiv);

// setAttribute
newDiv.setAttribute("title", "Hello div")

// createtextnode
let text = document.createTextNode("HEllO")

// appendchild
newDiv.appendChild(text)

let container = document.querySelector("header .container")
let h1 = document.querySelector("header h1")

container.insertBefore(newDiv, h1)


//createElement 
let h2 = document.createElement("h2")
console.log(h2);

let item = document.createTextNode("HEllO")

h2.appendChild(item)

let unorderList = document.querySelector("#items")
let list1 = document.querySelector("#items .list-group-item")

unorderList.insertBefore(h2, list1)





