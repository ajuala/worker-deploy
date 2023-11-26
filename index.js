const { fql, Client, FaunaError } = require('fauna');

export default {
	async fetch(req, env) {

		try {
			let client = new Client({secret: env.FAUNA_SECRET});
			let q = await client.query(fql`Time.now()`);

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
