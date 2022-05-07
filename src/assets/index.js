console.log(
	"%c READ! ",
	"font-size: 40px; color: red; border: 5px solid RED;text-shadow: 3px 3px 0 #000, -1px -1px 0 #000,1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;"
);
console.log("%cPasting anything in here could compromise your privacy.", "font-size: 16px;");

const isLocalhost = Boolean(
	window.location.hostname === "localhost" ||
		window.location.hostname === "[::1]" ||
		window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

window.bio_pages = {
	cdn: `https://f004.backblazeb2.com/file/${isLocalhost ? "melon-rest-dev" : "melon-rest"}/`,
	api: isLocalhost ? "http://localhost:8081/api/v1" : "https://api.melon.rest/api/v1",
};

twemoji.parse(document.body);
