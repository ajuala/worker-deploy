const { fql, Client, FaunaError } = require('fauna');

export default {
	async fetch(req, env) {

		let q = {error: "Unable to perform request"};

		try {
			let client = new Client({secret: env.FAUNA_SECRET});
			q = await client.query(fql`Time.now()`);
			console.log(q);

		} catch(err) {
			console.log(err);
			return new Response(err.toString());
		}
		return new Response(JSON.stringify(q), {
			headers: {
				'content-type': 'application/json',
			},
		});
	},
};
