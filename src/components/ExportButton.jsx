import { toPng } from "html-to-image";
import download from "downloadjs";

export default function ExportButton({ photo, text }) {
  const exportCard = () => {
    const node = document.getElementById("card");
    toPng(node)
      .then((dataUrl) => {
        download(dataUrl, "greeting-card.png");
      })
      .then((error) => {
        console.log("Error exporting the cad", error);
      });
  };
  return (
    <button onClick={exportCard} className="export-button">
      Export Card
    </button>
  );
}
