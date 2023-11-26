import { fql, Client, FaunaError } from 'node:fauna';

export default {
	fetch() {
		let client = new Client({secret: env.FAUNA_KEY});
		let q = await client.query(fql`Time.now()`);


		return new Response(JSON.parse(q), {
			headers: {
				'content-type': 'application/json',
			},
		});
	},
};
