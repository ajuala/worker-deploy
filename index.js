


export default {
	fetch() {

		return new Response("Happy people", {
			headers: {
				'content-type': 'plain/text',
			},
		});
	},
};
