"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  style = {}
}: {
  children: React.ReactNode,
  delay?: number,
  className?: string,
  style?: React.CSSProperties
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // อัปเดตสถานะทุกครั้งที่เลื่อนเข้าหรือออกจากหน้าจอ
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // ทำงานเมื่อกล่องทับซ้อน 10%
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transition: `opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)`,
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
}
