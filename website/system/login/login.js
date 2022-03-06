// deno-lint-ignore-file
const usernameElement = document.getElementById("username");
const passwordElement = document.getElementById("password");

document.getElementById("submit").addEventListener("click", () => {
	fetch(window.biopages.backend + "/api/v1/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			username: usernameElement.value,
			password: passwordElement.value
		})
	})
	.then(async response => {
		let body;

		try {
			body = await response.json();
		} catch {
			iziToast.error({
				title: "Error",
				message: "Internal server error experienced.",
				position: "center",
				theme: "dark"
			});
			return;
		}

		if (response.ok) {
			localStorage.setItem("token", body.token);

			iziToast.success({
				title: "Success",
				message: "You are now logged in :)",
				position: "center",
				theme: "dark"
			});

			setTimeout(() => {
				window.location.href = "/system/user/";
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