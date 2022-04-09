const iconList = [...document.getElementById("iconList").children];

iconList.forEach((element) => {
	element.addEventListener("click", () => {
		iconList.forEach((b) => {
			if (b.classList.contains("active")) b.classList.remove("active");
		});

		element.classList.add("active");
	});
});

if (document.getElementById("placedIconList")) {
	const placedIconList = [...document.getElementById("placedIconList").children];

	placedIconList.forEach((element) => {
		element.addEventListener("click", async () => {
			const req = await fetch("/api/v1/settings/icons/removeIcon", {
				method: "POST",
				body: JSON.stringify({
					item: placedIconList.indexOf(element),
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (req.ok) {
				location.reload();
			} else {
				Swal.fire({
					title: (await req.json()).message,
				});
			}
		});
	});
}

document.getElementById("submit").addEventListener("click", async () => {
	const data = new FormData();

	if (document.getElementById("profile_picture").files[0])
		data.append("profile_picture", document.getElementById("profile_picture").files[0]);

	if (document.getElementById("banner").files[0]) data.append("banner", document.getElementById("banner").files[0]);

	if (document.getElementById("description").value)
		data.append("description", document.getElementById("description").value);

	if (document.getElementById("contact").value) data.append("contact", document.getElementById("contact").value);

	const req = await fetch("/api/v1/settings/update", {
		method: "POST",
		body: data,
	});

	if (req.ok) {
		document.getElementById("iframe").contentWindow.location.reload();
	} else {
		Swal.fire({
			title: (await req.json()).message,
		});
	}
});

document.getElementById("deleteAccount").addEventListener("click", async () => {
	const { value: formValues } = await Swal.fire({
		title: "Confirmation",
		description: "Confirm your password and username before deleting your account.",
		html:
			'<input id="swal-input1" class="swal2-input">' +
			'<input id="swal-input2" type="password" class="swal2-input">',

		focusConfirm: false,
		preConfirm: () => {
			return {
				username: document.getElementById("swal-input1").value,
				password: document.getElementById("swal-input2").value,
			};
		},

		showClass: {
			popup: "animate__animated animate__fadeIn",
		},
		hideClass: {
			popup: "animate__animated animate__fadeOut animate__faster",
		},
	});

	if (formValues) {
		const registerFetch = await fetch("/api/v1/login", {
			method: "POST",
			body: JSON.stringify({ ...formValues }),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (registerFetch.ok) {
			const req = await fetch("/api/v1/authenication/deleteAccount", {
				method: "POST",
			});

			if (req.ok) {
				Swal.fire({
					title: "Bye bitch",
				}).then(() => {
					location.reload();
				});
			} else {
				Swal.fire({
					title: (await req.json()).message,
				});
			}
		} else {
			Swal.fire({
				title: (await registerFetch.json()).message,
			});
		}
	}
});

document.getElementById("addButton").addEventListener("click", async () => {
	const activeButton = iconList.find((e) => e.classList.contains("active"));

	if (activeButton && document.getElementById("buttonUrl").value) {
		const button = {
			buttonClass: activeButton.children.item(0).classList.toString(),
			buttonUrl: document.getElementById("buttonUrl").value,
		};

		const req = await fetch("/api/v1/settings/icons/addIcon", {
			method: "POST",
			body: JSON.stringify(button),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (req.ok) {
			location.reload();
		} else {
			Swal.fire({
				title: (await req.json()).message,
			});
		}
	}
});
