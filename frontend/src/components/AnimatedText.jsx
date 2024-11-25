import { useEffect, useState } from "react";

function AnimatedText({ text, speed }) {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    setDisplayedText(""); // Resetta il testo visualizzato quando cambia 'text'
    const interval = setInterval(() => {
      // Controlla che l'indice sia valido e che 'text[index]' non sia undefined
      if (index < text.length && typeof text[index] !== "undefined") {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval); // Ferma l'animazione una volta completata
      }
    }, speed || 200);

    return () => clearInterval(interval); // Pulisce l'intervallo al cambio di props
  }, [text, speed]);

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev); // Alterna il cursore ogni 500ms
    }, 500);

    return () => clearInterval(cursorBlink); // Pulisce l'intervallo quando il componente viene smontato
  }, []);

  return (
    <span>
      {displayedText}
      {showCursor && <span className="text-secondary-color-text">|</span>}
    </span>
  );
}

export default AnimatedText;
