import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import '../styles.css';

export const usePatriotMode = (key) => {
  const [patriotMode, setPatriotMode] = useLocalStorage(key);
  useEffect(() => {
    if(patriotMode) {
      document.body.classList.add('patriot-mode');
    } else {
      document.body.classList.remove('patriot-mode');
    }
  }, [patriotMode]);
  return [patriotMode, setPatriotMode];
}