if(!localStorage.getItem("token")) {
	window.location.href = "/";
}

const iframe = document.getElementById("iframe");

const contact = document.getElementById("contact");
const description = document.getElementById("description");
const profile_picture = document.getElementById("profile_picture");

document.getElementById("submit").addEventListener("click", () => {
	const form = new FormData() 

	if(contact.value) form.append("contact", contact.value);
	if(description.value) form.append("description", description.value);
	if(profile_picture.files.length !== 0) form.append("profile_picture", profile_picture.files[0]);

	fetch(window.biopages.backend + "/api/v1/@me/updateBasicData", {
		method: "POST",
		body: form,
		headers: {
			"X-Token": localStorage.getItem("token")
		}
	}).then(async res => {
		let body;

		try {
			body = await res.json();
		} catch {
			iziToast.error({
				title: "Error",
				message: "Internal server error experienced.",
				position: "center",
				theme: "dark"
			});
			return;
		}

		if (res.ok) {
			iziToast.success({
				title: "Success",
				message: "Sucesfully changed your profile!",
				position: "topRight",
				theme: "dark"
			});

			iframe.contentWindow.location.reload();
		} else {
			iziToast.error({
				title: "Error",
				message: body.message,
				position: "center",
				theme: "dark"
			});
		}

	})
})

async function start() {
	const user = await fetch(window.biopages.backend + "/api/v1/@me/info", {
		headers: {
			"X-Token": localStorage.getItem("token")
		}
	});

	if(user.status === 200) {
		const userInfo = await user.json();

		document.getElementById("username").innerText = userInfo.username;
		contact.value = userInfo.contact;
		description.value = userInfo.description;

		iframe.src = "/" + userInfo.username;
	} else {
		localStorage.removeItem("token");
		window.location.href = "/";
	}
}

addEventListener("load", start);