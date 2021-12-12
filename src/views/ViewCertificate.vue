<template>
  <iframe id="iframepdf" :src="certificateURL"></iframe>
  <!-- <button @click="generateCertificate">Generate Certificate</button>

  <a :href="certificateURL">Certificate</a> -->
</template>

<script>
import database from "../database";
import { child, get, ref } from "firebase/database";
import PDFDocument from "pdfkit";
import blobStream from "blob-stream";
import "../register-files";

export default {
  name: "ViewCertificate",
  data() {
    return {
      certificateURL: "",
      course: {},
      user: {},
    };
  },
  created() {
    const courseID = this.$route.params.id;

    const dbRef = ref(database);
    const fetchCourse = async () => {
      get(child(dbRef, `courses/${courseID}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            this.course = snapshot.val();
          } else {
            console.log("No data available");
          }
        })
        .then(() => {
          fetchUser();
        })

        .catch((error) => {
          console.error(error);
        });
    };

    fetchCourse();

    let ID = localStorage.getItem("ID");
    const fetchUser = async () => {
      const dbRef = ref(database);
      get(child(dbRef, `users/${ID}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            this.user = snapshot.val();
            this.generateCertificate();
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
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

      doc.fontSize(15).fill("#021c27").text(this.user.fullName, {
        align: "center",
      });

      doc.moveDown();
      doc.moveDown();

      doc
        .fontSize(10)
        .fill("#021c27")
        .text("for successfully completing " + this.course.name, {
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
<style scoped>
iframe {
  height: 100vh;
  width: 100vw;
}
</style>