import { useRef } from "react";

import { useDisplayTooltip } from "./hooks";
import { TranslatorContainer } from "./style";
import Tooltip from "./Tooltip";

const Translator = (): JSX.Element => {
  const [shouldDisplayTooltip, selectedText, bottom, left] =
    useDisplayTooltip();

  console.log("coucou");

  return (
    <TranslatorContainer>
      <p>
        Bonjour, je m'appelle Sylvain Urbain Bonjour, je m'appelle Sylvain
        Urbain Bonjour, je m'appelle Sylvain Urbain Bonjour, je m'appelle
        Sylvain Urbain Bonjour, je m'appelle Sylvain Urbain Bonjour, je
        m'appelle Sylvain Urbain Bonjour, je m'appelle Sylvain Urbain Bonjour,
        je m'appelle Sylvain Urbain Bonjour, je m'appelle Sylvain Urbain
        Bonjour, je m'appelle Sylvain Urbain Bonjour, je m'appelle Sylvain
        Urbain Bonjour, je m'appelle Sylvain Urbain Bonjour, je m'appelle
        Sylvain Urbain Bonjour, je m'appelle Sylvain Urbain Bonjour, je
        m'appelle Sylvain Urbain Bonjour, je m'appelle Sylvain Urbain{" "}
      </p>
      {shouldDisplayTooltip && (
        <Tooltip bottom={bottom} left={left} selectedText={selectedText} />
      )}
    </TranslatorContainer>
  );
};

export default Translator;
