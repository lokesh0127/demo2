
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//   e.preventDefault();
  
//   if(nameInput.value === '' || emailInput.value === '') {
 
//     msg.classList.add('error');
//     msg.innerHTML = 'Please enter all fields';

//     setTimeout(() => msg.remove(), 3000);
//   } else {

//     localStorage.setItem("Name" , nameInput.value)
//     localStorage.setItem("Email" , emailInput.value)

//     nameInput.value = '';
//     emailInput.value = '';
//   }
// }


myForm.addEventListener("submit", function (e) {
  e.preventDefault(); 

  var existingUserDetails = JSON.parse(localStorage.getItem("userDetails")) || [];
  
  var userDetails = {
    username: nameInput.value,
    email: emailInput.value,
  };

  existingUserDetails.push(userDetails);
  
  localStorage.setItem("userDetails", JSON.stringify(existingUserDetails));
 
});