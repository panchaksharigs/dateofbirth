const dateOfBirth = document.querySelector("#date-of-birth");
const checkButton = document.querySelector("#check-date");

function getValues(){
	const date =  new Date();
     document.getElementById("demo").innerHTML = date.getFullYear();
}
checkButton.addEventListener('click',getValues);