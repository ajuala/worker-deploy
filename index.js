const { fql, Client, FaunaError } = require('fauna');

export default {
	async fetch(req, env) {


		try {
			let client = new Client({secret: env.FAUNA_SECRET});
			let q1 = await client.query(fql`Time.now()`);

		} catch(err) {
			console.log(err);
			return new Response(err.toString());
		}
		return new Response(JSON.stringify(q1), {
			headers: {
				'content-type': 'application/json',
			},
		});
	},
};
