<template>
  <button @click="generateCertificate">Generate Certificate</button>

  <a :href="certificateURL">Certificate</a>
</template>

<script>
import PDFDocument from "pdfkit";
import blobStream from "blob-stream";
import "../register-files";

export default {
  name: "ViewCertificate",
  data() {
    return {
      certificateURL: "",
    };
  },
  methods: {
    generateCertificate() {
      const doc = new PDFDocument({
        layout: "landscape",
        size: "A4",
      });
      const stream = doc.pipe(blobStream());

      doc.moveDown();
      doc.moveDown();
      doc.moveDown();
      doc.moveDown();
      doc.moveDown();
      doc.moveDown();

      doc.rect(0, 0, doc.page.width, doc.page.height).fill("#fff");

      doc.fontSize(20).fill("#021c27").text("CERTIFICATE OF COMPLETION", {
        align: "center",
      });

      doc.moveDown();
      doc.moveDown();

      doc.fontSize(15).fill("#021c27").text("PARTICIPANT NAME", {
        align: "center",
      });

      doc.moveDown();
      doc.moveDown();

      doc
        .fontSize(10)
        .fill("#021c27")
        .text("for successfully completing COURSE NAME", {
          align: "center",
        });

      doc.end();

      stream.on("finish", () => {
        console.log("Finish");
        // get a blob you can do whatever you like with
        // const blob = stream.toBlob("application/pdf");
        // or get a blob URL for display in the browser
        const url = stream.toBlobURL("application/pdf");
        console.log(typeof url);

        this.certificateURL = url;
      });
    },
  },
};
</script>
