const form = document.getElementById('form');
const email= document.getElementById('email');
const address = document.getElementById('address');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const emailValue = email.value.trim();
  const addressValue = address.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	
	
	if(emailValue  === '') {
		setErrorFor(email, 'Adresse ne peut pas etre vide');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Pas une adresse email valide');
	} else {
		setSuccessFor(email);
	}
	
  if(addressValue === '') {
		setErrorFor(address, 'Adresse postale ne peut pas etre vide');
	} else {
		setSuccessFor(address);
	}

	if(passwordValue === '') {
		setErrorFor(password, 'Mot de passe ne peut pas etre vide');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Mot de passe ne peut pas etre vide');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Mot de passe pas correct');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



