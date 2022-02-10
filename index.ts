import { opine } from "https://deno.land/x/opine/mod.ts";
import staticFiles from "https://deno.land/x/static_files@1.1.6/mod.ts";
import * as Eta from "https://deno.land/x/eta@v1.12.3/mod.ts";

const app = opine();
const backend = Deno.env.get("DENO_DEPLOYMENT_ID") ? "https://api.melon.rest" :"http://localhost:8081";
const userTemplate = await Deno.readTextFile("user/index.html")
app.use(staticFiles("website"));
app.get("/:user", async (req, res) => {
	console.log(backend + "/" + req.path);
	fetch(backend + "/")
	.then(async response => {
		res.send(Eta.render(userTemplate, await response.json()));
	})
	.catch(e => {
		res.setStatus(500);
		res.send("500 " + e);
	});


})
app.listen(8080, () => {
	console.log("Started frontend!")
});