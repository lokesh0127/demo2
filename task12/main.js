var form = document.getElementById('myForm')
var nameInput = document.getElementById('name')
var emailInput = document.getElementById('email')
var phoneNumber = document.getElementById('phoneNumber')
var list = document.getElementById("list-group")



form.addEventListener('submit', onsubmit)

function onsubmit(e){
    e.preventDefault();

    let li = document.createElement("li");

    let textNode = document.createTextNode(
        `NAME : ${nameInput.value}; EMAIL : ${emailInput.value}; PHONE : ${phoneNumber.value}`
    );

    li.appendChild(textNode);
    
    list.appendChild(li)

    var existingUserDetails = JSON.parse(localStorage.getItem("userDetails")) || [];
  
    var userDetails = {
      username: nameInput.value,
      email: emailInput.value,
      phoneNumber : phoneNumber.value
    };
  
    existingUserDetails.push(userDetails);
    
    localStorage.setItem("userDetails", JSON.stringify(existingUserDetails));

}