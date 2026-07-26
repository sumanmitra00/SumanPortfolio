import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref to attach to an element and a boolean for whether
 * that element has entered the viewport. Used to gate Framer Motion
 * scroll-reveal animations without re-triggering on every scroll.
 */
export default function useInView(options = { threshold: 0.15, triggerOnce: true }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (options.triggerOnce) observer.unobserve(node);
      } else if (!options.triggerOnce) {
        setInView(false);
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}
