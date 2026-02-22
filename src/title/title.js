import '../App.css';
import {useEffect, useRef, useState} from "react";

export function Title({ title }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(domRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={"title column"}>
      <h3 className={"textPrimary contentTitle"}>{title.toUpperCase()}</h3>
      <div ref={domRef} className={`divider ${isVisible ? 'visible' : ''}`}></div>
    </section>
  );
}