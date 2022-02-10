window.addEventListener("load", () => {
	const style = document.createElement("style");
	style.innerHTML = `.centered {position: absolute;left: 50%;top: 50%;-webkit-transform: translate(-50%, -50%);transform: translate(-50%, -50%);width: 45%;text-align: center;}`;
	document.head.append(style);

	window.biopages = {
		backend: location.hostname == "127.0.0.1" ? "http://localhost:8081" : "https://api.melon.rest"
	}
})