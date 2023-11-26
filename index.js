export default {
	fetch() {
		return new Response(new Date().toISOString().slice(0, 10), {
			headers: {
				'content-type': 'text/plain',
			},
		});
	},
};
