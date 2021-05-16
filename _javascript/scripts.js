const welcome = document.getElementById("welcome");

	// below code to excute getElementById 'got':
	// console.log(welcome);

function greeting()
{
	alert("Welcome to Al-khwabe!");
	welcome.textContent = "Thank you for visiting our website";
}

welcome.addEventListener("click", greeting);