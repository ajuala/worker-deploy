const { fql, Client, FaunaError } = require('fauna');

export default {
	async fetch(req, env) {

		try {
			let client = new Client({secret: env.FAUNA_SECRET});
			let q1 = await client.query(fql`Time.now()`);
			let q2 = await client.query(fql`Date.today()`);
			let q3 = await client.query(fql`Time.now()`);
		return new Response(JSON.stringify(q1) + JSON.stringify(q2) + JSON.stringify(q3), {
			headers: {
				'content-type': 'plain/text',
			},
		});

		} catch(err) {
			console.log(err);
			return new Response(err.toString());
		}
	},
};
