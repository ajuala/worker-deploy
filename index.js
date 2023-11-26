const { fql, Client, FaunaError } = require('fauna');

export default {
	async fetch(req, env) {


		try {
			let client = new Client({secret: env.FAUNA_SECRET});
			let q1 = await client.query(fql`Time.now()`);
			let q2 = await client.query(fql`Date.now()`);
			let q3 = await client.query(fql`Time.now()`);
			client.close();
			console.log(q);

		} catch(err) {
			console.log(err);
			return new Response(err.toString());
		}
		return new Response(JSON.stringify([q1, q2, q3]), {
			headers: {
				'content-type': 'application/json',
			},
		});
	},
};
