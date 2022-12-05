console.log(
	"%c READ! ",
	"font-size: 40px; color: red; border: 5px solid RED;text-shadow: 3px 3px 0 #000, -1px -1px 0 #000,1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;"
);

console.log("%cPasting anything in here could compromise your privacy.", "font-size: 16px;");
console.log("%cThere's a puzzle. Figure it out for a prize. UmFyaXR5", "font-size: 16px;");

const isLocalhost = Boolean(
	window.location.hostname === "localhost" ||
		window.location.hostname === "[::1]" ||
		window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

window.bio_pages = {
	cdn: `https://cdn.melon.rest/`,
	api: isLocalhost ? "http://localhost:8081/api/v1" : "https://api.melon.rest/api/v1",
};

twemoji.parse(document.body);

// VCLKIQEGRGD2JGMFQRAITI2AS2SKGS2AUKSIFFEJUNAPLBHY6WC7TA7ZMCDPD4EDMD2PB57YMD4IJA4FMD4IHA7YQT3YFAXZ6L3PGQEBUJAICQFCUOMYTFMHICRZMQEBSWUEBFEFSOLJKS4ZQWRKGQFCUOAYNBSASSCZJAUFTFFUB42L6H2PCS4TUU======
