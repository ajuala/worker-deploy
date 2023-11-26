const pdf = require("pdfjs");
const streamBuffers = require("stream-buffers");


export default {
	fetch() {

		let doc = new pdf.Document();

		doc.text("When the winter comes and the white winds blow, the lone wolf dies but the pack survives.");

		return new Response(doc.asBuffer(), {
			headers: {
				'content-type': 'application/pdf',
				'content-disposition': 'attachment; filename="the-north-remembers.pdf"',
			},
		});
	},
};
