import { opine } from "https://deno.land/x/opine/mod.ts";
import staticFiles from "https://deno.land/x/static_files@1.1.6/mod.ts";
import { Liquid } from "https://esm.sh/liquidjs"

const app = opine();

const backend = Deno.env.get("DENO_DEPLOYMENT_ID") ? "https://api.melon.rest" :"http://localhost:8081";
const userTemplate = await Deno.readTextFile("user.html")
const templating = new Liquid();

app.use(staticFiles("website"));

app.get("/:user", (req, res) => {
	res.send(templating.parseAndRenderSync(userTemplate, {
		username: "yourfriend",
		contact: "friend@yourfriend.lv",
		description: "This is not melon.rest I promise!!! :3",
		profile_picture: "https://cdn.discordapp.com/attachments/932004910856273941/941259618435350528/thumb-156141.png",
	}))
	/*
	fetch(backend + "/api/v1/user/" + req.params.user)
	.then(async response => {
		res.send(templating.parseAndRenderSync(userTemplate, await response.json()));
	})
	.catch(e => {
		res.setStatus(500);
		res.send("500 " + e);
	});*/
})
app.listen(8080, () => {
	console.log("Started frontend!")
});