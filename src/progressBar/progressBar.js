import React, {useEffect, useRef, useState} from "react";
import './progressBar.css'


export function ProgressBar({ width }) {
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(barRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="progress-container">
      <div
        ref={barRef}
        className={`progress-bar`}
        style={{
          width: `${isVisible ? width : 0}%`,
        }}
      >
      </div>
    </div>
  )
}