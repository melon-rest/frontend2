const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

window.bio_pages = {
	cdn: `https://cdn.melon.rest/${isLocalhost ? "melon-rest-dev" : "melon-rest"}/`,
	api: isLocalhost ? "http://localhost:8081/api/v1" : "https://api.melon.rest/api/v1",
}