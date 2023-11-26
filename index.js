const { fql, Client, FaunaError } = require('fauna');

export default {
	async fetch(req, env) {

		let q = {error: "Unable to pwrform request"};

		try {
			let client = new Client({secret: env.FAUNA_SECRET});
			q = await client.query(fql`Time.now()`);

		} catch(err) {
			console.log(err);
		}
		return new Response(JSON.parse(q), {
			headers: {
				'content-type': 'application/json',
			},
		});
	},
};
