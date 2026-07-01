import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    
    if (!dot || !outline) return;

    const onMouseMove = (e) => {
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      
      // Outline follows with slight delay
      setTimeout(() => {
        if (outline) {
          outline.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }
      }, 50);
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={outlineRef} className="cursor-outline"></div>
    </>
  );
};

export default CustomCursor;
