import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";

export function useHeroPhoto() {
  const [src, setSrc] = useState(profile.heroPhotoFallback);

  useEffect(() => {
    const img = new Image();
    img.src = profile.heroPhoto;
    img.onload = () => setSrc(profile.heroPhoto);
    img.onerror = () => setSrc(profile.heroPhotoFallback);
  }, []);

  return src;
}
