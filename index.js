import  PDFDocument from "pdfkit";
import streamBuffers from "stream-buffers";



export default {
	fetch() {

		let doc = new PDFDocument();
		let buf = new streamBuffers.WritableStreamBuffers();
		doc.pipe(buf);

		doc.text('When the winter comes and the white winds blow, the lone wolf dies but the pack survives');

		doc.end();

		return new Response(buf.getContents(), {
			headers: {
				'content-type': 'application/pdf',
				'content-disposition': 'attacment; filename="north-remembers.pdf"',
			},
		});
	},
};
