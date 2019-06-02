const inputEmail = document.getElementById("email");

const inputPassword = document.getElementById("password");
const inputConfirmPassword = document.getElementById("confirmPassword");
const registerForm = document.getElementById('registerForm');
const newPara = document.createElement("p");
newPara.setAttribute("id", "messageId");
registerForm.appendChild(newPara);

function deletP(){
  document.getElementById("messageId").value = "";
};

registerForm.addEventListener('submit', event => {
event.preventDefault();
deletP();


if (inputEmail.value === ''){
  para.textContent = "PLEASE ENTER AN EMALL ADDREES";
} else if (!inputEmail.value.includes("@")) {
  para.textContent = "PLEASE ENTER A VALED EMAIL";
} else if (inputPassword.value !== inputConfirmPassword.value){
  para.textContent = "PLEASE INTER THE SAME Password";
}
});
