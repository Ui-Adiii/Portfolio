import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }) {
    const ref = useRef();
    useEffect(() => {
        const lenis =new Lenis();
        ref.current = lenis;
        function raf(time){
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      return () => {
        lenis.destroy()
      }
    }, [])
    
  return <>{children}</>;
}
