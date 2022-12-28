export const debounce = <T extends (...args: any[]) => any>(
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
