const { fql, Client, FaunaError } = require('fauna');

export default {
	async fetch(req, env) {
		let client = new Client({secret: env.FAUNA_SECRET});
		let q = await client.query(fql`Time.now()`);


		return new Response(JSON.parse(q), {
			headers: {
				'content-type': 'application/json',
			},
		});
	},
};
