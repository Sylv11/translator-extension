import { useDisplayTooltip } from "./hooks";
import { TranslatorContainer } from "./style";
import Tooltip from "./Tooltip";
import deepl_logo from "@assets/img/deepl_logo.png";

const Translator = (): JSX.Element => {
  const [shouldDisplayTooltip, selectedText, bottom, left] =
    useDisplayTooltip();

  console.log("coucou");

  return (
    <TranslatorContainer>
      <img src={deepl_logo} alt="Test" />

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
