export default {
	fetch() {
		return new Response(new Date().toISOString(), {
			headers: {
				'content-type': 'text/plain',
			},
		});
	},
};
