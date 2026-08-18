import { useEffect } from "react";

// Verrouille le scroll du body quand le menu mobile du Hero est ouvert.
export function useMenuBodyLock(menuOpen) {
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);
}
