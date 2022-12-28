import { MouseEventHandler, useEffect, useState } from "react";
import deepl_logo from "../assets/deepl_logo.png";
import { TSelectedText } from "../hooks";
import { translate } from "../utils";
import {
  Column,
  CopyToClipboardIcon,
  DeepLLogo,
  TooltipContainer,
  Translation,
} from "./style";

export interface ITooltipProps {
  bottom: number;
  left: number;
  selectedText: TSelectedText;
}

const Tooltip = ({
  bottom,
  left,
  selectedText,
}: ITooltipProps): JSX.Element => {
  const [shouldTranslate, setShouldTranslate] = useState(false);
  const [translatedText, setTranslatedText] = useState<string | undefined>("");

  useEffect(() => {
    const fetchTranslation = async () => {
      if (shouldTranslate) {
        const translation = await translate(selectedText);
        setTranslatedText(translation);
      }
    };

    fetchTranslation();
  }, [shouldTranslate]);

  const onClick: MouseEventHandler<HTMLDivElement> = async (e) => {
    e.preventDefault();
    setShouldTranslate(!shouldTranslate);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(translatedText!);
  };

  return (
    <TooltipContainer bottom={bottom} left={left}>
      {!shouldTranslate ? (
        <DeepLLogo src={deepl_logo} alt="deepl_logos" onMouseDown={onClick} />
      ) : (
        <>
          <CopyToClipboardIcon onClick={copyToClipboard} />
          <Column>
            <p style={{ margin: 0 }}>Select</p>
            <Translation>{translatedText}</Translation>
          </Column>
        </>
      )}
    </TooltipContainer>
  );
};

export default Tooltip;
