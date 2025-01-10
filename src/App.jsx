import { useState } from "react";

import "./App.css";
import PhotoUpload from "./components/PhotoUpload";
import CardView from "./components/CardView";
import ExportButton from "./components/ExportButton";
import BackgroundChanger from "./components/BackgroundChanger";
import defWall from './assets/BDAI.webp';
function App() {
  const [photo, setPhoto] = useState(null);
  const [text, setText] = useState(`Скъпи [име на госта],
  С радост те каня да празнуваме заедно моя рожден ден! 🎉
  📍 Къде: Парти център „Лъки“
  📅 Кога: [дата]
  🕒 Час: [час]
  Ще има игри, смях и много изненади! Очаквам те с нетърпение! 🎂
  Моля, потвърди присъствието си до [дата за потвърждение].
  С най-добри пожелания,
  [Твоето име]`);
const [background, setBackground]=useState(defWall)
  return (
    <>
      <PhotoUpload setPhoto={setPhoto} />
      <CardView photo={photo} text={text} setText={setText} background={background} />
      <ExportButton photo={photo} text={text} />
      <BackgroundChanger setBackground={setBackground}/>
    </>
  );
}

export default App;
