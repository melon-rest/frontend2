addEventListener("load", () => {
	const style = document.createElement("style");
	style.innerHTML = `
	.centered {
		position: absolute;
		left: 50%;
		top: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}
	.size {
		width: 45%;	
	}
	input[type='email'], input[type='number'], input[type='password'], input[type='search'], input[type='tel'], input[type='text'], input[type='url'], input[type='color'], input[type='date'], input[type='month'], input[type='week'], input[type='datetime'], input[type='range'], input[type='datetime-local'], input[type='file'], input:not([type]), textarea, select {
		margin: 2px;
		padding: 5 0.8rem;
	}`;

	document.head.append(style);

	window.biopages = {
		backend: location.hostname == "127.0.0.1" ? "http://localhost:8081" : "https://api.melon.rest"
	}
})