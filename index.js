const { fql, Client, FaunaError } = require('fauna');

export default {
	async fetch(req, env) {

var q1, q2, q3;
		try {
			let client = new Client({secret: env.FAUNA_SECRET});
			q1 = await client.query(fql`Time.now()`);
			q2 = await client.query(fql`Date.today()`);
			q3 = await client.query(fql`Time.now()`);

		} catch(err) {
			console.log(err);
			return new Response(err.toString());
		}
		return new Response(JSON.stringify(q1) + JSON.stringify(q2) + JSON.stringify(q3), {
			headers: {
				'content-type': 'plain/text',
			},
		});
	},
};
