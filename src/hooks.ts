import { useEffect, useState } from "react";

export type TSelectedText = string | undefined;
type TUseDisplayTooltip = [boolean, TSelectedText, number, number];

export const useDebounce = <T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): T => {
  let timer: any;

  return ((...args: any[]) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, delay);
  }) as T;
};

export const useDisplayTooltip = (): TUseDisplayTooltip => {
  const [shouldDisplayTooltip, setShouldDisplayTooltip] = useState(false);
  const [selectedText, setSelectedText] = useState<TSelectedText>("");
  const [bottom, setBottom] = useState(0);
  const [left, setLeft] = useState(0);

  const selectionChangeHandler = useDebounce((_: Event) => {
    const selection = window.getSelection();
    setSelectedText(selection?.toString());
    setShouldDisplayTooltip(!!selection?.toString());

    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const { bottom, left } = range.getBoundingClientRect();

      setBottom(bottom);
      setLeft(left);
    }
  }, 800);

  useEffect(() => {
    document.addEventListener("selectionchange", selectionChangeHandler);

    return () => {
      document.removeEventListener("selectionchange", selectionChangeHandler);
    };
  }, []);

  return [
    shouldDisplayTooltip,
    selectedText,
    bottom,
    left,
  ]
}
