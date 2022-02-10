const usernameInput = document.getElementById("username");
const usernameInputText = usernameInput.parentElement.querySelector(".ms-under-input");

usernameInput.addEventListener("input", ev => {
	usernameInput.className = "ms-info"
	usernameInputText.className = "ms-under-input ms-text-info"
	usernameInputText.innerText = "Checking availability...";
	fetch(window.biopages.backend + "/api/v1/username-availability", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			username: usernameInput.value
		})
	})
	.then(async response => {
		try {
			const body = await response.json();
		} catch {
			usernameInput.className = "ms-danger"
			usernameInputText.className = "ms-under-input ms-text-danger"
			usernameInputText.innerText = "Failed to check availability.";
	
			return;
		}


		if(body.taken) {
			usernameInputText.className = "ms-under-input ms-text-danger"
			usernameInput.className = "ms-danger"
			usernameInputText.innerText = "Username is taken.";
		} else {
			usernameInput.className = "ms-success"

			usernameInputText.className = "ms-under-input ms-text-success"
			usernameInputText.innerText = "Username is available!";
		}
	})
	.catch(() => {
		usernameInput.className = "ms-danger"
		usernameInputText.className = "ms-under-input ms-text-danger"

		usernameInputText.innerText = "Failed to check availability.";

	})
})

const passwordInput = document.getElementById("password");

document.getElementById("submit").addEventListener("click", () => {
	fetch(window.biopages.backend + "/api/v1/register", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			username: usernameInput.value,
			password: passwordInput.value
		})
	})
	.then(async response => {
		try {
			const body = await response.json();
		} catch {
			iziToast.error({
				title: "Error",
				message: "Internal server error experienced.",
				position: "center",
				theme: "dark"
			});
			return;
		}

		if (response.status === 200) {
			iziToast.success({
				title: "Success",
				message: "You've registered a account! Please log in now!",
				position: "center",
				theme: "dark"
			});

			setTimeout(() => {
				window.location.href = "/";
			}, 1000);
		} else {
			iziToast.error({
				title: "Error",
				message: body.message,
				position: "center",
				theme: "dark"
			});
		}
	}).catch(() => {
		iziToast.error({
			title: "Error",
			message: "Internal server error experienced.",
			position: "center",
			theme: "dark"
		});
	})
})