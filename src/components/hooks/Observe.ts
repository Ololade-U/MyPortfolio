import { useEffect, useRef, useState } from "react";

export const useObserve = ()=>{
    const componentRef = useRef(null);
      const [isInView, setIsInView] = useState(false);
      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              setIsInView(entry.isIntersecting);
            });
          },
          {
            threshold: 0, // When 0% of the target is visible
          }
        );
    
        if (componentRef.current) {
          observer.observe(componentRef.current);
        }
    
        // Clean up the observer when the component unmounts
        return () => {
          if (componentRef.current) {
            observer.unobserve(componentRef.current);
          }
        };
      }, []);
    return { componentRef, isInView}
}
