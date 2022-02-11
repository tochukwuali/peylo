import { useEffect, useState } from 'react';

export const useScrollHeight = () => {
    const [scroll, setScroll] = useState(false);
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    useEffect(() => {
      document.addEventListener("scroll", handleScroll);
  
      return () => {
        // Cleanup the event listener
        document.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return scroll
}
