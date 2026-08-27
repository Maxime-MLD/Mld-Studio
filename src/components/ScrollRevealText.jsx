import { useEffect, useRef } from "react";

function ScrollRevealText({
  as: Tag = "span",
  lines,
  className = "",
  ...props
}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.classList.add("is-revealed");
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        element.classList.add("is-revealed");
        observer.disconnect();
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={elementRef}
      className={`${className} title-reveal`.trim()}
      {...props}
    >
      {lines.map((line, index) => (
        <span
          className="title-line-mask"
          style={{ "--title-line-index": index }}
          key={index}
        >
          <span className="title-line-text">{line}</span>
        </span>
      ))}
    </Tag>
  );
}

export default ScrollRevealText;
