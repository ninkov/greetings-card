import { useState } from "react";

export default function BackgroundChanger({ setBackground }) {
  const [customUrl, setCustomUrl] = useState("");

  const changeBackground = (url) => {
    if (url.startsWith("http") || url.startsWith("src/assets/")) {
      setBackground(url);
    } else {
      alert("Invalid URL");
    }
  };
  return (
    <div className="background-changer">
    <button
      onClick={() => changeBackground("src/assets/frozen-kingdom.jpg")}
      className="bg-button"
    >
      Frozen Kingdom
    </button>
    <button
          onClick={() => changeBackground("src/assets/spider-man.jpg")}
          className="bg-button"
        >
          Spider Man
        </button>
        <button
          onClick={() => changeBackground("src/assets/modern-avengers.jpg")}
          className="bg-button"
        >
          Marvel
        </button>

    </div>
  );
}
