if(!localStorage.getItem("token")) {
	window.location.href = "/";
}

async function start() {
	const user = await fetch(window.biopages.backend + "/api/v1/@me/info", {
		headers: {
			"X-Token": localStorage.getItem("token")
		}
	});

	if(user.status === 200) {
		const userInfo = await user.json();

		document.getElementById("username").innerText = userInfo.username;
	} else {
		localStorage.removeItem("token");
		window.location.href = "/";
	}
}

addEventListener("load", start);