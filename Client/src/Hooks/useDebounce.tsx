import { useRef } from 'react';

function useDebounce() {
  const typingTimeout = useRef<any>();
  function debounce(fn: Function, wait: number, params: any) {
    clearTimeout(typingTimeout.current);
    const timeout = setTimeout(() => fn(params), wait);
    typingTimeout.current = timeout;
  }
  return debounce;
}

export default useDebounce;
