import { useEffect, useState } from "react";

export function useMediaQuery(query) {
  const [value, setValue] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    function onChange(event) {
      setValue(event.matches);
    }
    const result = matchMedia(query);
    result.addEventListener("change", onChange);
    setValue(result.matches);
    return () => result.removeEventListener("change", onChange);
  }, [query]);

  // Return false during SSR to prevent hydration mismatch
  return isClient ? value : false;
}
