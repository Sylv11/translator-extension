import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { Tooltip, TranslatorContainer } from './style';
import { translate } from './utils';

const authKey = 'b08e5514-4108-5606-042b-a9b26cce7a4c:fx'


const Translator = (): JSX.Element => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [selectedText, setSelectedText] = useState<string | undefined>('');

  useEffect(() => {
    const selectionChangeHandler = (_: Event) => {
      const selection = window.getSelection();
      setSelectedText(selection?.toString())


    };

    document.addEventListener('selectionchange', selectionChangeHandler)

    return () => {
      document.removeEventListener('selectionchange', selectionChangeHandler)
    }
  }, []);

  const onClick: MouseEventHandler<HTMLDivElement> = async (e) => {
    e.preventDefault()


  }

  return (
    <TranslatorContainer>
      <p>
        Bonjour, je m'appelle Sylvain Urbain
      </p>
      <Tooltip ref={tooltipRef} onMouseDown={onClick} />


    </TranslatorContainer>
  )
}

export default Translator
