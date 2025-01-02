import { useState } from "react";

import "./App.css";
import PhotoUpload from "./components/PhotoUpload";
import CardView from "./components/CardView";
import ExportButton from "./components/ExportButton";

function App() {
  const [photo, setPhoto] = useState(null);
  const [text, setText] = useState("");

  return (
    <>
      <PhotoUpload setPhoto={setPhoto} />
      <CardView text={text} setText={setText} photo={photo} />
      <ExportButton photo={photo} text={text} />
    </>
  );
}

export default App;
